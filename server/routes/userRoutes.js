const express = require('express')
const {
	registerUser,
	loginUser,
	logoutUser,
	userProfile,
	userProfileUpdate,
} = require('../controllers/userController.js')
const protect = require('../middlewares/authHandler.js')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router
	.route('/profile')
	.get(protect, userProfile)
	.put(protect, userProfileUpdate)

module.exports = router
