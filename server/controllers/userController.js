const asyncHandler = require('express-async-handler')
const {
	validName,
	validEmail,
	validPassword,
} = require('../variables/utillFunction')
const User = require('../models/userModel')
const generateToken = require('../variables/generateToken')

// @desc Register new user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body
	let isValidName = validName(name)
	let isValidEmail = validEmail(email)
	let isValidPassword = validPassword(password)

	if (!isValidName || !isValidEmail || !isValidPassword) {
		res.status(400)
		let errorText = `please enter a valid ${
			isValidName ? 'name' : isValidEmail ? 'email' : 'password'
		}!`
		throw new Error(errorText)
	}

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await User.create({ name, email, password })

	if (user) {
		generateToken(res, user._id)

		res.status(201).json({
			id: user._id,
			name: user.name,
			email: user.email,
		})
	} else {
		res.status(400)
		throw new Error('Invalid User Data')
	}
})

// @desc Login user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id)

		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}

	res.status(200).json({ message: 'user login' })
})

// @desc logout user
// @route POST /api/user/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'user logout' })
})

// @desc User profile
// @route GET /api/user/profile
// @access private
const userProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'user profile' })
})

// @desc User profile
// @route PUT /api/user/profile
// @access private
const userProfileUpdate = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'user profile update' })
})

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	userProfile,
	userProfileUpdate,
}
