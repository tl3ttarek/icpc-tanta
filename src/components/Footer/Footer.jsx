import React from 'react'

import { IonIcon } from '@ionic/react'
import { logoFacebook, logoInstagram, logoLinkedin, logoTwitter } from 'ionicons/icons'

function Footer() {
    return (
    <footer className="footer">
        <div className="container grid grid--4-col">
            <div className="logo-col">
            <a href="https://icpc-tanta.live">
                <img src={require("../../assets/img/logo.png")} alt="logo" className="logo logo--footer"/>
            </a>
            <p className="social-text">Stay Connected with Us</p>
            <div className="social" id="footer">
                <a href="#!!!!!!!!!!!!!!!!" className="social-link">
                <IonIcon icon={logoFacebook}/>
                </a>
                <a href="#!!!!!!!!!!!!!!!!!!" className="social-link">
                <IonIcon icon={logoTwitter}/>
                </a>
                <a href="#!!!!!!!!!!!!!!!!!!!!" className="social-link">
                <IonIcon icon={logoInstagram}/>
                </a>
                <a href="#!!!!!!!!!!!!!!!!!" className="social-link">
                <IonIcon icon={logoLinkedin}/>
                </a>
            </div>
            </div>

            <div className="community-col">
            <h3 className="heading-footer">Community</h3>
            <ul className="footer-list">
                <li className="footer-list-item">
                <a href="#about" className="footer-link">About us</a>
                </li>
                <li className="footer-list-item">
                <a href="#team" className="footer-link">Our Team</a>
                </li>
                <li className="footer-list-item">
                <a href="#contests" className="footer-link">Past Contests</a>
                </li>
                <li className="footer-list-item">
                <a href="#champions" className="footer-link">Our Champions</a>
                </li>
            </ul>
            </div>

            <div className="cta-col">
            <h3 className="heading-footer">Join us</h3>
            <ul className="footer-list">
                <li className="footer-list-item">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
                    className="footer-link">
                    Join as a student
                </a>
                </li>
                <li className="footer-list-item">
                <a href="#!!!!!!!!!!!!!!!!!!!!!!" className="footer-link">
                Join as a coach
                </a>
                </li>
                <li className="footer-list-item">
                <a href="#!!!!!!!!!!!!!!!!!!!!!!" className="footer-link">
                Join as a sponsor
                </a>
                </li>
            </ul>
            </div>

            <div className="copyright">
            Copyright &copy; 
            <span className="year"> 2023 </span> 
                ICPC Tanta. All rights reserved.
            </div>
        </div>
    </footer>
    )
}

export default Footer
