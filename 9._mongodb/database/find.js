import db from "./connection.js"

const allShoes = await db.shoes.find().toArray()

const allSalesWithSalaryMoreThan2000 = await db.salesPeople.find({salary: {$gte:2000}}).toArray()
console.log(allSalesWithSalaryMoreThan2000)
// det er array så vi kan få første position og så deres salary så får vi kun det udskrevet

