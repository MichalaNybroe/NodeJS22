import db from "./connection.js"

const isInDeleteMode = true

if (isInDeleteMode) {
    db.exec(`DROP TABLE IF EXISTS animals;`)
    db.exec(`DROP TABLE IF EXISTS users;`)
}

db.exec(`CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(255),
    race VARCHAR(255),
    own_name VACHAR(255),
    age VARCHAR(100),
    description VARCHAR(1000),
    color VARCHAR(100),
    sex VARCHAR(100),
    price INTEGER
);`)

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VACHAR(255)
);`)

/*if(isInDeleteMode) {
    // animals
    db.run(`INSERT INTO animals(type, race, own_name, age, description, color, sex, price) 
    VALUES ();`)
    db.run(`INSERT INTO animals(type, race, own_name, age, description, color, sex, price) 
    VALUES ();`)

    // users
}
*/

