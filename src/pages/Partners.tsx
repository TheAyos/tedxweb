import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Text, VStack, Grid, Span } from "@chakra-ui/react";
import { SPONSORS } from "@/Data";

const Partners: React.FC = () => {
    return (
        <>
            <NavBar />

            <a id="#top"></a>

            <Box as="section" bg="black" py={16}>
                <VStack maxW="container.xl" mx="auto" px={{ base: 8, md: "10vw" }}>
                    <Text as="h1" fontSize="5xl" fontWeight="bold" color="var(--tedx-red)" textAlign="center">
                        Our Partners
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="justify" maxW="800px">
                        We are grateful to our partners who make TEDxÉcolePolytechnique possible through their generous support. Their commitment to <Span color="var(--tedx-red)">sharing ideas</Span> and <Span color="var(--tedx-red)">fostering innovation</Span> helps us create extraordinary experiences for our community.
                    </Text>
                </VStack>
            </Box>

            <Box as="section" bg="black" py={16}>
                <VStack maxW="container.xl" mx="auto" gap={12} px={{ base: 8, md: "10vw" }}>
                    {SPONSORS.map((e) => (


                        <Box width="full">
                            <Text as="h2" fontSize="4xl" fontWeight="bold" mb={8} color="white">
                                <Span color="var(--tedx-red)">{e.year}</Span> Edition Partners
                            </Text>
                            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
                                {e.sponsors.map((imgPath, i) => (
                                    <Box
                                        key={i}
                                        bg="white"
                                        p={4}
                                        borderRadius="md"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        transition="transform 0.2s"
                                        _hover={{ transform: 'scale(1.05)' }}
                                    >
                                        <img
                                            src={imgPath}
                                            alt={`Partner ${imgPath}`}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Grid>
                        </Box>))}
                </VStack>
            </Box>
            <Footer />
        </>
    );
};

export default Partners;
