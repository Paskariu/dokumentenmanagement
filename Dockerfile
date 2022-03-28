# syntax=docker/dockerfile:1

FROM node:8-alpine
ENV NODE_ENV=production
ENV EXIFTOOL_VERSION=10.2

WORKDIR /app

COPY ["./api/package.json", "./api/package-lock.json*", "./", "./api/"]

RUN cd api && npm install --production \
    && rm -rf Image-ExifTool-${EXIFTOOL_VERSION}

RUN npm install cors

RUN npm install express

RUN npm install express-fileupload

RUN npm install morgan

RUN npm install body-parser

RUN npm install mysql2

RUN npm install @angular/cli

RUN npm install ngx-dropzone

RUN npm install httpclient


COPY . .

CMD [ "node", "./api/app.js" ]

#CMD ["npm","run", "start-debug"]