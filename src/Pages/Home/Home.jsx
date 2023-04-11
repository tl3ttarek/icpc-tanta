import React from "react";

import "../../styles/global.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import GallerySection from "../../components/GallerySection/GallerySection";

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
        {/*<CTASection />*/}
      </main>
    </div>
  );
};

export default Home;
