const express = require('express')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middlewares/errorHandler.js')
const connectToDB = require('./config/dbConnection.js')

connectToDB()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/portfolio', require('./routes/portfolioRoutes'))
app.use('/api/watchlist', require('./routes/watchlistRoutes'))
app.use(errorHandler)

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
