import React, { useRef } from "react";

import "../../styles/global.css";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../../custom/useIntersectionObserver";

const HeroSection = () => {
  const sectionHeroRef = useRef();

  useIntersectionObserver(sectionHeroRef, (entry) => {
    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  });

  return (
    <section ref={sectionHeroRef} className="section-hero">
      <div className="container hero-container">
        <h1 className="heading-primary">
          Achieve Competitive Programming Excellence with the Power of Our
          Community!
        </h1>

        <p className="hero-subtext">
          Join our community to improve your competitive programming skills with
          access to various resources, practice sessions, and experienced
          mentors. Stay updated with the latest ICPC news and events while
          exchanging tips and tricks with other members. Elevate your
          competitive programming journey with us today!
        </p>

        <p className="training-open">Our training is open!</p>

        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
          className="btn btn--full"
          target="_blank"
        >
          Join us now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
