import React from 'react';

const Pricing = () =>{
   return(
    // <section className='flex'>
        <div className='flex '>
            <div className='flex '>
               <div className='flex flex-col'>
               <h1>Unbeatable pricing</h1>
               <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
               </div>
               <div className='flex'>
                <div className='flex'>
                    <img className='w-full' src="https://zerodha.com/static/images/pricing-eq.svg" alt='price-0'/>
                    <p>Free account
                    opening</p>
                </div>
                <div className='flex'>
                    <img className='w-full' src="https://zerodha.com/static/images/pricing-eq.svg" alt="price-0" />
                    <p>Free equity delivery
                    and direct mutual funds</p>
                </div>
                <div className='flex'>
                    <img className='w-full' src="https://zerodha.com/static/images/other-trades.svg" alt="price-20" />
                    <p>Intraday and
                    F&O</p>
                </div>
               </div> 
            </div>
            <p className='flex'>
            See pricing 
            </p>
        </div>
    // </section>
   )
} 
export default Pricing;