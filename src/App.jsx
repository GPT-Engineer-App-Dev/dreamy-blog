import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";
import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";

function App() {
  const [posts, setPosts] = useState([]);

  const { colorMode, toggleColorMode } = useColorMode();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const newPosts = posts.filter((_, i) => i !== index);
    setPosts(newPosts);
  };

  return (
    <Router>
      <Box>
        <Flex justify="flex-end" p={4}>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
          </Button>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;