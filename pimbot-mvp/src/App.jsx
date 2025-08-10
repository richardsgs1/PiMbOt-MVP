import { Link, Routes, Route } from 'react-router-dom'
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react'
import Home from './pages/Home'
import Onboarding from './pages/Onboarding'
import Chat from './pages/Chat'

export default function App() {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex bg="blue.600" color="white" p={4} align="center">
        <Heading size="md">PiMbOt</Heading>
        <Spacer />
        <Link to="/"><Button colorScheme="blue" variant="ghost">Home</Button></Link>
        <Link to="/onboarding"><Button colorScheme="blue" variant="ghost">Onboarding</Button></Link>
        <Link to="/chat"><Button colorScheme="blue" variant="ghost">Chat</Button></Link>
      </Flex>

      {/* Page Routes */}
      <Box p={6}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Box>
    </Box>
  )
}
