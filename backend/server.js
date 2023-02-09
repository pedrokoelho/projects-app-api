const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// Connect to the DB
connectDB()

// Initialize express
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/projects', require('./routes/projectRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))