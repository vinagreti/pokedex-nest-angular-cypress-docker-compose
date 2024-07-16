# Pokédex

This repository is a template for a Pokédex application. It contains a server-side
REST API built using [NestJS](https://nestjs.com) and a client-side single-page
application built in [Angular](https://angular.dev).

## Prerequisites

- [Node.js v20](https://nodejs.org/en)

## Setup

1. Clone the repository.
2. Install dependencies:
   ```shell
   cd /path/to/cloned/pokedex/
   cd api/
   npm install
   cd ../app/
   npm install
   ```

## Run

### Running on Docker

You can run both apps using Docker.

```shell
docker-compose up
```

After editing a Dokerfile force the image recreation when starting the container

```shell
docker-compose up --force-recreate --build -d
```

### Runnign locally

Both the API and app will rebuild as changes are made to them.
In two separate shells, start the API and app:

```shell
cd api/
npm run start
```

It will start the app on [https://localhost:4200](https://localhost:4200). `/` and `/:id` are available for testing.

```shell
cd app/
npm run start
```

It will start the api on [https://localhost:3000/api](https://localhost:4200/api). `/pokemon` and `/pokemon/:id` are available for testing.

## Testing

For both apps, you can run the tests using the test script

```shell
cd api/
npm run test
```

```shell
cd app/
npm run test
```

### E2E testing

```shell
cd app/
npm run e2e
```
