import React from 'react'
import CollapsibleExample from '../components/Navbar'
import Footer from '../components/Footer'
import "../assessts/css/home.css";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
        <div>
            <CollapsibleExample/>
            <Hero/>
            <Footer/>
        </div>
    </>
  )
}

export default Home
