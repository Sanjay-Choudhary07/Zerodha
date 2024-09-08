import React from 'react'

const OpenAccount = () => {
  return (
    <div className='flex flex-col items-center justify-center m-0 mx-auto box-border w-[900px] mt-12 max-w-full'>
      <div className='flex flex-col items-center text-center justify-center gap-4'>
        <h3 className='font-medium leading-[1.8] text-4xl'>Open a Zerodha account</h3>
        <h5 className='font-normal text-[#666] leading-[1.8] text-xl mb-9'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h5>
      </div>
      <div className='flex  justify-center mt-2'>
       <button className='font-medium bg-[#387ed1] px-8 py-2 rounded-sm text-white text-xl'>Sign up for free</button>
      </div>
    </div>
  )
}

export default OpenAccount