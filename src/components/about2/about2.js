import React from 'react'
import abimg from '../../images/about/img-3.png'
import shape from '../../images/about/shape.png'
import { Link } from 'react-router-dom'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                                <div className="back-shape">
                                    <img src={shape} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <small>About Kalai</small>
                                    <h2>A new Way to learn new skills.
                                    </h2>
                                </div>
                                <p>By actively engaging in skills development, Students will have interest to learn and implement the skills in a proper way. They learn to embrace challenges as opportunities for growth, which enables them to thrive in an ever-changing landscape and remain relevant in their chosen field of Kalai.</p>
                                <p>New skills enable individuals to pursue their passions, unleash their potential and fulfilment in their Passion.</p>
                                <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">Learn More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;