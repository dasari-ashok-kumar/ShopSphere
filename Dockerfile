# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the Angular project
COPY . .

# Build Angular application
RUN npm run build

# Stage 2: Serve Angular using Nginx
FROM nginx:alpine

# Copy Angular build output to Nginx
COPY --from=build /app/dist/ShopSphere/browser /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]