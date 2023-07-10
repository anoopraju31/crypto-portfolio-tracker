const asyncHandler = require('express-async-handler')

// @desc Register new user
// @route POST /api/user/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'user register' })
})

// @desc Login user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
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
