import React from 'react'

const Navbar = () => {
	return (
		<div className='container mx-auto py-2 px-4 flex justify-between items-center'>
			<h1 className='text-lg font-medium'> Crypto </h1>

			<div className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full '>
				<span className='font-medium text-gray-600'>JL</span>
			</div>
		</div>
	)
}

export default Navbar
