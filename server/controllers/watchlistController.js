const asyncHandler = require('express-async-handler')

const getWatchlish = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'get watchlist' })
})

const addToWatchlist = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'add to watchlist' })
})

module.exports = {
	getWatchlish,
	addToWatchlist,
}
