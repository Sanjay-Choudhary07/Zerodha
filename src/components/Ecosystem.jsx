import React from 'react';
import ecosystem from '../assets/ecosystem.png';
import pressLogo from '../assets/press-logos.png';
const Ecosystem = () =>{
    return(
        <div>
        <div className='flex  items-start mt-16 py-24 '>
           <div className='flex flex-col'>
            <h1>Trust with confidence</h1>
            <div>
            <h2>Customer-first always</h2>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
            
            <h2>No spam or gimmicks</h2>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            </div>
            <div>
            <h2>The Zerodha universe</h2>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div>
            <h2>Do better with money</h2>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
           </div>
           <div className='flex'>
            <img className='w-full' src={ecosystem} alt='ecosystem'/>
           </div>
        </div>
        <div className='flex '>
        <img className='w-full' src={pressLogo} alt='press-logo'/>
       </div>
       </div>
    )
}
export default Ecosystem;