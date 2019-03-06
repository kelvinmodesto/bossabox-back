## Sobre 

Aqui podemos descrever detalhes que são comuns a todos os serviços como formatos, headers, tipos de erros, etc

## Configurando Projeto

Instale yarn:
```
npm install -g yarn
```

Instale os pacotes:
```sh
yarn
```

### Configurando o banco pelo Docker

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

### Executando o projeto
```sh
npm run start 
```
O projeto vai estar executando na porta 3000

### Abrindo o index.html ou api.apib e veja o descritivo da API
