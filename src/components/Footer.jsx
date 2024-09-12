import React from 'react';
const Footer = () => {
    return (
     <footer className="bg-[#fbfbfb] mt-20 pt-10 border-t border-t-[#eee]">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="flex flex-col items-start mr-6 mb-6 md:mb-0">
          <img
          src="https://zerodha.com/static/images/logo.svg" 
          alt="Zerodha Logo"
          className="h-5 mb-5"
        />
          <p className="text-sm text-gray-600">© 2010 - 2024, Zerodha Broking Ltd.</p>
          <p className="text-sm text-gray-600 mb-4">All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className= " text-gray-500 hover:text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:space-x-10">
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-base text-gray-800 mb-4">Company</h4>
            <ul className="text-base text-gray-600 font-medium space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-base text-gray-800 mb-4">Support</h4>
            <ul className="text-base font-medium text-gray-600 space-y-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">Z-Connect Blog</a></li>
              <li><a href="#">List of Charges</a></li>
              <li><a href="#">Downloads & Resources</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Market Overview</a></li>
              <li><a href="#">How to File a Complaint?</a></li>
              <li><a href="#">Status of Your Complaints</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base text-gray-800 mb-4">Account</h4>
            <ul className="text-base font-medium text-gray-600 space-y-2">
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer