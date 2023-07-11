import React from 'react'

const Stat = ({ title, value, color }) => {
	return (
		<div className={`flex flex-col items-center ${color ? color : ''}`}>
			<div className='flex justify-between'>
				<h3 className='font-medium'> {title} </h3>
			</div>

			<div className='my-2'>
				<h2 className='text-4xl font-bold'> {value} </h2>
			</div>
		</div>
	)
}

export default Stat
