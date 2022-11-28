import db from "./connection.js"

//returnere info om insert
db.salesPeople.insertOne({name: "Kamilla", salary: 20000})