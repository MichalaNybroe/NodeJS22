// Data Definition Language

import db from "./connection_mysql.js";

const isInDeleteMode = true;

//INTEGER PRIMARY KEY AUTOINCREMENT : ved autoincrement skal bruges Integer fremfor int
if (isInDeleteMode) {
    db.execute('DROP TABLE IF EXISTS animal_feed_stock;');
    db.execute(`DROP TABLE IF EXISTS animal_feed_types;`);
}

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_types (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    is_vegetarian BOOLEAN
);`);

db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_stock (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    initial_amount INTEGER,
    remaining_amount INTEGER,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    animal_feed_type_id INTEGER,
    CONSTRAINT fk_animal_feed_types FOREIGN KEY (animal_feed_type_id) REFERENCES animal_feed_types(id)
);`);

if(isInDeleteMode) {
    db.execute(`INSERT INTO animal_feed_types(name, description, is_vegetarian) 
    VALUES ("Carrot", "A long orange veggie", TRUE);`);
    db.execute(`INSERT INTO animal_feed_types(name, description, is_vegetarian) 
    VALUES ("Hay", "Stack og Hay", TRUE);`);
    db.execute(`INSERT INTO animal_feed_types(name, description, is_vegetarian) 
    VALUES ("Zebra Meat", "Zebra meat pieces", FALSE);`);
    db.execute(`INSERT INTO animal_feed_stock(initial_amount, remaining_amount, animal_feed_type_id) 
    VALUES (100, 100, 1);`);
    db.execute(`INSERT INTO animal_feed_stock(initial_amount, remaining_amount, animal_feed_type_id) 
    VALUES (1000, 1000, 2);`);
    db.execute(`INSERT INTO animal_feed_stock(initial_amount, remaining_amount, animal_feed_type_id) 
    VALUES (20, 20, 3);`);
};

db.end();
