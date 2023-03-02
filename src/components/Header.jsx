import React from 'react'
import Navigation from './Navigation'
import headerBG from '../assets/restaurant.jpg'

const Header = () => {
  return (
    <header className="bg-[url('/src/assets/restaurant.jpg')] h-screen bg-no-repeat bg-cover font-spartan">
        
        <article className='w-full h-full flex flex-col items-center justify-center text-white space-y-5'>
        <p className='text-4xl font-semibold'>Seattle</p>
        <h1 className='text-yellow-300 text-9xl font-bold'>Little Lemon</h1>
        <p className='w-1/3 text-4xl font-semibold text-center'>A family friendly restaurant. Eat in person or order online for pickup</p>
        <div className='flex w-80 h-20 justify-between mt-5 font-medium'>
            <button className='bg-green-900 h-16 w-32 rounded-md text-yellow-300 font-semibold'>Order Online</button>
            <button className='bg-green-900 h-16 w-32 rounded-md text-yellow-300 font-semibold'>Reservere a Table</button>
        </div>
        </article>
    </header>
  )
}

export default Header