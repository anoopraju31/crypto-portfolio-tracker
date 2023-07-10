const asyncHandler = require('express-async-handler')
const Portfolio = require('../models/portfolioModel')
const User = require('../models/userModel')

// @desc Get all portfolio
// @route GET /api/portfolio
// @access private
const getPortfolio = asyncHandler(async (req, res) => {
	const portfolio = await Portfolio.findById(req.user.portfolio)
	res.status(200).json({ message: 'portfolio get', portfolio })
})

// @desc Get a specific token from portfolio
// @route GET /api/portfolio/:id
// @access private
const getPortfolioByToken = asyncHandler(async (req, res) => {
	const id = req.params.id
	const portfolio = await Portfolio.findById(id)
	res.status(200).json({ message: `portfolio get ${id}`, portfolio })
})

// @desc Add a token to portfolio
// @route POST /api/portfolio
// @access private
const addToPortfolio = asyncHandler(async (req, res) => {
	const { token, quantity, investedAmount } = req.body
	// console.log(token, quantity, invested)

	if (!token || !quantity || !investedAmount) {
		res.status(400)
		throw new Error('All fields are mandatory!')
	}

	if (req.user) {
		if (req.user.portfolio === undefined) {
			const user = await User.findById(req.user._id)
			const portfolio = await Portfolio.create({
				user: req.user._id,
				tokens: [{ token, quantity, investedAmount }],
			})
			user.portfolio = portfolio._id
			user.save()

			res.status(200).json({ message: 'portfolio created', portfolio })
		} else {
			const portfolio = await Portfolio.findById(req.user.portfolio)
			portfolio.tokens.push({ token, quantity, investedAmount })
			portfolio.save()

			res.status(200).json({ message: 'token added to portfolio', portfolio })
		}
	} else {
		res.status(404)
		throw new Error('User Not Found!')
	}
})

// @desc Edit a token from portfolio
// @route PUT /api/portfolio/:id
// @access private
const editPortfolio = asyncHandler(async (req, res) => {
	const id = req.params.id
	const updatePortfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
		new: true,
	})
	res.status(200).json({ message: `portfolio put ${id}`, updatePortfolio })
})

// @desc Delete a token from portfolio
// @route PUT /api/portfolio/:id
// @access private
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
