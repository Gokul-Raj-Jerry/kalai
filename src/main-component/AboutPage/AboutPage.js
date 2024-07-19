import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import CourseSection from '../../components/CourseSection/CourseSection';
import FunFact2 from '../../components/FunFact2/FunFact2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Newslatter2 from '../../components/Newslatter2/Newslatter2';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About/>
            <CourseSection/>
            <FunFact2/>
            <TeamSection/>
            <Newslatter2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
