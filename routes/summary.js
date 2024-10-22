const express = require('express')
const router = express.Router()
const {Op} = require('sequelize')
const Transaction = require('../models/transaction')

// GET /summary - Get summary of transactions
router.get('/', async (req, res) => {
  const {startDate, endDate, category} = req.query
  const where = {}

  if (startDate && endDate) {
    where.date = {[Op.between]: [startDate, endDate]}
  }
  if (category) {
    where.category = category
  }

  const income = await Transaction.sum('amount', {
    where: {...where, type: 'income'},
  })
  const expense = await Transaction.sum('amount', {
    where: {...where, type: 'expense'},
  })

  res.json({
    totalIncome: income || 0,
    totalExpense: expense || 0,
    balance: (income || 0) - (expense || 0),
  })
})

module.exports = router
