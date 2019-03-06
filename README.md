## About 

Aqui podemos descrever detalhes que são comuns a todos os serviços como formatos, headers, tipos de erros, etc

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

Agora criando os conteiners do mongo e do seu respectivo cliente

```sh
docker run  --name mongodb -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME="admin"  -e MONGO_INITDB_ROOT_PASSWORD="admin"  -d
 mongo
```

Para finalizar, executa os conteiners e configura o  mongo

```sh
docker exec -it mongodb mongo --host localhost -u "admin" -p "admin" --authenticationDatabase admin 
```

Dentro do mongo, executa esses dois comandos
```sh
use admin 
```

```sh
db.createCollection("tools") 
```

Com isso, o mongo vai executar na porta 27017.

### Running project
```sh
npm run start 
```
The project is listening 3000 port number

### Open index.html file and read API Documentation
