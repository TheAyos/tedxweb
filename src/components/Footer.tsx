import React from "react";
import {
  Box,
  Text,
  Link,
  Grid,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={8} bg="gray.800" color="white">
      <Box maxW="container.xl" mx="auto" px={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack align="start">
            <Heading as="h3" size="md" mb={4}>
              TEDx[name]
            </Heading>
            <Text color="gray.400">
              This independent TEDx event is operated under license from TED.
            </Text>
          </VStack>

          <VStack align="start">
            <Heading as="h3" size="md" mb={4}>
              Quick Links
            </Heading>
            <VStack align="start" gap={2}>
              <Link href="/about">About</Link>
              <Link href="/speakers">Speakers</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/sponsors">Sponsors</Link>
            </VStack>
          </VStack>

          <VStack align="start">
            <Heading as="h3" size="md" mb={4}>
              Follow Us
            </Heading>
            <HStack gap={4}>{/* Add social media icons/links here */}</HStack>
          </VStack>
        </Grid>

        <Text fontSize="sm" mt={8} textAlign="center">
          This independent TEDx event is operated under license from TED.
        </Text>

        <Text fontSize="xs" mt={8} textAlign="center">
          &copy; TEDxÉcolePolytechnique{" "}
          {2024 === new Date().getFullYear()
            ? 2024
            : `2024 - ${new Date().getFullYear()}`}{" "}
          <br />
          Website developed with ❤️ by{" "}
          <Link
            href="https://ayoubagouzoul.com"
            target="_blank"
            color="teal.300"
          >
            ayoub
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
