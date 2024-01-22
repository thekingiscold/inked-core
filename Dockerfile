# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

# Expose the port that your Express app will run on
EXPOSE 3001

# Start the Express app
CMD ["npm", "start"]