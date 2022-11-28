import db from "./connection.js"

db.salesPeople.updateMany({salary: {$lt: 30000}}, {$set: {salary: 30000}})

const {matchedCount } = await db.salesPeople.updateMany({salary: {$gt: 30000}}, {$set: {employeeOfTheMonth: true }})
