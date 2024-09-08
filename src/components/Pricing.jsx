import React from 'react';
import rightarrow from '../assets/right-arrow.png';

const Pricing = () => {
    return (
        <div className='flex flex-col mt-8 '>
            <div className='flex max-w-full w-[1100px] box-border gap-6 align-middle m-0 mx-auto px-6 py-24 items-start '>
                <div className='flex flex-col w-[40%]'>
                    <h2 className='text-4xl mb-5 text-[#424242] font-semibold gap-2 mb-10'>Unbeatable pricing</h2>
                    <p className='flex mb-6 leading-loose text-[#666] gap-2'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                </div>
                <div className='flex box-border justify-between gap-32'>
                    <div className='flex flex-col items-center mt-4'>
                        <img
                            className='w-[120px] h-[120px] object-contain mt-4'
                            src="https://zerodha.com/static/images/pricing-eq.svg"
                            alt='price-0'
                        />
                        <p className='flex text-center text-[12px] -mt-8 text-[#666]'>
                            Free account <br />
                            opening
                        </p>
                    </div>
                        <div className='flex flex-col items-center mt-4'>
                        <img
                            className='w-[120px] h-[120px] object-contain mt-4'
                            src="https://zerodha.com/static/images/pricing-eq.svg"
                            alt="price-0"
                        />
                        <p className='flex text-center text-[12px] -mt-8  text-[#666]'>
                            Free equity delivery <br />
                            and direct mutual funds
                        </p>
                    </div>
                    <div className='flex flex-col items-center mt-4'>
                        <img
                            className='w-[120px] h-[120px] object-contain mt-4'
                            src="https://zerodha.com/static/images/other-trades.svg"
                            alt="price-20"
                        />
                        <p className='flex text-center text-[12px] -mt-8 text-[#666]'>
                            Intraday and <br />
                            F&O
                        </p>
                    </div>
                </div>
            </div>
             <div className='flex w-[1100px] text-[#387ed1] -mt-32 ml-60'>
                <p className='flex -ml-1 font-semibold'>
                    See pricing
                </p>
                <img className='w-[25px] ml-2' src={rightarrow} alt="right-arrow-icon" />
        </div>
        </div>
    )
}

export default Pricing;
