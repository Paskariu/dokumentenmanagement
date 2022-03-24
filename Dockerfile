# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["./api/package.json", "./api/package-lock.json*", "./", "./api/"]

RUN cd api && npm install --production

COPY . .

CMD [ "node", "./api/app.js" ]