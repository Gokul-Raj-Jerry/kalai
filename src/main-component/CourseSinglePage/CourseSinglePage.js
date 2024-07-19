import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Courses from "../../api/Courses";
import Footer from '../../components/footer/Footer';

const CourseSinglePage = (props) => {
    const { slug } = useParams()

    const CoursesDetails = Courses.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={CoursesDetails.title} pagesub={'Course'} />
            <div className="wpo-course-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="wpo-course-details-wrap">
                                <div className="wpo-course-details-img">
                                    <img src={CoursesDetails.cSImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CourseSinglePage;
