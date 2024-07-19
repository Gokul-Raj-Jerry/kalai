import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-s2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={Logo}
                                            alt=""/></Link>
                                </div>
                                <p>"At Kalai, we empower individuals through comprehensive training programs designed for success. Join us to enhance your skills and unlock your full potential!"</p>
                                <div className="social">
                                <ul>
                                    <li>
                                    <a href="https://www.facebook.com/profile.php?id=61560771446684" target="_blank" rel="noreferrer">
                                    <i className="ti-facebook"></i></a>
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com/kalailife24/" target="_blank" rel="noreferrer">
                                    <i className="ti-instagram"></i></a>
                                    </li>
                                    <li>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                                    <i className="ti-google"></i></a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/course">Skills</Link></li>
                                    <li><Link onClick={ClickHandler} to="/teacher">Teachers</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Latest Blogs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/course">Skills</Link></li>
                                    <li><Link onClick={ClickHandler} to="/register">Sign Up</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-contact-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-email"></i>info@kalai.life</li>
                                        <li><i className="fi flaticon-email"></i>kalailife24@gmail.com</li>
                                        <li><i className="fi flaticon-phone-call"></i>+91 (797) 522-5629 <br/></li>
                                        <li><i className="fi flaticon-placeholder"></i>IND, Bangalore</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>&copy; 2024 <Link onClick={ClickHandler} to="/">Kalai</Link>. All rights reserved.</li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/terms">Terms & Condition</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;