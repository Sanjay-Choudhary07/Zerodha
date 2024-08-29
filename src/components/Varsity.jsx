import React from 'react'
import varsity from '../assets/index-education.png'
// import rightarrow from '../assets/right-arrow.png';
const Varsity = () => {
  return (
    <div className='flex'>
      <div className='flex'>
        <img src={varsity} alt="index-education" />
      </div>
      <div className='flex flex-col'>
       <h2>Free and open market education</h2>
       <div className='flex flex-col'>
       <div>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</div>
       <p>Varsity</p>
       {/* <img src={rightarrow} alt="" /> */}
       </div>
       <div className='flex flex-col'>
        <div>TradingQ&A, the most active trading and investment community in India for all your market related queries.</div>
        <p>Trending Q&A</p>
        {/* <img src={rightarrow} alt="" /> */}
       </div>
      </div>
    </div>
  )
}

export default Varsity
