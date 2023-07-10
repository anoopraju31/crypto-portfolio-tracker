const asyncHandler = require('express-async-handler')

// @desc Get all portfolio
// @route GET /api/portfolio
// @access for time being public
const getPortfolio = asyncHandler((req, res) => {
	res.status(200).json({ message: 'portfolio get' })
})

// @desc Get a specific token from portfolio
// @route GET /api/portfolio/:id
// @access for time being public
const getPortfolioByToken = asyncHandler((req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio get ${id}` })
})

// @desc Add a token to portfolio
// @route POST /api/portfolio
// @access for time being public
const addToPortfolio = asyncHandler((req, res) => {
	const { token, quantity, invested } = req.body
	// console.log(token, quantity, invested)

	if (!token || !quantity || !invested) {
		res.status(400)
		throw new Error('All fields are mandatory!')
	}

	res.status(200).json({ message: 'portfolio post' })
})

// @desc Edit a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const editPortfolio = asyncHandler((req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio put ${id}` })
})

// @desc Delete a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const deleteFromPortfolio = asyncHandler((req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio delete ${id}` })
})

module.exports = {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
}
