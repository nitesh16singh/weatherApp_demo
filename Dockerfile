FROM node:20-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g nodemon
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/

EXPOSE 3000

ENTRYPOINT npm run start