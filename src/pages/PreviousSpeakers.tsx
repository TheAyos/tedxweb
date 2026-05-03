import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Text, Flex, Link, Image, Card, VStack, Span } from "@chakra-ui/react";
import { SPEAKERS_OLD } from "@/Data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { HashLink as RouteLink } from "react-router-hash-link";

const PreviousSpeakers: React.FC = () => {
    return (
        <>
            <NavBar />
            <Box id="top" />

            <Box as="section" bg="black" pt={16}>
                <VStack maxW="container.xl" gap={9} mx="auto" px={{ base: 8, md: "10vw" }}>
                    <Text as="h1" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="var(--tedx-red)" textAlign="center">
                        Speakers from previous editions
                    </Text>
                    <Text color="white" fontSize="lg" textAlign="justify" maxW="800px">
                        We are proud to look back on the incredible individuals who took the stage at TEDxÉcolePolytechnique. Their courage to <Span color="var(--tedx-red)">share bold ideas</Span> and <Span color="var(--tedx-red)">inspire change</Span> made each edition an unforgettable experience.
                    </Text>
                </VStack>
            </Box>

            <VStack
            maxW="container.xl"
            mx="auto"
            px={{ base: 8, md: "10vw" }}
            align="stretch"
        >

            {SPEAKERS_OLD.map((edition, i) => (
                <Flex key={i} justify="space-around" flexWrap="wrap" py={10} gap={20} boxSizing={"border-box"}>
                    <Box width="full">
                        <Text as="h2" fontSize="4xl" fontWeight="medium" color="white">
                            <Span color="var(--tedx-red)">{edition.year}</Span>
                        </Text>
                    </Box>
                    {edition.speakers.map((s, i) => (
                        <Card.Root
                            key={i}
                            maxW={{ base: "100%", md: "430px" }}
                            width={{ base: "100%", md: "auto" }}
                            overflow="hidden"
                            boxShadow="md"
                            transition="all 0.3s"
                            position="relative"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                            }}
                            _hover={{
                                transform: 'scale(1.05)',
                                '&::before': {
                                    opacity: 1,
                                }
                            }}
                            // fancy hover blob
                            _before={{
                                content: '""',
                                position: 'absolute',
                                top: 'var(--mouse-y, 50%)',
                                left: 'var(--mouse-x, 50%)',
                                width: '150px',
                                height: '150px',
                                background: 'rgba(64, 169, 255, 0.2)',
                                borderRadius: '50%',
                                filter: 'blur(40px)',
                                transform: 'translate(-50%, -50%)',
                                opacity: 0,
                                transition: 'opacity 0.3s',
                                zIndex: 0
                            }}
                        >
                            <Box position="relative" zIndex={1}>
                                {/* <Image src={s.image} height={60} width="100%" objectFit="contain" objectPosition="top" /> */}
                                <Box position="relative" zIndex={1}
                                    overflowY={"clip"}>
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        right={0}
                                        height="60"
                                        width="100%"
                                        backgroundImage={`url(${s.image})`}
                                        backgroundPosition="50%"
                                        backgroundSize="cover"
                                        backgroundOrigin={"border-box"}
                                        backgroundClip={"padding-box"}
                                        filter="blur(20px) opacity(0.7)"
                                        transform="scale(1.1)"
                                    />
                                    <Image
                                        src={s.image}
                                        height={60}
                                        width="100%"
                                        objectFit="contain"
                                        objectPosition="top"
                                        position="relative"
                                        zIndex={2}
                                    />
                                </Box>
                                <Card.Body gap={3}>
                                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                        {s.name}
                                    </Text>
                                    <Card.Title fontWeight="medium">{s.speech_title}</Card.Title>
                                    <Card.Description textAlign={"justify"}>{s.speech_description}</Card.Description>
                                    
                                </Card.Body>
                                {s.speech_link && (
                                    <Card.Footer gap="2">
                                        <Link fontSize="sm" fontWeight="medium" bg="red" px={4} py={2} href={s.speech_link} target="_blank" borderRadius="md">
                                            Tell me more
                                            <FaExternalLinkAlt />
                                        </Link>
                                    </Card.Footer>
                                )}
                            </Box>
                        </Card.Root>
                    ))}
                </Flex >
            ))}
            </VStack>
            
            <VStack align="center" mt="12" mb="28">
            <RouteLink to="/#speakers"
                        className="group inline-block border border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                    <Box maxW="400px"
                        my={1}
                        mx="auto">
                        <div className="flex items-center p-2 px-6">
                        <span className="font-mono text-lg">Back to this year speakers</span>
                        <span className="font-mono text-lg transform group-hover:translate-x-1 transition-transform duration-300 pl-2">
                            →
                        </span>
                        </div>
                    </Box>
            </RouteLink>
            </VStack>

        
            <Footer />
        </>
    );
};

export default PreviousSpeakers;
