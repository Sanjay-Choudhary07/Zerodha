import React from 'react';
import logo from '../assets/Zerodha.png';
const Footer = () => {
    return (
        <div className='flex bg-[#fbfbfb] mt-20 pt-[30px] pr-0 pb-[5px] pl-0  border-t border-t-[#eee]'>
        <div className='flex flex-col m-0 mx-auto w-[1100px] box-border max-w-full'>
            <div className='flex '>
                <div className='flex flex-col'>
                    <div className='flex'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
                        <p>All rights reserved.</p>
                    </div>
                    <div className='flex'>
                        <ul>
                            <li>
                                <img src="" alt="" />
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Referral Programme</li>
                        <li>Careers</li>
                        <li>Zerodha.tech</li>
                        <li>Press & Media</li>
                        <li>Zerodha Cares(CSR)</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Support</li>
                        <li>Contact us</li>
                        <li>Support portal</li>
                        <li>Z-Connect blog</li>
                        <li>List of charges</li>
                        <li>Downloads and Resources</li>
                        <li>Videos</li>
                        <li>Market overview</li>
                        <li>How to file a compliant</li>
                        <li>Status of your complaints</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Account</li>
                        <li>Open an account</li>
                        <li>Fund transfer</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
        </div>
    )
}
export default Footer