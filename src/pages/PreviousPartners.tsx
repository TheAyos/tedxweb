import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Text, Link as ChakraLink, VStack, Grid, Span } from "@chakra-ui/react";
import { SPONSORS_OLD } from "@/Data";
import { HashLink as RouteLink } from "react-router-hash-link";

const PreviousPartners: React.FC = () => {
    return (
        <>
            <NavBar />
            <Box id="top" />

            <Box as="section" bg="black" py={16}>
                <VStack maxW="container.xl" gap={9} mx="auto" px={{ base: 8, md: "10vw" }}>
                    <Text as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="var(--tedx-red)" textAlign="center">
                        Our Partners
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="justify" maxW="800px">
                        We are grateful to our partners who make TEDxÉcolePolytechnique possible through their generous support. Their commitment to <Span color="var(--tedx-red)">sharing ideas</Span> and <Span color="var(--tedx-red)">fostering innovation</Span> helps us create extraordinary experiences for our community.
                    </Text>
                </VStack>
            </Box>

            <Box as="section" bg="black" pb={16} pt={8}>
                <VStack maxW="85%" mx="auto" gap={20} px={{ base: 8, md: "10vw" }}>

                    {SPONSORS_OLD.map((edition, i) => (
                        <>
                        <Box width="full" key={i}>
                            <Text as="h2" fontSize="4xl" fontWeight="medium" mb={8} color="white">
                                <Span color="var(--tedx-red)">{edition.year}</Span> Edition Partners
                            </Text>
                            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
                                {edition.sponsors.filter(s => s != null).map((Path, i) => (
                                    <ChakraLink
                                        key={i}
                                        href={Path.url}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        _hover={{ textDecoration: 'none' }}
                                    >
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
                                            src={Path.image}
                                            alt={`Partner ${Path.image}`}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </Box>
                                    </ChakraLink>
                                ))}
                            </Grid>
                        </Box>
                        </>
                    ))}
                        
                <RouteLink
                        to="/#partners"
                        className="group inline-block border border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                         <Box maxW="400px"
                            my={1}
                            mx={5}>
                        <div className="flex items-center p-2 px-6">
                        <span className="font-mono text-lg">Back to the main page</span>
                        <span className="font-mono text-lg transform group-hover:translate-x-1 transition-transform duration-300 pl-2">
                            →
                        </span>
                        </div>
                        </Box>
                </RouteLink>
                </VStack>
                
            </Box>
            
            <Footer />
        </>
    );
};

export default PreviousPartners;
