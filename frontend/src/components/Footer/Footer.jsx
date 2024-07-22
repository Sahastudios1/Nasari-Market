import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            impedit esse voluptas placeat labore veniam assumenda odit
            dignissimos eveniet eaque, excepturi tempora autem quasi veritatis,
            voluptate vero? Exercitationem, assumenda quisquam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>E-Commerce</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+233-20-088-5833</li>
                <li>t-hubcontact@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 © Tamale-hub.com- All Rights Reserved</p>
    </div>
  );
};

export default Footer;
