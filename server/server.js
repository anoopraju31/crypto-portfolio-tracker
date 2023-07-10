const express = require('express')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const errorHandler = require('./middlewares/errorHandler.js')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/api/portfolio', require('./routes/portfolioRoutes'))
app.use(errorHandler)

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
