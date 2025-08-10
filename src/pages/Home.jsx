import { Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box textAlign="center">
      <Heading>Welcome to PiMbOt</Heading>
      <Text mt={4}>
        Your AI-powered Project Management Assistant.
        Navigate to Onboarding to get started or Chat to ask for help.
      </Text>
    </Box>
  )
}