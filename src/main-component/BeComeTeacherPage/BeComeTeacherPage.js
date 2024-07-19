import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import vImg from "../../images/teacher.jpg";
import TeamSection from "../../components/TeamSection/TeamSection";
import emailjs from "@emailjs/browser";

import './BeCTnotify.css'

const BeComeTeacherPage = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    file: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const [notification, setNotification] = useState(null); // Add this line

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
    if (e.target.name === "phone") {
      if (!e.target.value) {
        validator.message("phone", "Please upload a phone", "required");
      } else {
        validator.hideMessages("phone");
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      setForms({
        name: "",
        email: "",
        subject: "",
        phone: "",
        // file: '',
        message: "",
      });
      setNotification("Email sent successfully!"); // Add this line
      setTimeout(() => {
        setNotification(null);
      }, 2000); // clear notification after 2 seconds

      const templateParams = {
        name: forms.name,
        email: forms.email,
        subject: forms.subject,
        message: forms.message,
        phone: forms.phone,
        // file: forms.file
      };

      emailjs
        .send(
          "service_m0e5s1n",
          "template_wacs2sk",
          templateParams,
          "J2IgaYdBiQKEczv8C"
        )
        .then((response) => {
          console.log("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setNotification("Error sending email!");
          setTimeout(() => {
            setNotification(null);
          }, 2000); // clear notification after 2 seconds
        });
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = (e) => {
    sendEmail(e);
  };

  return (
    <div className="teacher-page">
      <Navbar />
      <PageTitle pageTitle={"Become a Instructor"} pagesub={"Instructor"} />
      <div className="teacher-area section-padding pb-0">
        <div className="teacher-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="teacher-item">
                  <div className="teacher-img-wrap">
                    <div className="volunter-img">
                      <img src={vImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="teacher-contact">
                  <div className="teacher-contact-form">
                    <form
                      onSubmit={(e) => submitHandler(e)}
                      className="contact-validation-active"
                      id="contact-form-main"
                    >
                      <h2>Become a Instructor</h2>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                          <div className="form-field">
                            <input
                              value={forms.name}
                              type="text"
                              name="name"
                              onBlur={(e) => changeHandler(e)}
                              onChange={(e) => changeHandler(e)}
                              placeholder="Your Name"
                            />
                            {validator.message(
                              "name",
                              forms.name,
                              "required|alpha_space"
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                          <div className="form-field">
                            <input
                              value={forms.email}
                              type="email"
                              name="email"
                              onBlur={(e) => changeHandler(e)}
                              onChange={(e) => changeHandler(e)}
                              placeholder="Your Email"
                            />
                            {validator.message(
                              "email",
                              forms.email,
                              "required|email"
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                          <div className="form-field">
                            <input
                              value={forms.subject}
                              type="text"
                              name="subject"
                              onBlur={(e) => changeHandler(e)}
                              onChange={(e) => changeHandler(e)}
                              placeholder="Your subject"
                            />
                            {validator.message(
                              "subject",
                              forms.subject,
                              "required|alpha_space"
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                          {/* <label htmlFor="phone">Phone Number</label> */}
                          <div className="form-field">
                            <input
                              value={forms.phone}
                              type="text"
                              name="phone"
                              onBlur={(e) => changeHandler(e)}
                              onChange={(e) => changeHandler(e)}
                              placeholder="Phone Number"
                            />
                            {validator.message(
                              "phone",
                              forms.subject,
                              "required|alpha_space"
                            )}
                          </div>
                          {/* <input
                                                        value={forms.file}
                                                        type="file"
                                                        name="file"
                                                        id='file'
                                                        onBlur={(e) => changeHandler(e)}
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="Your Email" />
                                                    {validator.message('file', forms.file, 'required|file')}
                                                    <i className="ti-cloud-up"></i> */}
                        </div>
                        <div className="col-lg-12 col-12 form-group">
                          <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            placeholder="Message"
                          ></textarea>
                          {validator.message(
                            "message",
                            forms.message,
                            "required"
                          )}
                        </div>
                        <div className="submit-area col-lg-12 col-12">
                          <button
                            type="submit"
                            className="theme-btn submit-btn"
                          >
                            Send Message
                          </button>
                          <div id="loader">
                            <i className="ti-reload"></i>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix error-handling-messages">
                        <div id="success">Thank you</div>
                        <div id="error">
                          {" "}
                          Error occurred while sending email. Please try again
                          later.
                        </div>
                      </div>
                      {notification && (
    <div className="notification success">
      {notification}
    </div>
  )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TeamSection pbClass={"s2"} />
      </div>
      <Footer />
      <Scrollbar />
    </div>
  );
};

export default BeComeTeacherPage;
