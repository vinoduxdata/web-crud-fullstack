## Backend
To run backend first you need to run database in your local.
Once the Database is running then you can run

```bash
$ cd backend
```

## Installation

```bash
$ npm install
```


### Edit .env file to enter database details 
```bash
DATABASE_URL="postgresql://USER_NAME:PASSWORD@localhost:5432/postgres?schema=public"
```

### Generate Prisma client
```bash
$ npx prisma generate
```
```bash

### Push your model to Database
$ npx prisma db push

## Running the app
```bash
# development
$ npm run start
```







