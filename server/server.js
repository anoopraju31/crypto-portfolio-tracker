const express = require('express')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/api/portfolio', require('./routes/portfolioRoutes'))

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
