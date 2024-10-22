const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./database')
const Transaction = require('./models/transaction')
const Category = require('./models/category')

const transactionRoutes = require('./routes/transactions')
const summaryRoutes = require('./routes/summary')

const app = express()
const PORT = 3000

// Middleware
app.use(bodyParser.json())

// Routes
app.use('/transactions', transactionRoutes)
app.use('/summary', summaryRoutes)

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced')
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
  )
})
