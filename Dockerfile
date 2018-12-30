# Build stage
# Install Alpine linux with Node
FROM node:11.5.0-alpine as build-stage

# Create app directory and make it build directory for COPY, RUN, CMD etc.
WORKDIR /app

# Copy package.json and package-lock.json for cache purposes
COPY package*.json ./

# Install all packages from package.json
RUN npm install

# Copy all files from current directory to WORKDIR
COPY . .

# Build the production version of the app in dist
RUN npm run build

# Production stage
# Install nginx
FROM nginx:1.15.8-alpine as production-stage

# Copy /app/dist from the byild-stage to nginx's base directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 which is the default for nginx
EXPOSE 80

# Run nginx's server
CMD ["nginx", "-g", "daemon off;"]
