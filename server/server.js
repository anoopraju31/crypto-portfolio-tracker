const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.get('/api', (req, res) => {
	res.status(200).json({ message: 'Hello World' })
})

app.listen(port, () => {
	console.log(`server running on port ${port}`)
})
