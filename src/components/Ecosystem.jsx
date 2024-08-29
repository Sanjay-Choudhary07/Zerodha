import React from 'react';
import ecosystem from '../assets/ecosystem.png';
import pressLogo from '../assets/press-logos.png';
import arrow from '../assets/right-arrow.png';
const Ecosystem = () =>{
    return(
        <div className='flex flex-col mt-10 '>
        <div className='flex box-border justify-between gap-6 align-middle max-w-full w-[1100px] m-0 mx-auto items-start px-6 py-24 '>
        <div className='flex flex-col w-[59%]'>
        <h1 className='text-4xl text-[#424242] font-semibold gap-2 mb-10'>Trust with confidence</h1>
           {/* <div className='flex flex-col'> */}
            <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-medium text-[#424242]'>Customer-first always</h2>
            <p className='flex mt-2 mb-6 leading-loose text-[#666] gap-2'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div className='flex flex-col gap-2'> 
            <h2 className='text-2xl font-medium text-[#424242]'>No spam or gimmicks</h2>
            <p className='flex mt-2 mb-6 leading-loose text-[#666] gap-2'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-medium text-[#424242]'>The Zerodha universe</h2>
            <p className='flex mt-2 mb-6 leading-loose text-[#666] gap-2'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-medium text-[#424242]'>Do better with money</h2>
            <p className='flex mt-2 mb-6 leading-loose text-[#666] gap-2'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
           </div>
           <div className='flex flex-col gap-8 align-middle justify-center'>
            <div className='flex '>
            <img className='w-full' src={ecosystem} alt='ecosystem'/>
            </div>
            <div className='flex align-middle gap-8 justify-center'>
            <div className='flex items-center'>
             <p className='flex text-blue-700 font-normal text-lg'>
             Explore our products
             </p>
             <img className='w-5 ml-2 mt-1' src={arrow} alt="" />
            </div>
            <div className='inline-flex items-center'>
             <p className='flex text-blue-700 font-normal text-lg'>
             Try Kite demo 
             </p>
             <img className='w-5 ml-2 mt-1 ' src={arrow} alt="" />
            </div>
            </div>
           </div>
        </div>
        <div className=' flex justify-center items-center'>    
         <img className='w-[45%] -mt-16' src={pressLogo} alt='press-logo'/>
       </div>
       </div>
    )
}
export default Ecosystem;