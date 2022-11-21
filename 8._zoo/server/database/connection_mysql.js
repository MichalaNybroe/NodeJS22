import mysql from "mysql2/promise"; //bruger promise wrapper for at kunne arbejde med promises

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "zoo"
});

export default connection;
