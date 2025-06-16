FROM nginx:stable-alpine

# Remove default conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy config directly (no template processing)
COPY docker/nginx/nginx-dev.conf /etc/nginx/conf.d/default.conf

# Start normally
CMD ["nginx", "-g", "daemon off;"]
