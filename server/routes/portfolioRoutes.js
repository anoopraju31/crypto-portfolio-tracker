const express = require('express')
const {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
} = require('../controllers/portfolioControllers.js')
const router = express.Router()

router.route('/').get(getPortfolio).post(addToPortfolio)
router
	.route('/:id')
	.get(getPortfolioByToken)
	.put(editPortfolio)
	.delete(deleteFromPortfolio)

module.exports = router
