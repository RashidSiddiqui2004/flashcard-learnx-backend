
const { Sequelize, DataTypes } = require('sequelize');
const { dbDetails } = require('../config/dbconfig.js');


const sequelize = new Sequelize(
    dbDetails.database,
    dbDetails.user,
    dbDetails.password, {
    host: dbDetails.host,
    dialect: dbDetails.dialect,
    operatorsAliases: false,
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.flashcards = require('./Flashcard.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Sync done!')
    })

module.exports = db