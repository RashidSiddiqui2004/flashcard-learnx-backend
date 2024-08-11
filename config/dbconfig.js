
const mysql = require("mysql2");

const dbDetails = {
    host: 'localhost', //update to AWS server url
    user: 'root',
    password: 'rash2004',
    database: 'flash_card_learning',
    dialect: 'mysql',

}

let connection = mysql.createConnection(dbDetails);

module.exports = { dbDetails, connection };