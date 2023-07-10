const express = require('express')
const {
	registerUser,
	loginUser,
	logoutUser,
	userProfile,
	userProfileUpdate,
} = require('../controllers/userController.js')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router.route('/profile').get(userProfile).put(userProfileUpdate)

module.exports = router
