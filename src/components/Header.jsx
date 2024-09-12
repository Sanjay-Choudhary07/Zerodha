import threeline from '../assets/threelines.png';
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between md:justify-around z-10 border-b border-[#ebebeb] items-center px-5 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <img
          src="https://zerodha.com/static/images/logo.svg" 
          alt="Zerodha Logo"
          className="h-5"
        />
      </div>
      <nav className=" hidden md:flex items-center space-x-9">
        <ul className="flex font-normal space-x-6 gap-3 text-[#666]">
         <li>
           <a href="#signup" className=" hover:text-blue-500">
             Signup
           </a>
         </li>
         <li>
           <a href="#about" className="hover:text-blue-500">
             About
           </a>
         </li>
         <li>
           <a href="#products" className="hover:text-blue-500">
             Products
           </a>
         </li>
         <li>
           <a href="#pricing" className="hover:text-blue-500">
             Pricing
           </a>
         </li>
         <li>
           <a href="#support" className="hover:text-blue-500">
             Support
           </a>
         </li>
         <li><img className="h-6 w-6 cursor-pointer" src={threeline} alt="menu-icon"/></li>
       </ul>
      </nav>
      <div className="md:hidden flex items-center">
       <img className="h-6 w-6" src={threeline} alt="menu-icon" />
     </div>
    </header>
  );
}

export default Header;
