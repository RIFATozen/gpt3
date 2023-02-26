import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-title">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-container">
        <div className="gpt3__footer-container_logo">
          <div>
            <img src={logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Links</h4>
            <p>
              <a href="#/">Overons</a>
            </p>
            <p>
              <a href="#/">Social Media</a>
            </p>
            <p>
              <a href="#/">Counters</a>
            </p>
            <p>
              <a href="#/">Contact</a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>Company</h4>
            <p>
              <a href="#/">Terms & Conditions</a>
            </p>
            <p>
              <a href="#/">Privacy Policy</a>
            </p>
            <p>
              <a href="#/">Contact</a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-container_copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
