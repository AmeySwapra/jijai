import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImg from '../assets/garam-masala.jpg';


const MotionBox = motion(Box);

const SimplyDelicious = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: '400px', md: '500px' }} 
      backgroundImage={`url(${bgImg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={{ base: 4, md: 8 }} 
    >
      <MotionBox
        ref={ref}
        bg="black"
        color="white"
        px={{ base: 6, md: 14 }} 
        py={{ base: 6, md: 10 }}
        borderRadius="lg"
        textAlign="center"
        w={{ base: '90%', sm: '80%', md: '600px' }} 
        h={{ base: 'auto', md: '350px' }} 
        initial={{ x: '70%', opacity: 0 }} 
        animate={inView ? { x: '0%', opacity: 1 } : {}} 
        transition={{ duration: 3, ease: 'easeOut' }} 
      >
        <VStack spacing={{ base: 6, md: 10 }}>
          <Text
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }} 
            fontWeight="bold"
            fontStyle="italic"
            fontFamily="cursive"
          >
            SIMPLY DELICIOUS
          </Text>
          <Text fontSize={{ base: 'sm', md: 'lg' }}>We supply highly quality organic products</Text>
          <Button
            fontWeight="500"
            fontSize={{ base: '16px', md: '20px' }} 
            lineHeight="20px"
            color="#1D1A25"
            h={{ base: '50px', md: '60px' }} 
            borderRadius="30px"
            display="inline-block"
            bg="#FEA02F"
            _hover={{
              bg: 'white',
              color: '#FEA02F',
              borderColor: '#FEA02F',
            }}
          >
            Find Out More
          </Button>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default SimplyDelicious;
