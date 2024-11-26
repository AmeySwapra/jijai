import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { keyframes } from '@emotion/react';
import bgProduct from '../assets/productBg.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const animateCircles = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

const animateText = keyframes`
  0% {
    transform: translateY(250px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

function ContactPage() {
  const circles = Array.from({ length: 10 }).map((_, index) => ({
    size: Math.floor(Math.random() * 150) + 20,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 10 + 10}s`,
    rotationDuration: `${Math.random() * 5 + 5}s`
  }));

  return (
    <>
      <Box position="relative" minHeight="100vh" overflow="hidden">
       
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundImage={`url(${bgProduct})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
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

       
        <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="0">
          {circles.map((circle, index) => (
            <Box
              key={index}
              position="absolute"
              width={`${circle.size}px`}
              height={`${circle.size}px`}
              background="rgba(255, 255, 255, 0.3)"
              borderRadius="10px"
              left={circle.left}
              bottom="-150px"
              animation={`${animateCircles} ${circle.duration} linear ${circle.delay} infinite`}
            />
          ))}
        </Box>

        
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="1"
        >
          <Text
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            color="white"
            fontWeight="bold"
            fontStyle="italic"
            fontFamily="Poppins, sans-serif"
            textAlign="center"
            animation={`${animateText} 2.5s ease-out`}
            px={4}
          >
            Contact Us
          </Text>
        </Box>

       
        <Box
          position="absolute"
          left="50%"
          bottom={{ base: '50px', md: '0' }}
          transform="translate(-50%, 50%)"
          width={{ base: '70%', md: '45%' }}
          maxWidth="300px"
          height="auto"
          bg="white"
          boxShadow="1px 1px 10px rgba(0, 0, 0, 0.5)"
          borderRadius="50px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={4}
          py={6}
          zIndex="1000"
        >
          <Box display="flex" justifyContent={'center'} alignItems="center" zIndex={2} mb={4}>
            <Icon as={FaHome} boxSize={6} color="#FEA02F" />
            <Link
              to="/"
              ml={2}
              style={{ marginLeft: '10px', fontSize: '20px' }}
              fontWeight="bold"
              color="gray.700"
              _hover={{ color: '#FEA02F' }}
            >
              Home
            </Link>

            <Text m={2}>-</Text>
            <Link
              to="/contact"
              fontWeight="bold"
              style={{ margin: '10px', fontSize: '20px' }}
              color="black.700"
            >
              Contact Us
            </Link>
          </Box>
        </Box>

        {/* Header */}
        <Header />
      </Box>

      <ContactUs />
      <Footer />
    </>
  );
}

export default ContactPage;
