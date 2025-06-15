# Stage 1: PHP-FPM and Laravel Backend Setup
FROM php:8.2-fpm-alpine as php_builder

# Install necessary system dependencies for PHP extensions
RUN apk add --no-cache \
    curl \
    git \
    build-base \
    libpng-dev \
    libjpeg-turbo-dev \
    libzip-dev \
    oniguruma-dev \
    libxml2-dev

# Install PHP extensions required by Laravel
RUN docker-php-ext-configure gd --with-jpeg=/usr/include/ \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    gd \
    zip \
    xml

# Clear apk cache to reduce image size
RUN rm -rf /var/cache/apk/*

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory for Laravel application
WORKDIR /var/www

# Copy only composer files to leverage Docker caching for dependencies
COPY composer.json composer.lock ./

# Install Composer dependencies (production only)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Stage 2: Node.js Frontend Build
FROM node:20-alpine as node_builder

WORKDIR /var/www

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 3: Final Image - Combine PHP-FPM, Nginx, and Compiled Application
FROM php:8.2-fpm-alpine

# Install Nginx
# alpine uses apk
RUN apk add --no-cache nginx

# Set application working directory
WORKDIR /var/www

# Copy application code from the host (current directory of Dockerfile)
COPY . /var/www

# Copy Composer dependencies from the php_builder stage
COPY --from=php_builder /var/www/vendor /var/www/vendor

# Copy compiled frontend assets from the node_builder stage
COPY --from=node_builder /var/www/public/build /var/www/public/build

# Set permissions for Laravel's storage and cache directories
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage \
    && chmod -R 775 /var/www/bootstrap/cache

# Configure Nginx
# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration for Cloud Run
# This assumes nginx-cloudrun.conf is in your project root
COPY nginx-cloudrun.conf /etc/nginx/conf.d/default.conf

# Run Laravel production optimizations inside the image
USER www-data # Run artisan commands as www-data
RUN php artisan optimize:clear \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache \
    && php artisan event:cache \
    && php artisan storage:link # Only if you need this link created during build

# Switch back to root user for starting services if needed (Nginx requires root)
USER root

# Cloud Run expects your container to listen on the port specified by the PORT env variable.
# Nginx needs to be configured to listen on this port.
# EXPOSE 8080 (optional, as Nginx will listen on $PORT)

# The command to run when the container starts.
# This starts PHP-FPM in the background and Nginx in the foreground.
# Cloud Run needs a foreground process to consider the container healthy.
CMD php-fpm -D && nginx -g 'daemon off;'
