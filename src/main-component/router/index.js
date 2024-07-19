import React from 'react';
import { HashRouter, Routes, Route, } from "react-router-dom";
import CategorySinglePage from '../CategorySinglePage/CategorySinglePage';
import CoursePage from '../CoursePage/CoursePage';
import CourseSinglePage from '../CourseSinglePage/CourseSinglePage';
import HomePage2 from '../HomePage2/HomePage2';
import AboutPage from '../AboutPage/AboutPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TeamPage from '../TeamPage/TeamPage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ProductSinglePage from '../ProductSinglePage';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import ContactPage from '../ContactPage/ContactPage';
import FaqPage from '../FaqPage';
import BeComeTeacherPage from '../BeComeTeacherPage/BeComeTeacherPage';
import TermsPage from '../TermsPage/TermsPage';
// import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';


const AllRoute = () => {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category-single/:slug" element={<CategorySinglePage />} />
          <Route path="/course-single/:slug" element={<CourseSinglePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/teacher" element={<TeamPage />} />
          <Route path="/event-single/:slug" element={<EventSinglePage />} />
          <Route path='/become-teacher' element={<BeComeTeacherPage />} />
          <Route path='/product-single/:slug' element={<ProductSinglePage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/terms' element={<TermsPage/>} />
          <Route path='/blog-fullwidth' element={<BlogPageFullwidth />} />
          {/* <Route path='404' element={<ErrorPage />} /> */}
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default AllRoute;
