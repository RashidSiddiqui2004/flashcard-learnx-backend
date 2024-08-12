
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

// const connectionstring = "mysql://3ggajbNmhPba8bC.root:yavfgASvpEyhO4wA@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/Cluster0?sslaccept=strict";

// const dbDetails = {
//     host: 'localhost:3307',
//     user: 'root',
//     password: 'root',
//     database: 'tests',
//     dialect: 'mysql',
// }

let connection = mysql.createConnection(dbDetails);

module.exports = { dbDetails, connection }; 