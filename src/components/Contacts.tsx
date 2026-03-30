import { CONTACTS } from "@/Data";
import { Card, Flex, HStack, Container, VStack, Link, Image, Text, Box, Span } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <Container maxW="container.xl" mt={24} mx="auto" px={{ base: 8, md: "10vw" }}>
            <HStack width={"full"} align="start">
                <Text as={"h2"} id="contacts" color="var(--tedx-red)" fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
                    Contact us
                </Text>
            </HStack>

            {CONTACTS.map((edition, i) => (
                
                    
                <Flex key={i} justify="space-around" flexWrap="wrap" py={10} gap={2} boxSizing={"border-box"}>
                    {edition.board_members.map((s, i) => (
                        <Card.Root
                            key={i}
                            maxW={{ base: "100%", md: "400px" }}
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
                                    <Text textStyle="2xl"  textAlign={"center"} fontWeight="medium" letterSpacing="tight" mt="2">
                                        {s.name}
                                    </Text>
                                    <Card.Title  textAlign={"center"} fontWeight="medium">{s.title}</Card.Title>
                                    <Card.Description textAlign={"center"}>{s.email}</Card.Description>
                                    <Card.Description textAlign={"center"}>{s.email2}</Card.Description>
                                    
                                </Card.Body>
                                
                            </Box>
                        </Card.Root>
                    ))}
                </Flex >
            ))}
        </Container>
        </>
    
);
};

export default Contacts;