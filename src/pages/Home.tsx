import React from "react";
import Announcer from "./Announcer";
import TheTeam from "@/components/TheTeam";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Flex } from "@chakra-ui/react";
import HzScroll from "@/components/HzScroll";
import PreviousEditions from "@/components/PreviousEditions";
import Speakers from "@/components/Speakers";
import { Intro } from "@/components/Intro";

// TODO: optimize imgs
// -sth like why tedxecole poly ?
// -timetable with videos (for ex: interlude musical)
// -speakers linu up texAMS style
//    cards nice stuff & more effects !!, opens pop up ? to speaker details
// TODO: add back hashletter effect ?
// TODO: fix bg color black/gray mismatch
// TODO: fix add back announcer corners red (see screenshotCORNERS.png)

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Announcer />

            <Flex as="main" alignItems={"center"} flexDirection={"column"} textAlign={"justify"} color="white" maxW="container.xl" py={12} px={{ base: 8, md: "10vw" }}>
                <Intro />
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
