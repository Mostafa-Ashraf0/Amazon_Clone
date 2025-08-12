import React from "react";
import "./Footer.css";

export default function Footer() {
    const handleClick = (e)=>{
        e.preventDefault();
        //back to the top of the page
        window.scrollTo({
        top: 0,
        behavior: "smooth"})
    }
    return (
        <footer className="footer">
        <div className="footer-top" onClick={handleClick}> 
            <p>Back to top</p>
        </div>

        <div className="footer-links">
            <div>
            <h4>Get to Know Us</h4>
            <a href="#">About Amazon</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
            <a href="#">Amazon Science</a>
            </div>

            <div>
            <h4>Connect with Us</h4>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            </div>

            <div>
            <h4>Make Money with Us</h4>
            <a href="#">Sell on Amazon</a>
            <a href="#">Affiliate Program</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
            </div>

            <div>
            <h4>Let Us Help You</h4>
            <a href="#">COVID-19 and Amazon</a>
            <a href="#">Your Account</a>
            <a href="#">Returns Centre</a>
            <a href="#">Help</a>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2025, Amazon Clone by Mostafa, All rights reserved.</p>
        </div>
        </footer>
    );
    }
