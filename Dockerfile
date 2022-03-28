FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY . .

EXPOSE 3000 
CMD [ "node", "./api/app.js" ]

