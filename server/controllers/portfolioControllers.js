const asyncHandler = require('express-async-handler')
const Portfolio = require('../models/portfolioModel')

// @desc Get all portfolio
// @route GET /api/portfolio
// @access for time being public
const getPortfolio = asyncHandler(async (req, res) => {
	const portfolio = await Portfolio.find()
	res.status(200).json({ message: 'portfolio get', portfolio })
})

// @desc Get a specific token from portfolio
// @route GET /api/portfolio/:id
// @access for time being public
const getPortfolioByToken = asyncHandler(async (req, res) => {
	const id = req.params.id
	const portfolio = await Portfolio.findById(id)
	res.status(200).json({ message: `portfolio get ${id}`, portfolio })
})

// @desc Add a token to portfolio
// @route POST /api/portfolio
// @access for time being public
const addToPortfolio = asyncHandler(async (req, res) => {
	const { token, quantity, investedAmount } = req.body
	// console.log(token, quantity, invested)

	if (!token || !quantity || !investedAmount) {
		res.status(400)
		throw new Error('All fields are mandatory!')
	}

	const portfolio = await Portfolio.create({ token, quantity, investedAmount })
	res.status(200).json({ message: 'portfolio post', portfolio })
})

// @desc Edit a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const editPortfolio = asyncHandler(async (req, res) => {
	const id = req.params.id
	const updatePortfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
		new: true,
	})
	res.status(200).json({ message: `portfolio put ${id}`, updatePortfolio })
})

// @desc Delete a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const deleteFromPortfolio = asyncHandler(async (req, res) => {
	const id = req.params.id
	const portfolioToBeDeleted = await Portfolio.findById(id)

	if (!portfolioToBeDeleted) {
		res.status(404)
		throw new Error('Portfolio Not Found!')
	}

	await Portfolio.deleteOne({ _id: id })
	res
		.status(200)
		.json({ message: `portfolio delete ${id}`, portfolioToBeDeleted })
})

module.exports = {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
}
