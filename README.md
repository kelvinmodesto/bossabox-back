## About 

Here we can describe details that are common to all services like formats, headers, types of errors, etc.

## Configuring project

Install yarn:
```
npm install -g yarn
```

Install packages:
```sh
yarn
```

### Configuring Database

```sh
docker pull mongo
```

Create a mongodb container

```sh
docker run  --name mongodb -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME="admin"  -e MONGO_INITDB_ROOT_PASSWORD="admin"  -d
 mongo
```

Execute mongodb container

```sh
docker exec -it mongodb mongo --host localhost -u "admin" -p "admin" --authenticationDatabase admin 
```

Using mongo, choose database and create a new collection for the application
```sh
use admin 
```

```sh
db.createCollection("tools") 
```

The Database is listening 27017 port number

### Running project
```sh
npm run start 
```

The project is listening 3000 port number

### Generate the API documentation
```sh
npm run docs 
```
### Open index.html file and read API Documentation

### Open challenges.md for read possible future challenges.
