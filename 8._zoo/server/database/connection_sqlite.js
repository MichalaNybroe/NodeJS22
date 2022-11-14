import sqlite3 from "sqlite3";
import { open } from "sqlite";

const connection = await open( {
    filename: "zoo.db",//kan være .db eller .sqlite
    driver: sqlite3.Database
}); // Connection to db + makes if does not exist


export default connection;