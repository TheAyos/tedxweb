import React from "react";
import { Container, Heading, Text, VStack, Link, HStack, Image, Flex } from "@chakra-ui/react";

const About: React.FC = () => {
    return (
        <>
            <Container as="main" py={12} bg="black" color="white" maxW="container.xl" textAlign={"justify"}>
                <VStack gap={12} align="stretch">
                    <Text as={"h2"} id="theteam" fontSize={"3xl"} fontWeight={"medium"} textAlign={"center"} mt={10} mb={6}>
                        Who are we?
                    </Text>
                    <Flex flexDir={{ base: "column", md: "row" }} align="center">
                        <Image src="images/2024/full-members.jpg" width={{ base: "100%", sm: "xl" }} height={"auto"} />

                        <Text as={"p"} fontSize={"md"} fontWeight={"medium"} mt={10} mb={6} px={8}>
                            A group of 17 motivated students enrolled in Bachelor of Science of École Polytechnique. Students coming from all around the world with the common
                            ambition to create a successful event, that will impact all those who attend and will highlight the amazing innovations and ideas of our community.
                        </Text>
                    </Flex>

                    <VStack align="stretch" gap={6}>
                        {/* What is TEDx */}
                        <Heading as="h1" size="xs" color={"var(--tedx-red)"} fontWeight={"bold"}>
                            What is TEDx?
                        </Heading>
                        <Text fontSize="lg">
                            In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring
                            people together to share a TED-like experience. Our event is called TEDxTEDxÉcolePolytechnique, where x = independently organized TED event. At our
                            TEDxÉcolePolytechnique event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED
                            Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                        </Text>

                        {/* About TED */}
                        <Heading as="h2" size="xs" color={"var(--tedx-red)"} fontWeight={"bold"}>
                            About TED
                        </Heading>
                        <Text fontSize="lg">
                            TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and
                            drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people
                            from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas
                            and activate them in your community.
                        </Text>
                        <Text fontSize="lg">
                            TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and
                            initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual
                            conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are
                            translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events bring
                            people together to share ideas and bridge divides in communities on every continent. Through the Audacious Project, TED has helped catalyze more than $3
                            billion in funding for projects that seek to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to
                            accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of
                            conversation focused on realistic pathways towards a more vibrant and equitable future.{" "}
                            <Link href="https://www.ted.com/about/programs-initiatives" color="var(--tedx-red)" target="_blank" rel="noopener noreferrer">
                                View a full list of TED's many programs and initiatives.
                            </Link>
                        </Text>

                        {/* Social Media Links */}
                        <HStack wrap={"wrap"} justifyContent={"space-around"} gap={4} align="end">
                            <Text fontSize="sm">Follow TED on</Text>
                            <Link href="https://facebook.com/TED" target="_blank" rel="noopener noreferrer" color="var(--tedx-red)">
                                Facebook
                            </Link>
                            <Link href="https://instagram.com/ted" target="_blank" rel="noopener noreferrer" color="var(--tedx-red)">
                                Instagram
                            </Link>
                            <Link href="https://linkedin.com/company/ted-conferences" target="_blank" rel="noopener noreferrer" color="var(--tedx-red)">
                                LinkedIn
                            </Link>
                            <Link href="https://tiktok.com/@tedtoks" target="_blank" rel="noopener noreferrer" color="var(--tedx-red)">
                                TikTok
                            </Link>
                            <Link href="http://twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer" color="var(--tedx-red)">
                                X
                            </Link>
                        </HStack>
                    </VStack>
                </VStack>
            </Container>
        </>
    );
};

export default About;
