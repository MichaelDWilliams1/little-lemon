import React from 'react'
import logo from  '../assets/Logo.svg'

const Navigation = () => {
  return (
    <nav className='w-11/12 flex h-20 m-auto'>
        <div className='h-full flex w-1/2'>
            <img className='' src={logo} />
        </div>
        <div className='text-green-800 h-full w-1/2 flex justify-end items-center'>
            <ul className='flex space-x-5 font-spartan'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation