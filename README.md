# web-crud-fullstack-react-postgres

## Pre-requisites
- Postgres Database should be installed(Either on local or on server)
- NodejS and NPM should be installed, node version 16 is preferred

## Backend
To run backend first you need to install and run database on your local machine.
Once the Database is running then you can download the zip file of this repo / clone this repo on your local machine, and then 

```bash
$ cd backend
```

### Installation

```bash
$ npm install
```

Edit .env file to enter database details 

DATABASE_URL="postgresql://<USER_NAME>:<PASSWORD>@localhost:5432/postgres?schema=public"


### Running the app

```bash
# development
$ npm run start
```

## Frontend

```bash
$ cd frontend
```
### Installation

```bash
$ npm install
```

### Running the app

```bash
$ npm start
```
