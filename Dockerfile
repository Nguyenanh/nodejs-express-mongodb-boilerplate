FROM node:10
# Set the app directory
RUN mkdir /app
WORKDIR /app

# Copy package.json file
COPY package.json .

# Insall NPM dependencies
RUN npm install -g nodemon
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 3000
