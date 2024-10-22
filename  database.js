const {Sequelize} = require('sequelize')

// Initialize SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './expense-tracker.db', // SQLite database file
})

module.exports = sequelize
