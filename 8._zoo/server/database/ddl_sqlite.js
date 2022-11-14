// Data Definition Language

import db from "./connection_sqlite.js";

const isInDeleteMode = true;

//INTEGER PRIMARY KEY AUTOINCREMENT : ved autoincrement skal bruges Integer fremfor int
if (isInDeleteMode) {
    db.exec(`DROP TABLE IF EXISTS animals;`);
}

db.exec(`CREATE TABLE IF NOT EXISTS animals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    common_name VARCHAR(255),
    latin_name VARCHAR(255),
    own_name VACHAR(255)
);`);

if(isInDeleteMode) {
    db.run(`INSERT INTO animals(common_name, latin_name, own_name) 
    VALUES ("Tiger", "Panthera Tigris", "Børge");`);
    db.run(`INSERT INTO animals(common_name, latin_name, own_name) 
    VALUES ("Panda", "Ailuropoda melanoleuca", "Ping");`);
}
