import React from "react";
import Announcer from "./Announcer";
import TeamMain from "@/components/TeamMain";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Flex } from "@chakra-ui/react";
import HzScroll from "@/components/HzScroll";
import PreviousEditions from "@/components/PreviousEditions";
import Speakers from "@/components/Speakers";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";

import { Intro } from "@/components/Intro";

// TODO: optimize imgs :::::::::
// TODO: optimize imgs :::::::::
// TODO: optimize imgs :::::::::
// TODO: optimize imgs :::::::::
// TODO: optimize imgs :::::::::
// TODO: optimize imgs :::::::::
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
                <Partners />
                <PreviousEditions />
                <HzScroll />
                <TeamMain />
                <Contacts />
            </Flex>

            <Footer />
        </>
    );
};

export default Home;
