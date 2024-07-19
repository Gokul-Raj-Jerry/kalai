import { NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.svg'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'

const Header = (props) => {

    return (
        <header id="header">
            <HeaderTopbar topbarClass={props.topbarClass}/>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                                <div className="mobile-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="navbar-header">
                                    <NavLink className="navbar-brand" to="/"><img src={Logo}
                                        alt="logo" /></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/course">Skills</NavLink>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/gallery">Gallery</NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                                                <li><NavLink to="/teacher">Team</NavLink></li>
                                                <li><NavLink to="/become-teacher">Become Instructor</NavLink></li>
                                                <li><NavLink to="/faq">FAQ</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <NavLink to="/blog-fullwidth">Blog</NavLink>
                                        </li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <NavLink className="login" to="/"><span className="text">Sign In</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-charity"></i>
                                            </span></NavLink>
                                        <NavLink className="theme-btn" to="/"><span className="text">Sign Up</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-charity"></i>
                                            </span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;