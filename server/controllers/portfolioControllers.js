const asyncHandler = require('express-async-handler')
const Portfolio = require('../models/portfolioModel')
const User = require('../models/userModel')

// @desc Get all portfolio
// @route GET /api/portfolio
// @access private
const getPortfolio = asyncHandler(async (req, res) => {
	if (req.user) {
		const portfolio = await Portfolio.findById(req.user.portfolio)

		if (!portfolio) {
			res.status(400)
			throw new Error('Portfolio not found!')
		} else {
			res.status(200).json({ message: 'portfolio get', portfolio })
		}
	} else {
		res.status(400)
		throw new Error('User Not Found!')
	}
})

// @desc Get a specific token from portfolio
// @route GET /api/portfolio/:id
// @access private
const getPortfolioByToken = asyncHandler(async (req, res) => {
	if (req.user) {
		Portfolio.findById(req.user.portfolio).then((portfolio) => {
			if (!portfolio) {
				res.status(400)
				throw new Error('Portfolio not found')
			}

			const token = portfolio.tokens.find(
				(crypto) => crypto.token === req.params.token,
			)

			// console.log(portfolio.tokens)
			if (token) {
				res.status(200).json(token)
			} else {
				res.status(400)
				throw new Error('Token not found')
			}
		})
	} else {
		res.status(400)
		throw new Error('User Not Found!')
	}
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
	const { token, quantity, invested } = req.body
	// console.log(token, quantity, invested)

	if (!token || !quantity || !invested) {
		res.status(400)
		throw new Error('All fields are mandatory!')
	}

	if (req.user) {
		if (req.user.portfolio === undefined) {
			res.status(400)
			throw new Error('User Portfolio not found')
		} else {
			Portfolio.findById(req.user.portfolio).then((portfolio) => {
				const selectedToken = portfolio.tokens.find(
					(crypto) => crypto.token === token,
				)

				if (!selectedToken) {
					res.status(400)
					throw new Error('Token not found')
				} else {
					selectedToken.quantity = +quantity
					selectedToken.investedAmount = +invested
					portfolio.tokens[token] = selectedToken
					portfolio.save()
					res
						.status(200)
						.json({ message: 'token added to portfolio', portfolio })
				}
			})
		}
	} else {
		res.status(404)
		throw new Error('User Not Found!')
	}
})

// @desc Delete a token from portfolio
// @route PUT /api/portfolio/:id
// @access private
const deleteFromPortfolio = asyncHandler(async (req, res) => {
	if (req.user) {
		if (req.user.portfolio === undefined) {
			res.status(400)
			throw new Error('User Portfolio not found')
		} else {
			Portfolio.findById(req.user.portfolio).then((portfolio) => {
				const tokens = portfolio.tokens

				const searchingToken = tokens.find(
					(crypto) => crypto.token === req.params.token,
				)

				if (!searchingToken) {
					res.status(400)
					throw new Error('Token Not Found')
				} else {
					const filteredTokens = tokens.filter(
						(token) => token !== searchingToken,
					)
					portfolio.tokens = filteredTokens
					portfolio.save()
					res
						.status(200)
						.json({ message: 'token deleted from portfolio', searchingToken })
				}
			})
		}
	} else {
		res.status(404)
		throw new Error('User Not Found!')
	}
})

module.exports = {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
}
