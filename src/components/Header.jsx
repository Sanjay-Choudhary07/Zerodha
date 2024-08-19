import React from 'react';
import logo from '../../assets/Zerodha.png';
const Header = () => {
     return(
        <>
        <div className='flex'>
            <div className='flex'>
             <img src={logo} alt='zerodha-logo'/>
            </div>
        </div>
        </>
     )
}
export default Header;

