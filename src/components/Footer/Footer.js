import React from 'react';
import IconBg from '../IconBg/IconBg.js';
import FlexibleLogo from '../Navbar/FlexibleLogo/FlexibleLogo.js';
import { HashLink as Link } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
         <div className="footer-upper-div">
             <div className="company-list">
                 <ul className="list">
                    <li><h3 className="list-title">Company</h3></li>
                    <li className="list-item"><Link className="hash-link" to="/about-us">About Us</Link></li>
                    <li className="list-item">Freebies</li>
                    <li className="list-item">Premium</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Affiliate Program</li>
                    <li className="list-item">Get coupon</li>
                 </ul>
             </div>
             <div className="helpandsupport-list">
                <ul className="list">
                    <li><h3 className="list-title">Help and Support</h3></li>
                    <li className="list-item">Knowledge Center</li>
                    <li className="list-item"><Link className="hash-link" to="/contact-us">Contact Us</Link></li>
                    <li className="list-item">Premium Support</li>
                    <li className="list-item">Sponsorships</li>
                    <li className="list-item">Custom Development</li>
                </ul>
             </div>
             <div className="legal-list">
                <ul className="list">
                    <li><h3 className="list-title">Legal</h3></li>
                    <li className="list-item"><Link className="hash-link" to="/terms-conditions">Terms and Conditions</Link></li>
                    <li className="list-item"><Link className="hash-link" to="/privacy-policy">Privacy Policy</Link></li>
                    <li className="list-item">Licenses</li>
                </ul>
             </div>
             <div className="resources-list">
                <ul className="list">
                    <li><h3 className="list-title">Resources</h3></li>
                    <li className="list-item">Bootstrap Cheat sheet</li>
                    <li className="list-item">Third Party Tools</li>
                    <li className="list-item">Illustrations</li>
                    <li className="list-item">Bits</li>
                    <li className="list-item">Bluehost</li>
                    <li className="list-item">Digital Ocean</li>
             https://github.com/       <li className="list-item">Made with Creative Tim</li>
                </ul>
             </div>
         </div>
         <hr className="partition-line shadow-2" />
         <div className="footer-lower-div">
            <FlexibleLogo color={'#F4F4F4'} direction="bottom" height='40px' width='30px' />
            <div className="icon-list">
                <a href="https://github.com/"><IconBg icon={<AiIcons.AiFillGithub className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://in.nba.com/?gr=www"><IconBg icon={<GiIcons.GiBasketballBall className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://www.facebook.com/"><IconBg icon={<FaIcons.FaFacebook className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://twitter.com/?lang=en"><IconBg icon={<AiIcons.AiOutlineTwitter className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://www.instagram.com/"><IconBg icon={<FaIcons.FaInstagram className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://www.youtube.com/"><IconBg icon={<FaIcons.FaYoutube className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
                <a href="https://in.pinterest.com/"><IconBg icon={<FaIcons.FaPinterest className="shapeCircle icon-bg" size={'1.5rem'} color="white"/>}/></a>
            </div>
            <footer className="foot">&#169; 2021 Debugged.exe, all rights reserved.Made with &#128147;</footer>
         </div>
        </div>
    )
}

export default Footer;