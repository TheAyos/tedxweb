import React from "react";
import { Box, Text, Link, VStack, HStack, Heading } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box as="footer" pt={12} pb={4} bg="gray.900" color="white" mt={24}>
            <VStack align="center">
                <Heading as="h3">Follow Us</Heading>
                <HStack
                    gap={6}
                    py={4}
                    style={{ transition: "all 0.3s ease-in-out" }}
                >
                    <Link
                        href="https://www.instagram.com/tedx.ecolepolytechnique/"
                        target="_blank"
                        display="flex"
                    >
                        <Box 
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2) rotate(8deg)", color: "var(--tedx-red)" }}
                        >
                        <FaInstagram size="28px" />
                        </Box>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts/"
                        target="_blank"
                        display="flex"
                    >
                        <Box 
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2) rotate(8deg)", color: "var(--tedx-red)" }}
                        >
                        <FaLinkedin size="28px" />
                        </Box>
                    </Link>
                </HStack>

            <VStack align="stretch" gap={4} mx="auto" px={{ base: 4, md: 8 }} mt={5} mb={5}>

                <HStack
                fontSize="xs"
                wrap="wrap"
                justifyContent="center"
                gap={3}
                align="center">
                <Text>Follow TED on</Text>

                <Link
                    href="https://facebook.com/TED"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--tedx-red)">
                    Facebook
                </Link>

                <Link
                    href="https://instagram.com/ted"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--tedx-red)">
                    Instagram
                </Link>

                <Link
                    href="https://linkedin.com/company/ted-conferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--tedx-red)">
                    LinkedIn
                </Link>

                <Link
                    href="https://tiktok.com/@tedtoks"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--tedx-red)">
                    TikTok
                </Link>

                <Link
                    href="http://twitter.com/TEDTalks"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="var(--tedx-red)">
                    X
                </Link>

                </HStack>

            </VStack>


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
