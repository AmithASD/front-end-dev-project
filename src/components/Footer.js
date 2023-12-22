import React from 'react'
import  '../assessts/css/footer.css';
import Logo from "../assessts/img/Logo.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container-top'>
            <div className='left'>
                <div className='lacation'>
                    <div className='footer-logo'>
                        <img src={Logo} className='footer-logo'></img>
                    </div>
                    <div className='text-left'>
                        <p>Your goal is target. Not anything in between. We use Online marketing platforms ant tools to achive single objective-your business resuls.</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='technologies'>
                    <h4>Our Technologies</h4>
                    <p>React JS</p>
                    <p>Gatsby</p>
                    <p>Next JS</p>
                    <p>Node JS</p>
                    <p>GraphQL</p>
                    <p>Laravel</p>
                </div>
                <div className='services'>
                    <h4>Our Services</h4>
                    <p>Social Media Marketing</p>
                    <p>We & Mobile app Development</p>
                    <p>Data & Analytic</p>
                    <p>Google marketing Solutions</p>
                    <p>Serach engine Optimization</p>
                </div>
            </div>
        </div>
        <div className='footer-container-bottom'>
            <hr></hr><br></br>
            <p>Privacy Policy   |  Terms & Conditions </p>
        </div>
    </div>
  )
}

export default Footer
