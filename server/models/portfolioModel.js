const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema(
	{
		token: {
			type: String,
			unique: true,
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
	},
	{
		timestamps: true,
	},
)

const portfolioSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'users',
	},
	tokens: [tokenSchema],
})

module.exports = mongoose.model('portfolios', portfolioSchema)
