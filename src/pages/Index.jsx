import { Box, Container, Flex, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Box as="header" bg="brand.700" color="white" py={4}>
          <Container maxW="container.xl">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">
                My Personal Blog
              </Heading>
              <Flex as="nav">
                <Link as={RouterLink} to="/" px={2} color="white">
                  Home
                </Link>
                <Link as={RouterLink} to="/about" px={2} color="white">
                  About
                </Link>
                <Link as={RouterLink} to="/contact" px={2} color="white">
                  Contact
                </Link>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Box as="main" flex="1" py={8}>
          <Container maxW="container.md">
            <VStack spacing={8}>
              <Heading as="h2" size="xl">
                Welcome to My Blog
              </Heading>
              <Text fontSize="lg">
                This is a placeholder for blog posts. Stay tuned for more content!
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="gray.800" color="white" py={4}>
          <Container maxW="container.xl">
            <Text textAlign="center">
              © {new Date().getFullYear()} My Personal Blog. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;