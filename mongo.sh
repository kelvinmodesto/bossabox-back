## ---- MONGODB
docker pull mongo

docker pull mongoclient/mongoclient

docker run  --name mongodb -p 27017:27017  -e MONGO_INITDB_ROOT_USERNAME="admin"  -e MONGO_INITDB_ROOT_PASSWORD="admin"  -d
 mongo

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient

docker exec -it mongodb mongo --host localhost -u "admin" -p "admin" --authenticationDatabase admin --eval
"db.getSiblingDB('tools').createUser({user:'kelvinmodesto', pwd: 'admin', roles: [{role: 'readWrite', db: 'tools'}]})"

docker exec -it mongodb mongo --host localhost -u "admin" -p "admin" --authenticationDatabase admin --eval
"db.tools"

