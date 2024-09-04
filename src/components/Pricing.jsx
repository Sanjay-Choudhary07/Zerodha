import React from 'react';

const Pricing = () => {
    return (
            <div className='flex flex-col mt-8 '>
                <div className='flex max-w-full w-[1100px] box-border gap-6 align-middle
                 m-0 mx-auto px-6 py-24 items-start '>
                    <div className='flex flex-col'>
                        <h2 className='text-4xl mb-5 text-[#424242] font-semibold gap-2 mb-10'>Unbeatable pricing</h2>
                        <p className='flex  mb-6 leading-loose text-[#666] gap-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    </div>
                    <div className='flex box-border'>
                        <div className='flex'>
                            <img className='w-[240px] max-w-full' src="https://zerodha.com/static/images/pricing-eq.svg" alt='price-0' />
                            <div className=' flex text-[12px] w-[90px]  mt-24 -ml-5   text-[#666] '>Free account <br/>
                            opening </div>
                        </div>
                        <div className='flex'>
                            <img className='w-full' src="https://zerodha.com/static/images/pricing-eq.svg" alt="price-0" />
                            <p>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='flex'>
                            <img className='w-full' src="https://zerodha.com/static/images/other-trades.svg" alt="price-20" />
                            <p>Intraday and
                                F&O</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <p className='flex'>
                        See pricing
                    </p>
                </div>
            </div>
    )
}
export default Pricing;