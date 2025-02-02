import React from "react";
import { Box, Text, Link, VStack, HStack, Heading } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box as="footer" py={4} bg="gray.900" color="white">
            <VStack align="center">
                <Heading as="h3">Follow Us</Heading>
                <HStack
                    gap={6}
                    py={4}
                    _hover={{ "& > *": { transform: "scale(1.2)", color: "var(--tedx-red)" } }}
                    style={{ transition: "all 0.3s ease-in-out" }}
                >
                    <Link
                        href="https://www.instagram.com/tedx.ecolepolytechnique/"
                        target="_blank"
                        _hover={{ color: "white", transform: "rotate(8deg)" }}
                        transition="all 0.3s ease-in-out"
                        display="flex"
                    >
                        <FaInstagram size="28px" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts/"
                        target="_blank"
                        _hover={{ color: "white", transform: "rotate(-8deg)" }}
                        transition="all 0.3s ease-in-out"
                        display="flex"
                    >
                        <FaLinkedin size="28px" />
                    </Link>
                </HStack>

                <HStack align={"center"} justify={"center"}>
                    <Text fontSize="xs" textAlign="center">
                        This independent TEDx event is operated under license from TED. <br /> &copy; TEDxÉcolePolytechnique,{" "}
                        {2024 === new Date().getFullYear() ? 2024 : `2024 - ${new Date().getFullYear()}`} <br />
                        {/* TODO:website made with ❤️ by{" "}
                        <Link href="https://ayoubagouzoul.com" target="_blank" color="teal.300">
                        ayoub
                        </Link> */}
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
};

export default Footer;
