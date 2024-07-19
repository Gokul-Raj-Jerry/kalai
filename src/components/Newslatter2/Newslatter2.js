import React from "react";
import { Link } from "react-router-dom";
import './news.css'

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Newslatter2 = (props) => {
  return (
    <section className="wpo-subscribe-section-s2 section-padding">
      <div className="container-fluid">
        <div className="wpo-subscribe-wrap">
          <div className="subscribe-text">
            <h3>Subscribe to our Community</h3>
          </div>
          <div className="subscribe-form text-center">
            <div className="input-field d-inline-block">
              <Link onClick={ClickHandler} to="/contact" className="theme-btn">
                <button type="submit">Subscribe</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newslatter2;