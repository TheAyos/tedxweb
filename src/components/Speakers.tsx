import { SPEAKERS } from "@/Data";
import { Card, Flex, HStack, Link, Image, Text, Box, Span } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Speakers = () => {
    return (
        <>
            <HStack width={"full"} mt={10}>
                <Text as={"h2"} id="speakers" fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
                    Speakers
                </Text>
            </HStack>

            {SPEAKERS.map((edition, i) => (
                <Flex key={i} justify="space-around" flexWrap="wrap" py={10} gap={20} boxSizing={"border-box"}>
                    <Box width="full">
                        <Text as="h2" fontSize="4xl" fontWeight="bold" mb={8} color="white">
                            <Span color="var(--tedx-red)">{edition.year}</Span>
                        </Text>
                    </Box>
                    {edition.speakers.map((s, i) => (
                        <Card.Root
                            key={i}
                            maxW={{ base: "100%", md: "sm" }}
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
                                <Image src={s.image} height={60} width="100%" objectFit="cover" objectPosition="top" />
                                <Card.Body>
                                    <Card.Title fontWeight="medium">{s.speech_title}</Card.Title>
                                    <Card.Description textAlign={"justify"}>{s.speech_description}</Card.Description>
                                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                                        {s.name}
                                    </Text>
                                </Card.Body>
                                <Card.Footer gap="2">
                                    <Link fontSize="sm" fontWeight="medium" bg="red" px={4} py={2} href={s.speech_link} target="_blank" borderRadius="md">
                                        Tell me more
                                        <FaExternalLinkAlt />
                                    </Link>
                                </Card.Footer>
                            </Box>
                        </Card.Root>
                    ))}
                </Flex >
            ))}
        </>
    );
};

export default Speakers;