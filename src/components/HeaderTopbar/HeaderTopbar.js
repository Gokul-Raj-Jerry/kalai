import React from 'react'
// import { Link } from 'react-router-dom'

const HeaderTopbar = (props) => {
    return (
        <div className={`topbar ${props.topbarClass}`}>
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call"></i>+91 (797) 522-5629</li>
                                <li><i className="fi flaticon-email"></i>info@kalai.life</li>
                                <li><i className="fi flaticon-maps-and-flags"></i>Bangalore</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-12 col-12">
                        <div className="contact-info">
                            <ul>
                                    <li>
                                    <a href="https://www.facebook.com/profile.php?id=61560771446684" target="_blank" rel="noreferrer">
                                    <i className="fi flaticon-facebook-app-symbol"></i></a>
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com/kalailife24/" target="_blank" rel="noreferrer">
                                    <i className="fi flaticon-instagram-1"></i></a>
                                    </li>
                                    <li>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                                    <i className="ti-google"></i></a>
                                    </li>
                                    <li>
                                    <a href="https://www.youtube.com/channel/UCWmQPUF2MlqQCXQRFJ0dWJw" target="_blank" rel="noreferrer">
                                    <i className="fi flaticon-youtube"></i></a>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;