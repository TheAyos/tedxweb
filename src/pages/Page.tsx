import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { open, onToggle } = useDisclosure();

  return (
    <Box bg="white" color="black" px={4} borderBottom="2px solid red">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={open ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onToggle}
          color="red"
        />
        <Text fontSize="2xl" fontWeight="bold" color="red">
          TEDx
        </Text>
        <Flex alignItems="center">
          <Stack direction="row" gap={7} display={{ base: "none", md: "flex" }}>
            <Link href="#" fontSize="sm" fontWeight={400} color="black">
              Sign In
            </Link>
            <Button
              as="a"
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="red"
              _hover={{ bg: "darkred" }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>

      {open ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" gap={4}>
            <Link href="#" color="black">
              Sign In
            </Link>
            <Link href="#" color="black">
              Sign Up
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
