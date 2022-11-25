import * as dotenv from "dotenv"
dotenv.config()
import db from "./connection.js"
import { encryptPassword } from "../util/encryption.js"

const isInDeleteMode = true

if (isInDeleteMode) {
    db.exec(`DROP TABLE IF EXISTS animals;`)
    db.exec(`DROP TABLE IF EXISTS users;`)
}

db.exec(`CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(255),
    race VARCHAR(255),
    name VACHAR(255),
    age VARCHAR(100),
    description VARCHAR(1000),
    color VARCHAR(100),
    sex VARCHAR(100),
    price INTEGER
);`)

db.exec(`CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) PRIMARY KEY,
    password VACHAR(255)
);`)

if(isInDeleteMode) {
    // animals
    db.run(`INSERT INTO animals(type, race, name, age, description, color, sex, price) 
    VALUES (?,?,?,?,?,?,?,?);`, ["Cat", "Mixed", "Atla", "A cute cat with enourmous eyes. She is very friendly but a bit of a Diva.", "Orange, Beige, White, Brown", "Female", 1000])
    db.run(`INSERT INTO animals(type, race, name, age, description, color, sex, price) 
    VALUES (?,?,?,?,?,?,?,?);`, ["Dog", "Labrador", "Viggo", "Belives he is part of Lord og the Rings - but otherwise and incredible dog!", "Beige", "Male", 3600])

    // users
    db.run(`INSERT INTO users(email, password) VALUES(?,?);`, [ process.env.EMAIL, encryptPassword(process.env.PASSWORD)])
}

