import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, author, date: new Date().toLocaleDateString() };
    addPost(newPost);
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h2" size="xl">Add New Post</Heading>
        <Box as="form" w="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="content" isRequired>
              <FormLabel>Content</FormLabel>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <FormControl id="author" isRequired>
              <FormLabel>Author</FormLabel>
              <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" w="full">Add Post</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default AddPost;