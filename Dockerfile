# Use Node.js Alpine for a lightweight container
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose React's default dev port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
