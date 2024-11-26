import {
    Box,
    Container,
    Grid,
    GridItem,
    Text,
    Link,
    Image,
    VStack,
    HStack,
    IconButton,
  } from "@chakra-ui/react";
  import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
  import logo from "../assets/JIJAI LOGO_page-0001.png";
  import bgFooter from "../assets/Footer.jpg";
  
  const Footer = () => {
    return (
      <Box
        as="footer"
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(${bgFooter})`}
        bgSize="cover"
        bgPosition="center"
        
        py={10}
        color="white"
        fontFamily="Arial, sans-serif"
      >
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
          >
           
            <GridItem>
              <VStack align="flex-start">
                <Image src={logo} alt="Logo" boxSize="80%" />
              </VStack>
            </GridItem>
  
           
            <GridItem>
              <Text
                fontSize="60px"
                fontStyle="italic"
                mb={4}
                color="white"
                lineHeight="75px"
              >
                Links
              </Text>
              <VStack align="flex-start" color={'#FEA02F'} spacing={2}>
                <Link href="about" fontSize="22px">
                  About Us
                </Link>
                <Link href="product" fontSize="22px">
                  Products
                </Link>
                <Link href="contact" fontSize="22px">
                  Contact Us
                </Link>
              </VStack>
            </GridItem>
  
           
            <GridItem>
              <Text
                fontSize="60px"
                fontStyle="italic"
                mb={4}
                color="white"
                lineHeight="75px"
              >
                Address
              </Text>
              <VStack align="flex-start" spacing={2}>
                <Text>
                  Karve Naka, Goleshwar Road,<br />
                  Near Sidharth Mangal Karyalay,<br />
                  Karad, 415110.
                </Text>
                <Text>
                  <Link href="mailto:contact@lucha.com" color="white">
                    contact@lucha.com
                  </Link>
                </Text>
              </VStack>
            </GridItem>
          </Grid>
  
        
          <HStack
            spacing={8}
            justify="space-between"
            mt={10}
            align="center"
            textAlign="center"
          >
            <Text fontSize="lg">
              Website Design, Development, and Maintenance by{" "}
              <Link href="https://www.swapratechnologies.com/" color="#f16121">
                SwaPra Technologies
              </Link>
            </Text>
  
            <HStack spacing={4}>
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaWhatsapp, href: "#" },
              ].map(({ icon, href }, index) => (
                <Link key={index} href={href} isExternal>
                  <IconButton
                    icon={icon({})}
                    variant="unstyled"
                    isRound
                    aria-label="social-icon"
                    h="36px"
                    w="36px"
                    display={'flex'}
                    justifyContent={'center'}
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _hover={{
                      color: "#FEA02F",
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                    }}
                  />
                </Link>
              ))}
            </HStack>
          </HStack>
        </Container>
      </Box>
    );
  };
  
  export default Footer;
  