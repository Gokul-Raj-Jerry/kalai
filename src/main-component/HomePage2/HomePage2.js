import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import Features from '../../components/Features/Features';
import About2 from '../../components/about2/about2';
import CourseSection from '../../components/CourseSection/CourseSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import ChooseSectionS2 from '../../components/ChooseSectionS2/ChooseSectionS2';
import Newslatter2 from '../../components/Newslatter2/Newslatter2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} topbarClass={'d-block'}/>
            <Hero2/>
            <Features/>
            <About2/>
            <CourseSection/>
            <Testimonial/>
            <ChooseSectionS2/>
            <Newslatter2/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;