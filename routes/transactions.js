const express = require('express')
const router = express.Router()
const Transaction = require('../models/transaction')

// POST /transactions - Add a new transaction
router.post('/', async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body)
    res.status(201).json(transaction)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// GET /transactions - Get all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.findAll()
  res.json(transactions)
})

// GET /transactions/:id - Get transaction by ID
router.get('/:id', async (req, res) => {
  const transaction = await Transaction.findByPk(req.params.id)
  if (transaction) {
    res.json(transaction)
  } else {
    res.status(404).json({error: 'Transaction not found'})
  }
})

// PUT /transactions/:id - Update a transaction by ID
router.put('/:id', async (req, res) => {
  const transaction = await Transaction.findByPk(req.params.id)
  if (transaction) {
    await transaction.update(req.body)
    res.json(transaction)
  } else {
    res.status(404).json({error: 'Transaction not found'})
  }
})

// DELETE /transactions/:id - Delete a transaction by ID
router.delete('/:id', async (req, res) => {
  const transaction = await Transaction.findByPk(req.params.id)
  if (transaction) {
    await transaction.destroy()
    res.status(204).end()
  } else {
    res.status(404).json({error: 'Transaction not found'})
  }
})

module.exports = router
