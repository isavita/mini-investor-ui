# Install Alpine linux with Node
FROM node:11.5.0-alpine

# Install basic http server for assets
RUN npm install -g http-server

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

# Expose port 8080
EXPOSE 8080

# Run the http-server
CMD [ "http-server", "dist" ]
