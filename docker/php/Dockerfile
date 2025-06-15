# Set the base image for subsequent instructions
FROM php:8.2-fpm

# Install dependencies
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
    libpng-dev && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
# Copy Composer from its official image, ensuring you have the latest version.
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory inside the container
WORKDIR /var/www

# Remove default server definition if it exists (common for some base images)
RUN rm -rf /var/www/html

# Copy existing application directory contents into the container
# This is the primary COPY command, setting appropriate permissions for www-data.
COPY --chown=www-data:www-data . /var/www

# Change current user to www-data for running application commands
USER www-data

# Expose port 9000 for PHP-FPM communication
EXPOSE 9000

# Start php-fpm server when the container runs
CMD ["php-fpm"]
