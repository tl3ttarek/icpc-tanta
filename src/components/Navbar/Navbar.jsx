import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../assets/img/logo.png";

import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className={`header ${isNavOpen ? "nav-open" : ""}`}>
        <Link to="/">
          <img className="logo" alt="ICPC Tanta logo" src={Logo} />
        </Link>
        <nav>
          <ul className="main-nav-list">
            <li>
              <Link className="main-nav-link" to="#content">
                Training Content
              </Link>
            </li>
            <li>
              <Link className="main-nav-link" to="#about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="main-nav-link" to="#footer">
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link nav-cta"
                to="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us now
              </Link>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav" onClick={toggleNav}>
          <IonIcon
            className="icon-mobile-nav"
            icon={isNavOpen ? closeOutline : menuOutline}
            name={isNavOpen ? "close-outline" : "menu-outline"}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
