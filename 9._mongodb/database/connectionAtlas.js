import "dotenv/config"
import { MongoClient } from "mongodb"

const url = `mongodb+srv://mich:${process.env.ATLAS_PASSWORD}@cluster0.bkoibvh.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

await client.connect()

client.db("zoo")

const animals = db.collection("animals")

await animals.insertOne({ type: "Tiger" })

const foundAnimals = await animals.find().toArray()
console.log(foundAnimals)
