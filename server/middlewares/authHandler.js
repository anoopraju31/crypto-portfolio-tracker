const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')

const protect = asyncHandler(async (req, res, next) => {
	let token = req.cookies.jwt

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			req.user = await User.findById(decoded.userId).select('-password')
			next()
		} catch (error) {
			console.log(error)
			res.status(401)
			throw new Error('Not authoriized, Token Failed!')
		}
	} else {
		res.status(401)
		throw new Error('Not authoriized, No token!')
	}
})

module.exports = protect
