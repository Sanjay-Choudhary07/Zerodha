import React from 'react';
import landing from '../assets/landing.png';
const Landing = () =>{
    return(
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center w-full max-w-screen-md mx-auto justify-center m-20'>
        <img className='max-h-[45vh] w-auto' src={landing} alt='landing image'/>
      </div>
      <div className='flex flex-col items-center text-center justify-center gap-4'>
        <h1 className='font-medium text-5xl'>Invest in everything</h1>
        <h5 className='font-normal text-xl mb-9'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
      </div>
      <div className='flex  justify-center mt-2'>
       <button className='font-medium bg-[#387ed1] px-8 py-2 rounded-sm text-white text-xl'>Sign up now</button>
      </div>
    </div>
    )
}
export default Landing