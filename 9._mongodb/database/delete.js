import db from "./connection.js"

db.salesPeople.deleteMany({name: "Emma"})