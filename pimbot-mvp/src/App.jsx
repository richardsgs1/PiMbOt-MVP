import { Box, Heading, Button, Text, VStack } from '@chakra-ui/react'

function App() {
  return (
    <Box p={8} textAlign="center">
      <VStack spacing={4}>
        <Heading>Welcome to PiMbOt</Heading>
        <Text>Your project management assistant and guide</Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  )
}

export default App
