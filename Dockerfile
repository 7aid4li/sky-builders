# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies 
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the Vite React App for production
RUN npm run build

# Make port 3000 available outside this container
EXPOSE 3000

# Run the server when the container launches
CMD ["npm", "start"]
