import { SPEAKERS } from "@/Data";
import { Card, Flex, HStack, Container, VStack, Link, Image, Text, Box, Span } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Speakers = () => {
    return (
        <>
            <Container maxW="container.xl" mt={20} mx="auto" px={{ base: 8, md: "10vw" }}>
            <HStack width={"full"} align="start">
                <Text as={"h2"} id="speakers" color="var(--tedx-red)" fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
                    Speakers
                </Text>
            </HStack>

            {SPEAKERS.map((edition, i) => (
                
                    <Card.Root
                            key={i}
                            width="100%"
                            overflow="hidden"
                            mx="auto"
                            mt={16}
                            px={{ base: 8, md: "10vw" }}
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
<<<<<<< HEAD
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
                                <Card.Body>
                                    <Card.Title fontWeight="medium">{s.speech_title}</Card.Title>
                                    <Card.Description textAlign={"justify"}>{s.speech_description}</Card.Description>
                                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                        {s.name}
                                    </Text>
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
=======
                        <Box position="relative" zIndex={1}>
                            <Card.Body gap={3} py={12} alignItems="center" textAlign="center">
                                <Text textStyle="2xl" fontWeight="bold" color="white" letterSpacing="tight">
                                    This Section is Coming Soon
                                </Text>
                                <Card.Description maxW="320px"  textAlign="center">
                                    Our lineup of inspiring speakers for the 2026 edition is currently being finalized. Stay tuned for the big reveal!
                                </Card.Description>
                            </Card.Body>
                        </Box>
                    </Card.Root>
                    
                // <Flex key={i} justify="space-around" flexWrap="wrap" py={10} gap={20} boxSizing={"border-box"}>
                //     <Box width="full">
                //         <Text as="h2" fontSize="4xl" fontWeight="bold" color="white">
                //             <Span color="var(--tedx-red)">{edition.year}</Span>
                //         </Text>
                //     </Box>
                //     {edition.speakers.map((s, i) => (
                //         <Card.Root
                //             key={i}
                //             maxW={{ base: "100%", md: "400px" }}
                //             width={{ base: "100%", md: "auto" }}
                //             overflow="hidden"
                //             boxShadow="md"
                //             transition="all 0.3s"
                //             position="relative"
                //             onMouseMove={(e) => {
                //                 const rect = e.currentTarget.getBoundingClientRect();
                //                 const x = e.clientX - rect.left;
                //                 const y = e.clientY - rect.top;
                //                 e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                //                 e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                //             }}
                //             _hover={{
                //                 transform: 'scale(1.05)',
                //                 '&::before': {
                //                     opacity: 1,
                //                 }
                //             }}
                //             // fancy hover blob
                //             _before={{
                //                 content: '""',
                //                 position: 'absolute',
                //                 top: 'var(--mouse-y, 50%)',
                //                 left: 'var(--mouse-x, 50%)',
                //                 width: '150px',
                //                 height: '150px',
                //                 background: 'rgba(64, 169, 255, 0.2)',
                //                 borderRadius: '50%',
                //                 filter: 'blur(40px)',
                //                 transform: 'translate(-50%, -50%)',
                //                 opacity: 0,
                //                 transition: 'opacity 0.3s',
                //                 zIndex: 0
                //             }}
                //         >
                //             <Box position="relative" zIndex={1}>
                //                 {/* <Image src={s.image} height={60} width="100%" objectFit="contain" objectPosition="top" /> */}
                //                 <Box position="relative" zIndex={1}
                //                     overflowY={"clip"}>
                //                     <Box
                //                         position="absolute"
                //                         top={0}
                //                         left={0}
                //                         right={0}
                //                         height="60"
                //                         width="100%"
                //                         backgroundImage={`url(${s.image})`}
                //                         backgroundPosition="50%"
                //                         backgroundSize="cover"
                //                         backgroundOrigin={"border-box"}
               ))} //                         backgroundClip={"padding-box"}
                //                         filter="blur(20px) opacity(0.7)"
                //                         transform="scale(1.1)"
                //                     />
                //                     <Image
                //                         src={s.image}
                //                         height={60}
                //                         width="100%"
                //                         objectFit="contain"
                //                         objectPosition="top"
                //                         position="relative"
                //                         zIndex={2}
                //                     />
                //                 </Box>
                //                 <Card.Body gap={3}>
                //                     <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                //                         {s.name}
                //                     </Text>
                //                     <Card.Title fontWeight="medium">{s.speech_title}</Card.Title>
                //                     <Card.Description textAlign={"justify"}>{s.speech_description}</Card.Description>
                                    
                //                 </Card.Body>
                //                 {s.speech_link && (
                //                     <Card.Footer gap="2">
                //                         <Link fontSize="sm" fontWeight="medium" bg="red" px={4} py={2} href={s.speech_link} target="_blank" borderRadius="md">
                //                             Tell me more
                //                             <FaExternalLinkAlt />
                //                         </Link>
                //                     </Card.Footer>
                //                 )}
                //             </Box>
                //         </Card.Root>
                //     ))}
                // </Flex >
>>>>>>> c0c9b9e (Project Update for 2026)
            
        <VStack
            // maxW="container.xl"
            // mx="auto"
            // px={{ base: 8, md: "10vw" }}
            mt={10}
            align="center"
        >
        <Box mt={8} mb={4}>
        <HashLink
            smooth
            to="/previous-speakers#previousSpeakers1"
            className="group inline-block border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
            <div className="flex items-center p-2 px-6">
            <span className="font-mono text-lg">SPEAKERS FROM PREVIOUS YEARS</span>
            <span className="font-mono text-lg transform group-hover:translate-x-1 transition-transform duration-300 pl-2">
                →
            </span>
            </div>
        </HashLink>
        </Box>
        </VStack>
        </Container>
        </>
    
);
};

export default Speakers;