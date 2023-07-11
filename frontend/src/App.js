import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Navbar } from './components'

const App = () => {
	return (
		<div>
			<Navbar />
			<RouterProvider router={router} />
		</div>
	)
}

export default App
