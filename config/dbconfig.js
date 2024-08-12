
const mysql = require("mysql2");

const dbDetails = {
    host: 'localhost', //update to AWS server url
    user: 'root',
    password: 'rashid_SidiquiXYZ',
    database: 'flash_card_learning',
    dialect: "mysql", pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

let connection = mysql.createConnection(dbDetails);

module.exports = { dbDetails, connection }; 