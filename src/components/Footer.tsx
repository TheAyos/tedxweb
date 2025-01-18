import React from "react";
import { Box, Text, Link, Grid, VStack, HStack, Heading, Flex } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <Box as="footer" py={4} bg="gray.900" color="white">
            <VStack align="center">
                <Heading as="h3">Follow Us</Heading>
                <HStack gap={6} py={4} px={8} _hover={{ color: "var(--tedx-red)" }} style={{ transition: "color 0.1s" }}>
                    <Link href="https://www.instagram.com/tedx.ecolepolytechnique/" target="_blank">
                        <FaInstagram size="24px" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts/" target="_blank">
                        <FaLinkedin size="24px" />
                    </Link>
                </HStack>

                <HStack align={"center"} justify={"center"} mt={8}>
                    <Text fontSize="xs" mt={8} textAlign="center">
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
