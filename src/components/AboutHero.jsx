import React from 'react';
import { Box, Image, Text, Flex, VStack } from '@chakra-ui/react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.gif';

const AboutHero = () => {
  return (
    <Box padding="6" bg="white">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-between"
        position="relative"
      >
        
        <Box
          flex="1"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={{ base: '4', lg: '0' }} 
        >
         
          <Image
            src={about1}
            width={{ base: '100%', lg: '62%' }}
            alt="Girl Eating Food"
            height="auto"
            objectFit="cover"
            zIndex={1}
            mb={{ base: '4', lg: '0' }} 
          />

          
          <Box
            position="absolute"
            bottom="-10"
            right="0"
            width={{ base: '70%', md: '60%', lg: '50%' }}
            zIndex={2}
          >
            <Image
              src={about2}
              alt="Food Image"
              width="100%"
              height="auto"
              objectFit="cover"
            />
          </Box>
        </Box>

        
        <Box
          flex="1"
          mt={{ base: '4', lg: '0' }} 
          ml={{ lg: '4' }}
        >
          <VStack spacing={4} align="start">
            <Text color="gray.800" fontSize="lg">
              What is the first thing you do when you see delicious food? Do you eat it? No, you first take in the aroma, immerse in the beauty of the food, and lastly you savor its divine taste.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Jijai brings you the richness of spices and the aroma that will define the food in your kitchen.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Herbs and spices add flavor to dishes, increasing their ambiguity while also complementing or playing counterpoint to other flavors already present in the food.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Jijai has all the fresh spices you'll need for a well-stocked kitchen. Our natural and organic spices, spice mixes, and aromatic herbs are ideal for home and professional cooking. With their freshness and wholesomeness, our spices will elevate, enliven, and completely revitalize your cooking.
            </Text>

            <Text color="gray.800" fontSize="lg">
              We present to you 30 types of spices that can spice up your kitchen with Jijai. We bring Chutneys, Blended Spices, Instant Mixes, Powders, Pickles, Dry Fruits, and more to your table.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Are you looking for wholesale spices? If you've found your way here, chances are you own a business and are looking for high-quality spices for it. We understand that selecting a supplier is a personal decision that necessitates extensive planning and time.
            </Text>

            <Text color="gray.800" fontSize="lg">
              We have quality products and professional experience with businesses that you seek. Jijai can cater to your needs. We find our roots in the spices we make with extreme pride and wholesomeness. We provide to Wholesalers, Canteens, Hotels, and Local Marts across India.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Onion Garlic Chutney, Mutton Masala, Chicken Masala, Chicken 65 Masala, Tambada Pandhra Rassa Pack, Kitchen King Masala, and Malvani Masala are among our best-selling spices.
            </Text>

            <Text color="gray.800" fontSize="lg">
              Spices enhance the texture and flavor of food. Jijai envisions providing a simple and hassle-free way of cooking for everyone across the nation.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutHero;
