import "../assessts/css/hero.css";
import React from 'react'
import Image2 from "../assessts/img/image 2.png"
import Image1 from "../assessts/img/image 1.png"


const Hero = () => {
  return (
    <>
    <div className="main-outer">
        <div className="hero-image">
                <div className="hero-content">
                    <div className="text-layout">
                        <p>We crush your competitors, goals, and sales records - without the B.S.</p>
                        <button className="botton">
                            <div className="botton-text">
                                <p>Get free consultation</p>
                            </div>
                        </button>
                    </div>
                </div>
        </div>
            <div className="dev-outer">
                <div>
                    <img src={Image2} className="dev-img"></img>
                </div>
                <div className="dev-text-outer">
                    <h2 className="dev-topic">Web & Mobile App Development</h2>
                    <div className="dev-text">
                        <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <button className="div-botton">
                            <div className="div-botton-text">
                                <p>Learn More</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cons-outer">
                <div className="cons-text-outer">
                    <h2 className="cons-topic">Digital Strategy Consulting</h2>
                    <div className="cons-text">
                        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <button className="cons-botton">
                            <div className="cons-botton-text">
                                <p>Learn More</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={Image1} className="cons-img"></img>
                </div>
            </div>
    </div>
    </>
  )
}

export default Hero