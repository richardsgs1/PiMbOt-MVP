import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Button, Heading } from "@chakra-ui/react";

// Simple placeholder pages
const HomePage = () => <Heading>Welcome to PiMbOt</Heading>;
const OnboardingPage = () => <Heading>Onboarding Assistant</Heading>;
const ChatPage = () => <Heading>Chat with PiMbOt</Heading>;

export default function App() {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" bg="blue.500" color="white" p={4} gap={4}>
        <Button as={Link} to="/" colorScheme="teal" variant="solid">
          Home
        </Button>
        <Button as={Link} to="/onboarding" colorScheme="teal" variant="solid">
          Onboarding
        </Button>
        <Button as={Link} to="/chat" colorScheme="teal" variant="solid">
          Chat
        </Button>
      </Flex>

      {/* Page Content */}
      <Box p={4}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
