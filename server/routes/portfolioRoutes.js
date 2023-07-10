const express = require('express')
const {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
} = require('../controllers/portfolioControllers.js')
const router = express.Router()

router.route('/').get(getPortfolio)
router.route('/:id').get(getPortfolioByToken)
router.route('/').post(addToPortfolio)
router.route('/:id').put(editPortfolio)
router.route('/:id').delete(deleteFromPortfolio)

module.exports = router
