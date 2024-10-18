

ARG NODE_VERSION=20.16.0

FROM node:${NODE_VERSION}-alpine



WORKDIR /app

# Copy the package.json and package-lock.json.
COPY package*.json ./

RUN npm install 



# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
