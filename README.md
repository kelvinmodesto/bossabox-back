## ---- MONGODB
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=ufscdc170 -d mongo

docker run --name mongoclient -p 3001:3001 --link mongodb:mongodb -d mongoclient/mongoclient 
