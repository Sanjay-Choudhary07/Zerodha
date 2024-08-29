import React from 'react'
import Header from '../components/Header';
import Landing from '../components/Landing';
import Ecosystem from '../components/Ecosystem';
import Pricing from '../components/Pricing';
import Varsity from '../components/Varsity';
import OpenAccount from '../components/OpenAccount';

const Home = () =>{
    return(
        <>
        <Header/>
        <Landing/>
        <Ecosystem/>
        <Pricing/>
        <Varsity/>
        <OpenAccount/>
        </>
    )
}
export default Home;