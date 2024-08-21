import React from 'react';
import landing from '../assets/landing.png';
const Landing = () =>{
    <div className='flex flex-col'>
      <div className='flex'>
        <img src={landing} alt='landing image'/>
      </div>
      <div className='flex'>
        <h2>Invest in everything</h2>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      </div>
      <div className='flex'>
       <button>Sign up now</button>
      </div>
    </div>
}
export default Landing