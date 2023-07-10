const validPassword = (password) => {
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	return passwordRegex.test(password)
}

const validEmail = (email) => {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
	return emailRegex.test(email)
}

const validName = (name) => {
	const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
	return nameRegex.test(name)
}

module.exports = {
	validPassword,
	validEmail,
	validName,
}
