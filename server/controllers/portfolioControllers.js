// @desc Get all portfolio
// @route GET /api/portfolio
// @access for time being public
const getPortfolio = (req, res) => {
	res.status(200).json({ message: 'portfolio get' })
}

// @desc Get a specific token from portfolio
// @route GET /api/portfolio/:id
// @access for time being public
const getPortfolioByToken = (req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio get ${id}` })
}

// @desc Add a token to portfolio
// @route POST /api/portfolio
// @access for time being public
const addToPortfolio = (req, res) => {
	res.status(200).json({ message: 'portfolio post' })
}

// @desc Edit a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const editPortfolio = (req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio put ${id}` })
}

// @desc Delete a token from portfolio
// @route PUT /api/portfolio/:id
// @access for time being public
const deleteFromPortfolio = (req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio delete ${id}` })
}

module.exports = {
	getPortfolio,
	getPortfolioByToken,
	addToPortfolio,
	editPortfolio,
	deleteFromPortfolio,
}
