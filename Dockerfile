# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["./api/package.json", "./api/package-lock.json*", "./", "./api/"]

RUN cd api && npm install --production

RUN npm install cors

RUN npm install express

RUN npm install express-fileupload

RUN npm install morgan

RUN npm install body-parser

RUN npm install mysql2

COPY . .

CMD [ "node", "./api/app.js" ]

#CMD ["npm","run", "start-debug"]