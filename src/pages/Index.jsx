import { Box, Container, Flex, Heading, Text, VStack, Link, useColorModeValue, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts, deletePost }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0} bg={bg} color={color}>
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
                <Link as={RouterLink} to="/add-post" px={2} color="white">
                  Add Post
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
              {posts.length === 0 ? (
                <Text fontSize="lg">This is a placeholder for blog posts. Stay tuned for more content!</Text>
              ) : (
                posts.map((post, index) => (
                  <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
                    <Heading as="h3" size="md">{post.title}</Heading>
                    <Text mt={2}>{post.content}</Text>
                    <Text mt={2} fontSize="sm" color="gray.500">By {post.author} on {post.date}</Text>
                    <Button mt={2} colorScheme="red" onClick={() => deletePost(index)}>Delete</Button>
                  </Box>
                ))
              )}
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