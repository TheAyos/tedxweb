import React from "react";
import { Container, Text, Box, VStack, Image, Flex, Link } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

const TeamMain: React.FC = () => {
    return (

        <>
            <Container width="full" as="main" mb={5} pt={12} bg="black" color="white" maxW="container.xl" textAlign={"justify"} mx="auto" px={{ base: 8, md: "10vw" }}>
                <VStack gap={20} align="stretch">

                <VStack align="stretch" gap={10}>
                    <Text as={"h2"} id="teammain" fontSize={"4xl"} fontWeight={"medium"}>
                        Who are we?
                    </Text>
                    <Flex flexDir={{ base: "column", md: "column" }} align="left">
                        <Image src="/images/2026/everyone.jpg" width={{ base: "100%", sm: "100%" }}  height={"auto"} maxW={{sm: "800px"}}/>

                        <Text as={"p"} fontSize={"md"} fontWeight={"medium"} mt={{ base: 10, md: 10 }} px={{ base: 0, md: 0 }} w={{ base: "100%", md: "90%", lg: "80%" }} textAlign={{ base: "left", md: "justify" }}>
                            We are an organization consisting of 19 students of the Bachelor of Science program at École Polytechnique. 
                            Putting together our experience of living all around the world — from the US, through France, Slovakia, the Ivory Coast, India, to Russia and Albania — we aim to create an event that addresses global issues from our local perspective of being students at the IP Paris campus.
                        </Text>
                    </Flex>
                    <Box mt={3} mb={7}>
                            <HashLink
                                smooth
                                to="/team#top"
                                className="group inline-block border border-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <div className="flex items-center p-2 px-6">
                                <span className="font-mono text-lg">MORE ABOUT US</span>
                                <span className="font-mono text-lg transform group-hover:translate-x-1 transition-transform duration-300 pl-2">
                                    →
                                </span>
                                </div>
                            </HashLink>
                            </Box>
                </VStack>

                <VStack align="stretch" gap={6}>
                    <Text as={"h2"} id="theteam" fontSize={"4xl"} fontWeight={"medium"}>
                        What is <span style={{ color: "var(--tedx-red)" }}>TED</span>x?
                    </Text>
    
            
                    <Box w={{ base: "100%", md: "90%", lg: "80%" }}>
                        <Text as={"p"} fontSize={"md"} fontWeight={"medium"} mt={{ base: 10, md: 0 }} px={{ base: 0, md: 0 }} textAlign={{ base: "left", md: "justify" }}>
                            In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxÉcolePolytechnique, where x = independently organized TED event. <br /><br />
                            At our TEDxÉcolePolytechnique event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                        </Text>
                    </Box>
                </VStack>

                <VStack align="stretch" gap={6}>
                    <Text as={"h2"} id="theteam" fontSize={"4xl"} fontWeight={"medium"}>
                        About <span style={{ color: "var(--tedx-red)" }}>TED</span>
                    </Text>

                    <Box w={{ base: "100%", md: "90%", lg: "80%" }}>
                        <Text as={"p"} fontSize={"md"} fontWeight={"medium"} mt={{ base: 10, md: 0 }} px={{ base: 0, md: 0 }} textAlign={{ base: "left", md: "justify" }}>
                            TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and
                            drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people
                            from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas
                            and activate them in your community.
                        </Text>
                    </Box>

                    <Box w={{ base: "100%", md: "90%", lg: "80%" }}>
                        <Text as={"p"} fontSize={"md"} fontWeight={"medium"} mt={{ base: 5, md: 0 }} px={{ base: 0, md: 0 }} textAlign={{ base: "left", md: "justify" }}>
                            TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and
                            initiatives exploring everything from science and business to education, arts and global issues. <br /><br />
                            In addition to the TED Talks curated from our annual
                            conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are
                            translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring
                            people together to share ideas and bridge divides in communities on every continent.
                            <br /><br />
                            <Link href="https://www.ted.com/about/programs-initiatives" color="var(--tedx-red)" target="_blank" rel="noopener noreferrer">
                                View a full list of TED's many programs and initiatives.
                            </Link>
                        </Text>
                    </Box>
                </VStack>

                </VStack>
            </Container >
        </>
    );
};

export default TeamMain;
