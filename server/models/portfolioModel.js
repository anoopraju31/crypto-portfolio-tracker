const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
	token: {
		type: String,
		required: [true, 'Please add the token name'],
	},
	quantity: {
		type: Number,
		required: [true, 'Please add the quantity of tokens'],
	},
	investedAmount: {
		type: Number,
		required: [true, 'Please add the invested amount'],
	},
})

module.exports = mongoose.model('portfolio', portfolioSchema)
