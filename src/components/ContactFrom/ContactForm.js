import React, { useState, useRef  } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser';
import "./notify.css"


const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    
    const [notification, setNotification] = useState(null); // Add this line
    const formRef = useRef(null);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
          validator.hideMessages();
          sendEmail();
        } else {
          validator.showMessages();
        }
      };

      const sendEmail = () => {
        emailjs.sendForm('service_m0e5s1n', 'template_3g8ia76', formRef.current, 'J2IgaYdBiQKEczv8C')
         .then((response) => {
            console.log('Email sent successfully:', response.status, response.text);
            setForms({
              name: '',
              email: '',
              subject: '',
              phone: '',
              message: '',
            });
            setNotification('Email sent successfully!'); // Add this line
            setTimeout(() => {
                setNotification(null);
              }, 2000); // clear notification after 5 seconds  
        })
         .catch((err) => {
            console.error('Error sending email:', err);
            setNotification('Error sending email!');
        setTimeout(() => {
          setNotification(null);
        }, 2000); // clear notification after 5 seconds
          });
      };

    return (
        <div>
        <form ref={formRef} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            name="subject">
                            <option>Music</option>
                            <option>Sports</option>
                            <option>Martial Arts</option>
                            <option>Fitness</option>
                            <option>Health & Nutrition</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Submit Now</button>
            </div>
        </form >
        {notification && (
        <div className={`notification ${notification.includes('successfully') ? 'success' : 'error'}`}>
          {notification}
        </div>
      )}
        </div>
    )
}

export default ContactForm;