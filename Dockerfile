# -----------------------------------------------
# Stage 1: Build frontend assets with Vite
# -----------------------------------------------
FROM node:20-alpine as node_builder

WORKDIR /app

COPY package*.json vite.config.* postcss.config.js tailwind.config.js ./
COPY resources ./resources

RUN npm install && npm run build


# -----------------------------------------------
# Stage 2: Laravel + PHP Extensions + Composer
# -----------------------------------------------
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git \
    libzip-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    nginx \
    supervisor \
    gettext &&  \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy Laravel app source code
COPY . .

# Copy built assets
COPY --from=node_builder /app/public /var/www/public

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www/storage

# Copy NGINX and Supervisor config
COPY docker/nginx/nginx.conf.template /etc/nginx/nginx.conf.template
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Use default user
USER root

EXPOSE 8080

CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/sites-enabled/default && /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf"]
