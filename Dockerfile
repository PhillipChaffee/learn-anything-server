FROM node:14.10.1-alpine3.12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#RUN npm install
# If you are building your code for production
RUN npm ci --only=production
RUN npm i -g typescript@3.3.3333
RUN npm i @types/node@^8.0.29

# Bundle app source
COPY . .

# Compile typescript
RUN tsc

EXPOSE 8080
CMD [ "node", "build/index.js" ]