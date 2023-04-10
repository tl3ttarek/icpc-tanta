import React from "react";

import "../../styles/global.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section class="section-hero">
      <div class="container hero-container">
        <h1 class="heading-primary">
          Achieve Competitive Programming Excellence with the Power of Our
          Community!
        </h1>

        <p class="hero-subtext">
          Join our community to improve your competitive programming skills with
          access to various resources, practice sessions, and experienced
          mentors. Stay updated with the latest ICPC news and events while
          exchanging tips and tricks with other members. Elevate your
          competitive programming journey with us today!
        </p>

        <p class="training-open">Our training is open!</p>

        <Link
          to="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
          class="btn btn--full"
          target="_blank"
        >
          Join us now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
