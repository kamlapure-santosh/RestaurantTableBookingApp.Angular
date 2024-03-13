# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:latest as build

# Set the woking directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build-prod

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
# here /usr/local/app/dist/‹app-name> in this project the app-name which is ideally
# comes from tsconfig. json has only "outDir": "./dist". Adjust according to your project name
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80