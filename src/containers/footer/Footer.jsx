import React from 'react';
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer(props) {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Ready to elevate your shoe game?
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <p>Marko Rudy K12 183 <br/> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Marko Rudy K12 183</p>
                    <p>012985-132567</p>
                    <p>marko@rudy.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@2023 shoeha. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;