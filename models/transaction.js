const {DataTypes} = require('sequelize')
const sequelize = require('../database')
const Category = require('./category')

const Transaction = sequelize.define('Transaction', {
  type: {type: DataTypes.ENUM('income', 'expense'), allowNull: false},
  category: {type: DataTypes.STRING, allowNull: false},
  amount: {type: DataTypes.FLOAT, allowNull: false},
  date: {type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW},
  description: {type: DataTypes.STRING},
})

module.exports = Transaction
