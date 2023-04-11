import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { animateScroll as scroll } from "react-scroll";

import "../../styles/global.css";
// import "./Navbar.css";
import Logo from "../../assets/img/logo.png";

import { useGetWidth } from "../../custom/useDimension";

import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const width = useGetWidth();

  return (
    <div>
      <div className={`header ${isNavOpen ? "nav-open" : ""}`}>
        <Link to="/">
          <img className="logo" alt="ICPC Tanta logo" src={Logo} />
        </Link>
        <nav>
          <ul className="main-nav-list">
            <li>
              <HashLink className="main-nav-link" smooth to="/#content">
                Training Content
              </HashLink>
            </li>
            <li>
              <HashLink className="main-nav-link" smooth to="/#about">
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink className="main-nav-link" smooth to="/#footer">
                Contact
              </HashLink>
            </li>
            <li>
              <a
                className="main-nav-link nav-cta"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us now
              </a>
            </li>
          </ul>
        </nav>
        {width < 1104 && (
          <div onClick={toggleNav} style={toggleButtonStyle}>
            {isNavOpen ? (
              <IonIcon icon={closeOutline} />
            ) : (
              <IonIcon icon={menuOutline} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const toggleButtonStyle = {
  cursor: "pointer",
  position: "absolute",
  top: "5rem",
  right: "5rem",
  fontSize: "6rem",
  color: "#fff",
};
