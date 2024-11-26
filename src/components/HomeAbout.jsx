import React from "react";
import { Box, Button, Heading, Text, VStack, Divider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import aboutImage from "../assets/homeabout.webp";

const HomeAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box
      as="section"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, lg: 16 }}
      minHeight="700px"
      backgroundColor="#FFBE18"
      zIndex={1}
      position="relative"
    >
      <Box
        flex={{ base: "none", lg: "1" }}
        mb={{ base: 8, lg: 0 }}
        textAlign="center"
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={aboutImage}
            alt="About Us Image"
            borderRadius="lg"
            boxSize={{ base: "90%", md: "80%", lg: "77%" }}
            objectFit="cover"
            mx="auto"
          />
        </motion.div>
      </Box>

      <Box
        ref={ref}
        flex="1"
        textAlign={{ base: "center", lg: "left" }}
        px={{ base: 4, lg: 8 }}
        bg="#f0f0f0"
        p={4}
      >
        <VStack align={{ base: "center", lg: "start" }} spacing={4} color="black">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="black"
            textAlign={{ base: "center", lg: "left" }}
            fontFamily="Poppins, sans-serif"
            fontStyle="italic"
          >
            About Us
          </Heading>

          <Divider borderColor="yellow.900" width="50%" mb={4} />

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" fontFamily="Poppins, sans-serif" color="black">
            What is the first thing you do when you see delicious food? Do you eat it? No, you first take in the aroma,
            immerse in the beauty of the food, and lastly you savor its divine taste.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" fontFamily="Poppins, sans-serif" color="black">
            Jijai brings you the richness of spices and the aroma that will define the food in your kitchen.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" fontFamily="Poppins, sans-serif" color="black">
            Spices add flavor to food without adding calories or fat. Herbs and spices add flavor to dishes, increasing
            their ambiguity while also complementing or playing counterpoint to other flavors already present in the
            food.
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.6" fontFamily="Poppins, sans-serif" color="black">
            Jijai has all the fresh spices you'll need for a well-stocked kitchen. Our natural and organic spices, spice
            mixes, and aromatic herbs are ideal for home and professional cooking.
          </Text>

          <Link to="/about">
            <Button
              colorScheme="yellow"
              size="lg"
              _hover={{ bg: "yellow.500" }}
              mt={6}
              borderRadius="full"
              paddingX={8}
            >
              About Us
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomeAbout;
