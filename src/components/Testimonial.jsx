import React from "react";
import { Box, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import logo from '../assets/download.png';

const testimonials = [
  {
    id: 1,
    name: "Mariya Anderson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mollis metus non sapien facilisis, sed pharetra elit placerat.",
    image: logo,
  },
  {
    id: 2,
    name: "John Doe",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    image: logo,
  },
  {
    id: 3,
    name: "Jane Smith",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: logo,
  },
];

const Testimonial = () => {
  return (
    <Box py={12} bg="#f9f9f9">
      <Box textAlign="center" mb={10}>
        
        <Flex justify="center" align="center" mb={2}>
          <Box
            position="relative"
            width="110px"
            height="2px"
            bg="#FEA02F"
            display="inline-block"
            mb={'20px'}
          >
            <Box
              position="absolute"
              content=""
              height="8px"
              width="8px"
              bg="#FEA02F"
              transform="rotate(45deg)"
              top="-3px"
              right="0"
            />
          </Box>
        </Flex>
        <Heading size="lg" color="gray.800"  mb={'20px'} fontWeight={'bold'} fontStyle={'italic'} fontSize={'58px'}>
           Our Customers Say 
        </Heading>
        <Flex justify="center" align="center" mt={2}>
          <Box
            position="relative"
            width="110px"
            height="2px"
            bg="#FEA02F"
            display="inline-block"
          >
            <Box
              position="absolute"
              content=""
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

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              alignItems="center"
              gap={4}
            >
              <VStack
                bg="white"
                p={8}
                gap={'50px'}
                borderRadius="lg"
                boxShadow="lg"
                align="start"
                height="350px"
                marginLeft={{ base: 0, lg: "100px" }} 
              >
                <Flex gap={0}>
                  <svg
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.6986 39.793C52.2064 39.1016 56.7767 34.8711 57.89 29.3985C58.1829 27.9571 58.2064 25.625 57.9486 24.2539C57.4798 21.7696 56.2962 19.4843 54.5618 17.6679C52.8157 15.8633 51.0697 14.8085 48.6322 14.1055L47.6947 13.8359L48.5618 12.0781C49.7806 9.62895 51.304 7.35555 53.1439 5.23435C53.8939 4.36715 54.14 3.80474 54.14 2.93755C54.14 1.54295 53.2962 0.476547 51.9486 0.183547C51.1868 0.00794922 50.6126 0.124946 48.6673 0.839946C40.2064 3.98054 34.558 10.4023 32.5306 19.1913C31.8978 21.9688 31.6048 26.2344 31.9096 28.2618C32.3666 31.2032 33.6088 33.7461 35.5892 35.8203C36.808 37.1094 37.7806 37.8243 39.3158 38.5743C41.6947 39.7344 44.0267 40.1211 46.6986 39.793Z"
                      fill="#FEA02F"
                    />
                  </svg>
                  <svg
                    width="60"
                    height="40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.6986 39.793C52.2064 39.1016 56.7767 34.8711 57.89 29.3985C58.1829 27.9571 58.2064 25.625 57.9486 24.2539C57.4798 21.7696 56.2962 19.4843 54.5618 17.6679C52.8157 15.8633 51.0697 14.8085 48.6322 14.1055L47.6947 13.8359L48.5618 12.0781C49.7806 9.62895 51.304 7.35555 53.1439 5.23435C53.8939 4.36715 54.14 3.80474 54.14 2.93755C54.14 1.54295 53.2962 0.476547 51.9486 0.183547C51.1868 0.00794922 50.6126 0.124946 48.6673 0.839946C40.2064 3.98054 34.558 10.4023 32.5306 19.1913C31.8978 21.9688 31.6048 26.2344 31.9096 28.2618C32.3666 31.2032 33.6088 33.7461 35.5892 35.8203C36.808 37.1094 37.7806 37.8243 39.3158 38.5743C41.6947 39.7344 44.0267 40.1211 46.6986 39.793Z"
                      fill="#FEA02F"
                    />
                  </svg>
                </Flex>
                <Heading size="md" color="gray.700">
                  {testimonial.name}
                </Heading>
                <Text color="gray.600">{testimonial.description}</Text>
              </VStack>
              <Flex justify="center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  borderRadius="full"
                  boxSize="200px"
                  objectFit="cover"
                  shadow="lg"
                />
              </Flex>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>

     
      
    </Box>
  );
};

export default Testimonial;
