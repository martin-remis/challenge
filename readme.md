# MR Challenge

### Project structure
```
root
├── back
│   ├── app
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── repositories
│   │   ├── schemas
│   │   └── services
│   ├── config
│   ├── db
│   │   ├── init
│   │   └── migrations
│   ├── tests
│   ├── app.js
│   └── server.js
└── front
    ├── public
    └── src
        ├── components
        ├── utils
        └── index.js
```

## Run all with docker-compose
1. Install docker-compose.
2. Execute `docker-compose up --build` at the `root` folder.
3. Browse at `http://localhost:3000/`.

> You may or may not need to use `sudo` depending on OS.

## Back
In order to run back project you have to use docker-compose on a local environmet, or build the dockerfile and provide a database.

### Run all back with docker-compose
1. Install docker-compose.
2. Move to `back` folder.
3. Execute `docker-compose -f docker-compose-back.yml up --build`.

> You may or may not need to use `sudo` depending on OS.

### With Dockerfile
1. Install docker.
2. Run a database and configure it into the dockerfile at `/back/Dockerfile`.
3. Build and excecute the app at `back` folder with:
```
docker build . -t node-web-app
docker run -p 8080:8080 -d node-web-app
```

### Run manually
1. Install node 16.
2. Move to folder `back`.
3. Install dependencies with `npm i`.
4. Configure the an env file at `.env` like this:
```
PORT=8080
DB_PORT=35432
DB_PORT_TEST=35432
DB_NAME=db_challenge
DB_USER=user
DB_PASS=pass
DB_NAME_TEST=db_challenge_test
DB_HOST=127.0.0.1
```
5. Start the server with `npm run dev`

### Tests
For test excecution there must be a testing database configured on the env file (or you can use the docker-compose at `back/db/docker-compose-dbs-only.yml`, wich create a container with dev and testing databases).

Once there is a db running, update the testing database to the current migration with `npm run migrations-test`

Finally, exceute the tests with `npm run test`

## Front
In order to run the web app you have to use docker-compose on a local environmet, or build the dockerfile and provide the api and the database.

### With Dockerfile
1. Install docker.
2. Build and excecute the app at `front` folder with:
```
docker build . -t react-web-app
docker run -p 3000:3000 -d react-web-app
```

### Run manually
1. Install node 16.
2. Move to folder `front`.
3. Install dependencies with `npm i`
4. Start the server with `npm run start`