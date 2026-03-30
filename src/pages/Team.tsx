import React, { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Text, Image, Link, Flex, VStack, Grid, Span, IconButton } from "@chakra-ui/react";
import { BOARD_IMAGES, SPONSORS } from "@/Data";
import { HashLink as RouteLink } from "react-router-hash-link";
            

const Team: React.FC = () => {

    const [current, setCurrent] = useState(0);
                
    const prevSlide = () => {
                setCurrent((prev) => (prev === 0 ? BOARD_IMAGES.length - 1 : prev - 1));
              };
            
    const nextSlide = () => {
                setCurrent((prev) => (prev === BOARD_IMAGES.length - 1 ? 0 : prev + 1));
              };
            
    if (!BOARD_IMAGES.length) return null;

    return (
        <>
            <NavBar />
            <Box id="top" />


            <Box as="section" bg="black" py={16}>
                <VStack maxW="container.xl" gap={9} px={{ base: 8, md: "10vw" }} align="center">
                    <Text as="h1" fontSize="5xl" fontWeight="bold" color="var(--tedx-red)">
                        Our Team
                    </Text>

                    <Text color="white" fontSize="lg" textAlign="justify" maxW="70%">
                            We are an organization consisting of <Span color="var(--tedx-red)">19 students of the Bachelor of Science program at École Polytechnique. </Span> 
                            Putting together our experience of living all around the world — from the US, through France, Slovakia, the Ivory Coast, India, to Russia and Albania — we aim to create an event that addresses global issues from our local perspective of being students at the IP Paris campus. <br /> <br />
                            
                            Now in its fourth edition, TEDxÉcolePolytechnique builds on the experience of three previous successful events, ensuring a professional, well-coordinated, and impactful conference. Our community is full of ideas worth spreading, and this year we chose them to be centered around the theme Keeping the Human Alive.
                    </Text>

                </VStack>
            </Box>
        
                <Box as="section" bg="black" py={16}>
                  <VStack
                    maxW="container.xl"
                    mx="auto"
                    px={{ base: 6, md: "10vw" }}
                    align="stretch"
                    gap={8}
                  >
            
                    <Box position="relative" w="100%" overflow="hidden" borderRadius="md">
                      <Flex
                        transform={`translateX(-${(current * 100) / BOARD_IMAGES.length}%)`}
                        transition="transform 0.6s ease-in-out"
                        w={`${BOARD_IMAGES.length * 100}%`}
                        >
                        {BOARD_IMAGES.map((img, index) => (
                            <Box
                        key={index}
                        w={`${100 / BOARD_IMAGES.length}%`}
                        flexShrink={0}
                        // onClick={() => setSelectedImage(img)}
                        // cursor="zoom-in"
                        >
                        <Box
                        w="100%"
                        h={{ base: "300px", md: "500px" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="black"
                        >
                        <Image
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            maxH="100%"
                            maxW="100%"
                            objectFit="contain"
                        />
                        </Box>
                        </Box>
                        ))}
                        </Flex>
            
                    <IconButton
                    aria-label="Previous slide"
                    position="absolute"
                    top="50%"
                    left={4}
                    transform="translateY(-50%)"
                    onClick={prevSlide}
                    bg="blackAlpha.700"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    borderRadius="full"
                    >
                    <span style={{ fontSize: "28px" }}>‹</span>
                    </IconButton>
            
                    <IconButton
                    aria-label="Next slide"
                    position="absolute"
                    top="50%"
                    right={4}
                    transform="translateY(-50%)"
                    onClick={nextSlide}
                    bg="blackAlpha.700"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                    borderRadius="full"
                    >
                    <span style={{ fontSize: "28px" }}>›</span>
                    </IconButton>
            
                      <Flex
                        position="absolute"
                        bottom={4}
                        left="50%"
                        transform="translateX(-50%)"
                        gap={2}
                      >
                        {BOARD_IMAGES.map((_, index) => (
                          <Box
                            key={index}
                            w="10px"
                            h="10px"
                            borderRadius="full"
                            bg={index === current ? "var(--tedx-red)" : "whiteAlpha.700"}
                            cursor="pointer"
                            onClick={() => setCurrent(index)}
                          />
                        ))}
                      </Flex>
                    </Box>
                  </VStack>
                </Box>
            


            <Box as="section" bg="black" py={16}>
                <VStack maxW="container.xl" mx="auto" gap={12} px={{ base: 8, md: "10vw" }}>
                        
                        <RouteLink
                        to="/#theteam"
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

export default Team;
