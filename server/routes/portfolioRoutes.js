const { log } = require('console')
const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
	res.status(200).json({ message: 'portfolio get' })
})

router.route('/:id').get((req, res) => {
	console.log(req)
	const id = req.params.id
	res.status(200).json({ message: `portfolio get ${id}` })
})

router.route('/').post((req, res) => {
	res.status(200).json({ message: 'portfolio post' })
})

router.route('/:id').put((req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio put ${id}` })
})

router.route('/:id').delete((req, res) => {
	const id = req.params.id
	res.status(200).json({ message: `portfolio delete ${id}` })
})

module.exports = router
