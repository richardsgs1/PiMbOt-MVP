import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'

export default function App() {
  return (
    <Box bg="gray.50" minH="100vh" p={8}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="xl" color="blue.500">
          Welcome to PiMbOt
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          Your AI-powered project management guide.  
          Whether you're a novice or a seasoned pro, PiMbOt is here to  
          help you plan, execute, and succeed.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  )
}
