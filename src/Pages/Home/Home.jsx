import React from "react";

import "../../styles/global.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <div>
      <header class="upper-site">
        <Navbar />
        <HeroSection />
      </header>
      <main>
        {/*<AboutSection />
        <AboutSection />*/}
        <GallerySection />
        <CTA/>
      </main>
    </div>
  );
};

export default Home;
