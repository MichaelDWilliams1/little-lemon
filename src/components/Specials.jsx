import React from 'react'
import Lemon from '../assets/lemon.jpg'
import Greek from '../assets/greek.jpg'
import Bruchetta from '../assets/bruchetta.svg'

const Specials = () => {
  return (
    <section className='mb-16 flex flex-col items-center'>
     <section className='flex w-1000 justify-between mt-10'>
        <h2 className='text-5xl relative font-semibold'>This weeks specials! 
        <span className='bg-yellow-300 -z-10 absolute h-6 w-40 right-1 top-6'></span>
        </h2>
        <button className='h-12 bg-green-900 w-32 rounded-lg text-yellow-300 font-semibold'>Order Online</button>
     </section>
     <section className='flex w-1000 h-500 mt-10 space-x-4 justify-center font-spartan text-green-900 font-semibold'>
        <div className='w-1/3 shadow-md'>
            <img className='w-full h-1/2' src={Lemon}  />
            <article className='flex flex-col justify-around h-1/2 bg-yellow-300'>
                <div className='flex justify-between w-11/12 m-auto'>
                <p>Lemon Dessert</p>
                <p>$5.00</p>
                </div>
                <div className='w-11/12 m-auto'>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-green-900 h-16 w-60 text-yellow-300 font-semibold rounded-md mb-2'>Add to order</button>
                </div>
            </article>
        </div>
        <div className='border-2 w-1/3 shadow-md'>
            <img className='w-full h-1/2 object-cover' src={Bruchetta}  />
            <article className='flex flex-col justify-around h-1/2 bg-yellow-300'>
                <div className='flex justify-between w-11/12 m-auto'>
                <p>Bruchetta</p>
                <p>$5.99</p>
                </div>
                <div className='w-11/12 m-auto'>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Taste like heaven. </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-green-900 h-16 w-60 text-yellow-300 font-semibold rounded-md mb-2'>Add to order</button>
                </div>
            </article>
        </div>
        <div className='border-2 w-1/3 shadow-md'>
            <img className='w-full h-1/2' src={Greek}  />
            <article className='flex flex-col justify-around h-1/2 bg-yellow-300'>
                <div className='flex justify-between w-11/12 m-auto'>
                <p>Greek Salad</p>
                <p>$12.99</p>
                </div>
                <div className='w-11/12 m-auto'>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-green-900 h-16 w-60 text-yellow-300 font-semibold rounded-md mb-2'>Add to order</button>
                </div>
            </article>
        </div>
     </section>
    </section>
  )
}

export default Specials