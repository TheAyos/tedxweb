import React from "react";
import Announcer from "./Announcer";
import TheTeam from "@/components/TheTeam";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Flex, Text, VStack, Grid } from "@chakra-ui/react";
import HzScroll from "@/components/HzScroll";
import PreviousEditions from "@/components/PreviousEditions";
import Speakers from "@/components/Speakers";

// TODO: optimize imgs
// -sth like why tedxecole poly ?
// -timetable with videos (for ex: interlude musical)
// -speakers linu up texAMS style
//    cards nice stuff & more effects !!, opens pop up ? to speaker details

// TODO: add back hashletter effect ?
// TODO: make footer prettier
// TODO: fix bg color black/gray mismatch
// TODO: fix add back announcer corners red (see screenshotCORNERS.png)
// TODO: try to make announcer fit in 100vh again
// TODO: optimize mobile : text sizes, announcer centering, past editions links, 

const Home: React.FC = () => {
    return (
        <>
            <NavBar />

            <Announcer />

            <Flex as="main" alignItems={"center"} flexDirection={"column"} textAlign={"justify"} color="white" maxW="container.xl" py={12} px={{ base: 8, md: "10vw" }}>
                <VStack gap={12} align="stretch">
                    <Box as="section" width="full" mt={12} gap={8}>
                        <Text as={"h2"} id="events" fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
                            This year's theme
                        </Text>
                        <Grid templateColumns={"1fr 1fr"} templateRows={"1fr 1fr"}>
                            <Text as={"h1"} id="events" fontSize={"4xl"} fontWeight={"bold"} textAlign={"right"} color="var(--tedx-red)" gridArea={"1/1/2/2"}>
                                Evolving
                            </Text>
                            <Text as={"h1"} id="events" fontSize={"4xl"} fontWeight={"bold"} textAlign={"left"} color="var(--tedx-red)" gridArea={"2/2/3/3"}>
                                Patterns
                            </Text>
                        </Grid>

                        <Text>
                            The theme “Evolving Patters” has been chosen for its wide range of interpretations. It aims to explore how trends, ideas, behaviours, and structures
                            transform over time. How do we incorporate the paradigm shifts over time to progress in various fields and not stagnate at a fixed point. We think that
                            this theme is of particular interest to our student body as we try to shape our future careers and are devoted to making something progress. This is
                            where your unique interpretation is the most valuable: exposing students to the ways you have found to help shift perspectives
                        </Text>

                        <Text>
                            We are organizing a conference titled TEDxÉcolePolytechnique on Tuesday 6th of May 2025. This event will be held in Amphitheatre Poincaré in the main
                            building of École Polytechnique. The event will feature a lineup of around 6 speakers, each handpicked for their unique perspectives, expertise and
                            inspiring stories A Q&A session as well as buffet will take place after the speeches and will enable students to ask questions and involve them in a
                            more targeted discussion with the speakers
                        </Text>
                    </Box>
                </VStack>

                <Speakers />
                <PreviousEditions />
                <HzScroll />
                <TheTeam />
            </Flex>

            <Footer />
        </>
    );
};

export default Home;
