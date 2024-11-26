import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  Input,
  Textarea,
  Button,
  Icon,
  VStack,
  Divider,
  List,
  ListItem,
} from '@chakra-ui/react';
import { RiUserLine, RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

const ContactUs = () => {
  return (
    <Box py={12} bg="white">
      <Flex
        direction={['column', 'column', 'row']}
        maxW="1200px"
        mx="auto"
        gap={6} 
        px={4}
        wrap="wrap"
      >
        
        <Box
          bg="white"
          shadow="md"
          borderRadius="md"
          p={8}
          flex="1"
          minW="300px" 
        >
          <Flex align="center" mb={4}>
            <Heading size="lg" fontStyle="italic" fontWeight="bold">
              Send Us Message
            </Heading>
            <Box
              position="relative"
              width={{ base: '70px', md: '90px', lg: '110px' }}
              height="2px"
              bg="#FEA02F"
              display="inline-block"
              ml={2}
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
          <Text color="gray.600" fontWeight="bold" mb={6}>
            Your email address will not be published*
          </Text>
          <form>
            <VStack spacing={4} align="start">
              {['Username', 'Phone', 'Email'].map((placeholder, idx) => (
                <FormControl key={idx}>
                  <Flex
                    align="center"
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="gray.100"
                    px={4}
                  >
                    <Icon
                      as={idx === 0 ? RiUserLine : idx === 1 ? RiPhoneLine : RiMailLine}
                      boxSize={5}
                      color="gray.500"
                      mr={2}
                    />
                    <Divider orientation="vertical" mx={2} />
                    <Input
                      placeholder={placeholder}
                      variant="unstyled"
                      flex="1"
                      height="50px"
                    />
                  </Flex>
                </FormControl>
              ))}
              <FormControl>
                <Textarea
                  placeholder="Special Message Write Here"
                  bg="gray.100"
                  rows={6}
                  borderRadius="md"
                />
              </FormControl>
              <Button
                colorScheme="yellow"
                width="150px"
                height="60px"
                borderRadius="30px"
                bg="#FEA02F"
                color="black"
                _hover={{
                  bg: 'black',
                  color: 'white',
                }}
                alignSelf="flex-start"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>

        
        <Box
          flex="1"
          py={6}
          minW="300px" 
        >
          <Heading size="lg" fontStyle="italic" fontWeight="bold" mb={6}>
            To add some spice to life, please get in touch with us!
          </Heading>

          <Box mb={10}>
            <Flex align="center" mb={4}>
              <Heading size="lg" fontStyle="italic" fontWeight="bold">
                Opening Hours
              </Heading>
              <Box
                position="relative"
                width={{ base: '70px', md: '90px', lg: '110px' }}
                height="2px"
                bg="#FEA02F"
                display="inline-block"
                ml={2}
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
            <List spacing={6}>
              <ListItem>
                <Flex justify="space-between">
                  <Text fontWeight="bold">Wednesday - Monday</Text>
                  <Text fontWeight="bold">9 AM - 11 PM</Text>
                </Flex>
                <Divider my={2} />
              </ListItem>
              <ListItem>
                <Flex justify="space-between">
                  <Text fontWeight="bold">Tuesday</Text>
                  <Text fontWeight="bold">Off</Text>
                </Flex>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Flex align="center" mb={4}>
              <Heading size="lg" fontStyle="italic" fontWeight="bold">
                Office Address
              </Heading>
              <Box
                position="relative"
                width={{ base: '70px', md: '90px', lg: '110px' }}
                height="2px"
                bg="#FEA02F"
                display="inline-block"
                ml={2}
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
            <Divider />
            <Text mt={4} fontWeight="bold">
              <Icon as={RiMapPinLine} mr={2} />
              Karve Naka, Goleshwar Road, Near Sidharth Mangal Karyalay, Karad,
              415110.
            </Text>
            <Text mt={2} fontWeight="bold">
              <Icon as={RiPhoneLine} mr={2} />
              +91 7028587090
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactUs;
