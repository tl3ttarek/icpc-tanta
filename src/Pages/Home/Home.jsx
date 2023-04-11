import React from "react";

import "../../styles/global.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import AboutSection from "../../components/aboutSection/AboutSection";
import TrainingSection from "../../components/trainingSection/TrainingSection";

const Home = () => {
  return (
    <div>
      <header className="upper-site">
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <AboutSection />
        <TrainingSection />
        {/* <GallerySection />
        <CTASection /> */}
      </main>
    </div>
  );
};

export default Home;
