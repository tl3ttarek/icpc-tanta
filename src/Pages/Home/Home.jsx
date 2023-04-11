import React from "react";

import "../../styles/global.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import GallerySection from "../../components/GallerySection/GallerySection";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";

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
      <Footer/>
    </div>
  );
};

export default Home;
