const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use('/api/portfolio', require('./routes/portfolioRoutes'))

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
