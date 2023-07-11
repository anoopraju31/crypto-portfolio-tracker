import React from 'react'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
	return (
		<div>
			App
			<RouterProvider router={router} />
		</div>
	)
}

export default App
