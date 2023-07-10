const express = require('express')
const protect = require('../middlewares/authHandler.js')
const {
	getWatchlish,
	addToWatchlist,
} = require('../controllers/watchlistController.js')
const router = express.Router()

router.route('/').get(protect, getWatchlish).post(protect, addToWatchlist)

module.exports = router
