import React from 'react';
import { Box, Center, Heading, Image, VStack, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion'; 
import logo from '../assets/JIJAI LOGO_page-0001.png';


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const Hero = () => {
  return (
    <Box
      className="container"
      p={4}
      height="calc(100vh - 4rem)" 
    >
      <Center
        textAlign="center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        height="100%"
      >
        <VStack spacing={4} color="white">
         
          <MotionBox
            display="flex"
            alignItems="center"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }} 
          >
            <Divider flex="1" borderColor="yellow.900" />
            <MotionImage
              src={logo}
              alt="Jijai Logo"
              width="30%"
              mx={4}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} 
            />
            <Divider flex="1" borderColor="yellow.900" />
          </MotionBox>

          
          <MotionHeading
            as="h1"
            sx={{
              fontFamily: "'Courgette', cursive",
              fontWeight: '400',
              fontSize: '60px',
              lineHeight: '70px',
              margin: '30px 0 50px 0',
              textAlign: 'center',
              fontStyle: 'italic'
            }}
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.4 }} 
          >
            Welcome To Jijai Masale
          </MotionHeading>

          
          <MotionHeading
            as="h2"
            fontSize="lg"
            display="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 2 }}
          >
            Hidden
          </MotionHeading>
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;
