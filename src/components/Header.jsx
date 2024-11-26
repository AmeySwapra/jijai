import React from 'react';
import { Box, Flex, Button, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, useBreakpointValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation(); 

  const getLinkColor = (to) => {
    
    return location.pathname === to ? 'yellow.400' : 'white';
  };

  const handleLinkClick = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <Box bg="transparent" position="sticky" top="0" zIndex="10" p={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
       
        {!isMobile && (
          <Flex flex="1" justify="center" gap={8}>
            <Button 
              variant="link" 
              color={getLinkColor('/')} 
              as={Link} 
              to="/" 
              fontSize="lg" 
              _hover={{ color: 'yellow.400' }}
            >
              Home
            </Button>
            <Button 
              variant="link" 
              color={getLinkColor('/about')} 
              as={Link} 
              to="/about" 
              fontSize="lg" 
              _hover={{ color: 'yellow.400' }}
            >
              About
            </Button>
            <Button 
              variant="link" 
              color={getLinkColor('/product')} 
              as={Link} 
              to="/product" 
              fontSize="lg" 
              _hover={{ color: 'yellow.400' }}
            >
              Product
            </Button>
            <Button 
              variant="link" 
              color={getLinkColor('/contact')} 
              as={Link} 
              to="/contact" 
              fontSize="lg" 
              _hover={{ color: 'yellow.400' }}
            >
              Contact
            </Button>
          </Flex>
        )}

      
        {isMobile && (
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            onClick={onOpen}
            aria-label="Open menu"
          />
        )}
      </Flex>

     
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="black"> 
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white">Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="flex-start">
                <Button 
                  variant="link" 
                  color={getLinkColor('/')} 
                  as={Link} 
                  to="/" 
                  fontSize="lg" 
                  _hover={{ color: 'yellow.400' }}
                  onClick={handleLinkClick} 
                >
                  Home
                </Button>
                <Button 
                  variant="link" 
                  color={getLinkColor('/about')} 
                  as={Link} 
                  to="/about" 
                  fontSize="lg" 
                  _hover={{ color: 'yellow.400' }}
                  onClick={handleLinkClick} 
                >
                  About
                </Button>
                <Button 
                  variant="link" 
                  color={getLinkColor('/product')} 
                  as={Link} 
                  to="/product" 
                  fontSize="lg" 
                  _hover={{ color: 'yellow.400' }}
                  onClick={handleLinkClick} 
                >
                  Product
                </Button>
                <Button 
                  variant="link" 
                  color={getLinkColor('/contact')} 
                  as={Link} 
                  to="/contact" 
                  fontSize="lg" 
                  _hover={{ color: 'yellow.400' }}
                  onClick={handleLinkClick} 
                >
                  Contact
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
