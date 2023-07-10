const express = require('express')
const {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
} = require('../controllers/portfolioControllers.js')
const protect = require('../middlewares/authHandler.js')
const router = express.Router()

router.route('/').get(protect, getPortfolio).post(protect, addToPortfolio)
router
	.route('/:token')
	.get(protect, getPortfolioByToken)
	.put(protect, editPortfolio)
	.delete(protect, deleteFromPortfolio)

module.exports = router
