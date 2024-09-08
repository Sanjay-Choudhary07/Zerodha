import React from 'react'
import varsity from '../assets/index-education.png'
import rightarrow from '../assets/right-arrow.png';
const Varsity = () => {
  return (
    <div className='flex w-[1100px] mt-12 justify-between box-border align-middle m-0 mx-auto px-6 py-24 items-start'>
      <div className='flex w-[40%]'>
        <img className='w-full' src={varsity} alt="index-education" />
      </div>
      <div className='flex ml-12 w-[48%] mt-4 flex-col'>
      <h2 className='text-2xl font-medium text-[#424242]'>Free and open market education</h2>
      <div className='flex flex-col mt-7'>
      <div>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</div>
      <div className='flex items-center'>
      <p className='mt-7 text-[#387ed1] leading-loose font-medium'>Varsity</p>
      <img className='w-[20px] ml-2 mt-7' src={rightarrow} alt="" />
      </div>
      </div>
      <div className='flex flex-col mt-8'>
       <div>TradingQ&A, the most active trading and investment community in India for all your market related queries.</div>
       <div className='flex items-center'>
       <p className='mt-7 leading-loose text-[#387ed1] font-medium'>TrendingQ&A</p>
       <img className='w-[20px] ml-2 mt-8' src={rightarrow} alt="" />
       </div>
      </div>
      </div>
    </div>
  )
}

export default Varsity
