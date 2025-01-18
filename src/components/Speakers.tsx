import { SPEAKERS } from "@/Data";
import { Card, Flex, HStack, Link, Image, Text, Box, Button } from "@chakra-ui/react";
import { MotionBox, MotionSpan, MotionSvg } from "./MotionUtil";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Speakers = () => {
    return (
        <>
            <Flex id="speakers" justify="space-around" flexWrap="wrap" px={20} py={10} gap={20} boxSizing={"border-box"}>
                <HStack width={"full"}>
                    <Text as={"h2"} id="events" fontSize={"3xl"} fontWeight={"medium"} textAlign={"left"}>
                        Speakers
                    </Text>
                </HStack>
                {SPEAKERS[2024].map((s, i) => (
                    <Card.Root key={i} maxW="sm" overflow="hidden" boxShadow="md">
                        <Image src={s.image} height={60} objectPosition="top" />
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
                    </Card.Root>
                ))}
                <SquishyCard />
            </Flex>
        </>
    );
};

export default Speakers;

function SquishyCard() {
    const Card = () => {
        return (
            <MotionBox
                whileHover="hover"
                variants={{
                    initial: {
                        scale: 1,
                    },
                    hover: {
                        scale: 1.05,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                }}
                position={"relative"}
                h={"380px"}
                w={"320px"}
                flexShrink={0}
                overflow={"hidden"}
                borderRadius={"xl"}
                p={8}
                // bg={"var(--tedx-red)"}
                bgImage="url('/images/2024/faq-fun.jpg')"
                bgSize="cover"
                role={"group"}
            >
                <Box position={"relative"} zIndex={10} color={"white"}>
                    {/* <Text mb={3} display={"block"} w={"fit-content"} rounded={"full"} bg="rgba(255, 255, 255, 0.3)" px={3} py={1} fontSize={"small"} color={"white"}>
                        top text hint
                    </Text> */}
                    <MotionSpan
                        transform="scale(0.85)"
                        _groupHover={{
                            transform: "scale(1.05)",
                        }}
                        transitionDuration="1s"
                        transitionTimingFunction="backInOut"
                        my={2}
                        display="block"
                        fontSize="5xl"
                        transformOrigin="top left"
                        fontWeight="black"
                        lineHeight="1.2"
                    >
                        Yohan Benalouane
                    </MotionSpan>
                    {/* <Text mt={6}>
                        Prominent Tunisian national team footballer Yohan Benalouane, born March 28, 1987, in France, is a professional footballer known for his defensive skills.
                        He began his career with Saint-Étienne before playing for clubs in Italy and England. Benalouane has also represented the Tunisian national team.
                    </Text> */}
                </Box>
                <Button
                    position={"absolute"}
                    bottom={4}
                    left={4}
                    right={4}
                    zIndex={20}
                    rounded={"full"}
                    borderWidth={2}
                    borderColor={"white"}
                    borderRadius={"md"}
                    bg={"white"}
                    py={2}
                    textAlign={"center"}
                    fontWeight={"medium"}
                    color={"black"}
                    backdropFilter={"blur(10px)"}
                    transition={"background-color 0.3s, color 0.3s"}
                    _hover={{
                        bg: "rgba(255,255,255,0.2)",
                        color: "white",
                    }}
                >
                    Tell me more
                </Button>
                <Link
                    position={"absolute"}
                    bottom={4}
                    left={4}
                    // right={4}
                    zIndex={20}
                    fontSize="sm"
                    fontWeight="medium"
                    bg="red"
                    px={4}
                    py={2}
                    href={"#toimplement"}
                    target="_blank"
                    borderRadius="md"
                >
                    Tell me more
                    <FaExternalLinkAlt />
                </Link>
                <Background />
            </MotionBox>
        );
    };

    const Background = () => {
        return (
            <>
                <MotionSvg
                    width="320"
                    height="380"
                    viewBox="0 0 320 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    position="absolute"
                    inset={0}
                    zIndex={0}
                    variants={{
                        hover: {
                            scale: 2,
                        },
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                >
                    <motion.circle
                        variants={{
                            hover: {
                                scaleY: 0.5,
                                y: -25,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                            delay: 0.2,
                        }}
                        cx="160.5"
                        cy="114.5"
                        r="101.5"
                        fill="#262626aa"
                    />

                    <motion.ellipse
                        variants={{
                            hover: {
                                scaleY: 2.25,
                                y: -25,
                            },
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                            delay: 0.2,
                        }}
                        cx="160.5"
                        cy="265.5"
                        rx="101.5"
                        ry="43.5"
                        fill="#262626"
                    />
                </MotionSvg>
            </>
        );
    };
    return <Card />;
}
