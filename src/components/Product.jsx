import React from "react";
import { Box, Heading, Grid, Image, Text, Flex } from "@chakra-ui/react";
import mirchi from "../assets/mirchi.jpg";
import cori from "../assets/cori.jpg";
import dhane from "../assets/dhane.jpg";
import haldi from "../assets/haldi.jpg";
import onion from "../assets/onion.jpg";
import sambhar from "../assets/sambhar.jpg";
import mutton from "../assets/mutton.jpg";
import garam from '../assets/garam.jpg';
import egg from '../assets/egg.jpg';
import mango from '../assets/mango.jpg';
import tambda from '../assets/tambda.jpg';
import white from '../assets/white.jpg';
import chicken65 from '../assets/65.jpg';
import fish from '../assets/fish.jpg';
import gravy from '../assets/gravy.jpg';

const productData = [
  { name: "Mirchi Powder", image: mirchi },
  { name: "Turmeric Powder", image: haldi },
  { name: "Coriander Powder", image: cori },
  { name: "Onion and Garlic Paste", image: onion },
  { name: "Sambhar Masala", image: sambhar },
  { name: "Chicken Masala", image: dhane },
  { name: "Mutton Masala", image: mutton },
  { name: "Garam Masala", image: garam},
  { name: "Egg Curry Masala", image: egg },
  { name: "Mango Pickle", image: mango },
  { name: "Tambda Rassa", image: tambda },
  { name: "Mutton Gravy Masala", image: gravy },
  { name: "White Gravy", image: white },
  { name: "Chicken 65", image: chicken65},
  { name: "Fish Gravy Masala", image: fish },
];

const Products = ({ displayAll = true }) => {
  // Control how many products to display
  const productsToShow = displayAll ? productData : productData.slice(0, 6);

  return (
    <Box bg="white" py={{ base: 6, md: 10, lg: 16 }} px={{ base: 4, md: 8, lg: 12 }}>
      <Box textAlign="center" mb={10}>
        <Flex justify="center" align="center" mb={2}>
          <Box
            position="relative"
            width={{ base: "70px", md: "90px", lg: "110px" }}
            height="2px"
            bg="#FEA02F"
            display="inline-block"
            mb="20px"
          >
            <Box
              position="absolute"
              height="8px"
              width="8px"
              bg="#FEA02F"
              transform="rotate(45deg)"
              top="-3px"
              right="0"
            />
          </Box>
        </Flex>
        <Heading
          size="lg"
          color="black.800"
          mb="20px"
          fontWeight="bold"
          fontStyle="italic"
          fontSize={{ base: "28px", md: "40px", lg: "58px" }}
        >
          Our Products
        </Heading>
        <Flex justify="center" align="center" mt={2}>
          <Box
            position="relative"
            width={{ base: "70px", md: "90px", lg: "110px" }}
            height="2px"
            bg="#FEA02F"
            display="inline-block"
          >
            <Box
              position="absolute"
              height="8px"
              width="8px"
              bg="#FEA02F"
              transform="rotate(45deg)"
              top="-3px"
              left="0"
            />
          </Box>
        </Flex>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        justifyItems="center"
      >
        {productsToShow.map((product, index) => (
          <Box key={index} textAlign="center">
            <Box
              height={{ base: index < 3 ? "300px" : "250px", md: index < 3 ? "400px" : "300px" }}
              width="100%"
              position="relative"
              overflow="hidden"
              borderRadius="30px"
            >
              <Image
                src={product.image}
                alt={product.name}
                height="100%"
                width="100%"
                objectFit="cover"
                transform="scale(1)"
                transition="transform 0.3s ease-out"
                _hover={{
                  transform: "scale(1) rotate(10deg)",
                }}
              />
            </Box>
            <Text
              mt={2}
              fontWeight="bold"
              fontStyle="italic"
              color="gray.700"
              fontSize={{ base: "18px", md: "22px", lg: "25px" }}
              transition="color 0.3s ease"
              _hover={{ color: "#FEA02F" }}
            >
              {product.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
