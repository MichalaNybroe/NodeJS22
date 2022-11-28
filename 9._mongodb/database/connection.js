import { MongoClient } from "mongodb"

//27017 kan se ved at køre . ./ mongod
// protocol er mongodb set før //
const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url)

await client.connect()

const shoesDB = client.db("shoes")
// kan læse om error handling på npm mongodb

const shoes = shoesDB.collection("shoes")
const salesPeople = shoesDB.collection("salesPeople")

export default {
    shoes, 
    salesPeople
}
