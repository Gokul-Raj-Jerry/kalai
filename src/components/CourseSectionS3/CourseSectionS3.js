import React from "react";
import { Link } from 'react-router-dom'
import Courses from "../../api/Courses";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CourseSectionS3 = (props) => {
    return (
        <div className={`wpo-popular-area section-padding ${props.pClass}`}>
            <div className="container">
                <div className="wpo-popular-wrap">
                    <div className="row">
                        {Courses.slice(0, 6).map((course, aitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                                <div className="wpo-popular-single">
                                    <div className="wpo-popular-item">
                                        <div className="wpo-popular-img">
                                            <img src={course.cImg} alt="" />
                                            {/* <div className="thumb">
                                                <span>${course.fee}</span>
                                            </div> */}
                                        </div>
                                        <div className="wpo-popular-content">
                                            <div className="wpo-popular-text-top">
                                                <ul>
                                                    <li><i className="fi flaticon-star"></i></li>
                                                    <li>({course.ratting})</li>
                                                </ul>
                                            </div>
                                            <h2><Link onClick={ClickHandler} to={`/course-single/${course.slug}`}>{course.title}</Link></h2>
                                            <div className="wpo-popular-text-bottom">
                                                <ul>
                                                    <li>{course.description}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        {Courses.slice(6, 7).map((course, aitem) => (
                            <div className="col col-lg-12 col-md-12 col-12" key={aitem}>
                                <div className="wpo-popular-single">
                                    <div className="wpo-popular-item">
                                        <div className="wpo-popular-img">
                                            <img src={course.cImg} alt="" />
                                            {/* <div className="thumb">
                                                <span>${course.fee}</span>
                                            </div> */}
                                        </div>
                                        <div className="wpo-popular-content">
                                            <div className="wpo-popular-text-top">
                                                <ul>
                                                    <li><i className="fi flaticon-star"></i></li>
                                                    <li>({course.ratting})</li>
                                                </ul>
                                            </div>
                                            <h2><Link onClick={ClickHandler} to={`/course-single/${course.slug}`}>{course.title}</Link></h2>
                                            <div className="wpo-popular-text-bottom">
                                                <ul>
                                                    <li>{course.description}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSectionS3;