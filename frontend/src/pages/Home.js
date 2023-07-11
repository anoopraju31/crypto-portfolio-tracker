import React from 'react'
import { Stat } from '../components'

const Home = () => {
	return (
		<div className='container mx-auto px-4'>
			<h1 className='pb-6 md:py-6 mx-4 my-6 text-5xl font-medium flex gap-2 flex-col md:flex-row'>
				Welcome
				<p className=''> Anoop Raju </p>
			</h1>
			<div className='mx-4 p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg bg-gray-100'>
				<Stat title='Current Value' value='USD 24,000' />
				<Stat title='Invested Amount' value='USD 21,000' />
				<Stat title='Profit' value='USD 3,000' color='text-green-500' />
				<Stat title='Profit Percentage' value='12%' color='text-green-500' />
			</div>
		</div>
	)
}

export default Home
