const mongoose = require('mongoose')

const watchedTokenSchema = mongoose.Schema(
	{
		token: {
			type: String,
			unique: true,
			required: [true, 'Please add the token name'],
		},
	},
	{
		timestamps: true,
	},
)

const watchlistSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'users',
	},
	tokens: [watchedTokenSchema],
})

module.exports = mongoose.model('watchlist', watchlistSchema)
