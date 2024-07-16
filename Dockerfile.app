FROM node:alpine

EXPOSE 4200/tcp

WORKDIR /usr/src/app/app

COPY . /usr/src/app

RUN npm install

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
