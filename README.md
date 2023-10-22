## Description

## Installation

### Install and start Docker mongo image
```bash
# pull mongo image
$ docker pull mongo

#start mongo image
$ docker run --name common-def -p 27017:27017 -d mongo
```

### Install dependencies
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

