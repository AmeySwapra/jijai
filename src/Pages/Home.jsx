import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import bgBanner from '../assets/Banner_1.jpg'; // Background image path
import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import SimplyDelicious from '../components/SimplyDelicious';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Products from '../components/Product';

function Home() {
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setScaleUp(true); 
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Box
      position="relative"
      height="100vh"
      overflow="hidden" 
    >
      
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${bgBanner})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        transform={scaleUp ? 'scale(1.3)' : 'scale(1)'} 
        transition="transform 5s ease-out" 
        zIndex="-2"
      />

    
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)" 
        zIndex="-1" 
      />

      
      <Header />
      <Hero />
    </Box>
      <HomeAbout/>
      <Products displayAll={false} />
      <SimplyDelicious/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default Home;
