import { motion } from "framer-motion";
import { Link as RouteLink } from "react-router-dom";
// import HashLetterEffect from "../components/HashLetterEffect";
import { Heading, Link, Span, Image, Box, HStack } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import "../AppOld.css";
// disables registration button when set to '#'
const REGISTER_NOW_LINK = "#";

const Announcer = () => {
    return (
        <section className="min-h-screen bg-black text-white overflow-hidden relative">
            <main className="relative z-10 min-h-screen grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4 gap-0">
                {/* Left column */}

                <div className="lg:col-span-7 md:col-span-6 col-span-4 flex flex-col justify-between xl:p-16 lg:p-12 md:p-8 p-6 pb-0 border-r border-white/10">
                    <div>
                        {/* Main title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
                        >
                            <div>

                                <div className="mb-2">
                                    <Image src="logo.png" alt="TEDxÉcolePolytechnique logo" width={"80%"} height={"auto"} className="shake-effect" />

                                </div>

                                <div className="space-y-4">
                                    <Heading
                                        as="h1"
                                        className="shake-effect"
                                        textAlign="left"
                                        fontSize={{ base: "7vw", sm: "12vw", md: "10vw", lg: "4vw" }}
                                        fontWeight="bold"
                                        lineHeight="1"
                                        letterSpacing="tight"
                                        mb={8}
                                    >
                                        <Span color="var(--tedx-red)">2025</Span> <Span>Edition</Span>
                                    </Heading>
                                </div>

                            </div>

                            <Box display="flex" justifyContent="center" alignItems="center" w="100%" mt={{ base: 0, lg: 20 }}>
                                <Image
                                    src="images/2025/event-banner-square.jpg"
                                    alt="Evolving patterns 2025 edition banner"
                                    maxH="350px"
                                    w={{ base: "60%", md: "80%" }}
                                    objectFit="contain"
                                    className="shake-effect"
                                />
                            </Box>
                        </motion.div>
                    </div>

                    {/* Bottom stats */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:block md:hidden sm:hidden">
                        <div className="grid grid-cols-3 border-t border-white/20 pt-8">
                            <div className="space-y-2 border-r border-white/10 pr-4">
                                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">Previous Editions</div>
                                <div className="font-mono text-4xl font-bold">02</div>
                            </div>
                            <div className="space-y-2 border-r border-white/10 px-4">
                                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">Total Speakers</div>
                                <div className="font-mono text-4xl font-bold">11</div>
                            </div>
                            <div className="space-y-2 pl-4">
                                <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest">ba</div>
                                <div className="font-mono text-4xl font-bold">oué</div>
                            </div>
                        </div>
                    </motion.div> */}

                    {/* <VStack
                        gap={12}
                        align="stretch"
                        alignItems={"center"}
                        flexDirection={"column"}
                        textAlign={"justify"}
                        color="white"
                        maxW="container.xl"
                        // py={12}
                        // px={{ base: 8, md: "10vw" }}
                        className="lg:block md:hidden sm:hidden"
                    > */}
                    {/* <Box display="flex" justifyContent="center" alignItems="center" w="100%">
                            <Image
                                src="images/2025/event-banner-square.jpg"
                                alt="Evolving patterns 2025 edition banner"
                                maxH="350px"
                                w={{ base: "60%", md: "80%" }}
                                objectFit="contain"
                                className="shake-effect"
                                margin="0 auto"
                            />
                        </Box> */}
                    {/* <Box as="section" width="full"> */}
                    {/*     <Heading
                                as="h2"
                                alignSelf={{ base: "center", sm: "flex-end" }}
                                fontSize={{ base: "xl", sm: "8vw", md: "5xl", lg: "7xl" }}
                                fontWeight="bold"
                                lineHeight="1"
                                letterSpacing="tight"
                            >
                                aa
                            </Heading>

                        <Grid templateColumns={"1fr 1fr"} templateRows={"1fr 1fr"}>
                            <Text as={"h1"} id="events" fontSize={"4xl"} fontWeight={"bold"} textAlign={"right"} color="var(--tedx-red)" gridArea={"1/1/2/2"}>
                                <HashLetterEffect words={["Evolving"]} rtl={false} />
                            </Text>
                            <Text as={"h1"} id="events" fontSize={"4xl"} fontWeight={"bold"} textAlign={"left"} color="var(--tedx-red)" gridArea={"2/2/3/3"}>
                                <HashLetterEffect words={["Patterns"]} rtl={true} />
                            </Text>
                        </Grid> */}
                    {/* </Box> */}
                    {/* </VStack> */}

                </div>


                {/* Right column */}
                {/* <div className="col-span-4 xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-4 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-between"> */}
                <div className="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-5 p-6 pt-0 md:p-8 lg:p-12 xl:p-16 flex flex-col justify-between">
                    {/* Event details */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="md:space-y-12">
                        <div className="space-y-6">
                            <span className="font-mono text-xs tracking-[0.2em] bg-red-600 px-4 py-2 inline-block" style={{ backgroundColor: "var(--tedx-red)" }}>
                                SAVE THE DATE
                            </span>

                            <div className="space-y-4 font-mono">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-sm opacity-60">DATE</span>
                                    <span className="text-lg">6th May 2025</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-sm opacity-60">TIME</span>
                                    <span className="text-lg">TBD</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-sm opacity-60">VENUE</span>
                                    <span className="text-lg">GRAND HALL</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-4">
                            <RouteLink
                                to={REGISTER_NOW_LINK}
                                className="group block bg-red-600 hover:bg-white hover:text-black transition-all duration-300"
                                onClick={(e) => REGISTER_NOW_LINK == "#" && e.preventDefault()}
                                style={
                                    REGISTER_NOW_LINK == "#"
                                        ? {
                                            pointerEvents: "none",
                                            opacity: 0.7,
                                            cursor: "not-allowed",
                                        }
                                        : undefined
                                }
                            >
                                <div className="flex items-center justify-between p-4">
                                    <span className="font-mono text-lg font-bold">REGISTER NOW{REGISTER_NOW_LINK == "#" ? " (COMING SOON)" : ""}</span>
                                    <span className="font-mono text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </div>
                            </RouteLink>

                            <a href="#events" className="group block border border-white hover:bg-white hover:text-black transition-all duration-300">
                                <div className="flex items-center justify-between p-4">
                                    <span className="font-mono text-lg">PAST EDITIONS</span>
                                    <span className="font-mono text-lg transform group-hover:translate-y-1 transition-transform duration-300">↓</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="desktop:block laptop:block tablet:hidden mobile:hidden"
                    >

                        {/* <div className="border-t border-white/20 pt-8"> */}
                        <div className="md:pt-8 md:block flex">
                            <div className="font-mono text-[10px] text-red-600 uppercase tracking-widest flex items-center">Connect With Us</div>

                            <HStack
                                gap={6}
                                py={{ base: 0, md: 4 }}
                                px={{ base: 4, md: 2 }}
                                _hover={{ "& > *": { transform: "scale(1.2)", color: "var(--tedx-red)" } }}
                                style={{ transition: "all 0.3s ease-in-out" }}
                            >
                                <Link
                                    href="https://www.instagram.com/tedx.ecolepolytechnique/"
                                    target="_blank"
                                    _hover={{ color: "white", transform: "rotate(8deg)" }}
                                    transition="all 0.3s ease-in-out"
                                    display="flex"
                                >
                                    <FaInstagram size="28px" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts/"
                                    target="_blank"
                                    _hover={{ color: "white", transform: "rotate(-8deg)" }}
                                    transition="all 0.3s ease-in-out"
                                    display="flex"
                                >
                                    <FaLinkedin size="28px" />
                                </Link>
                            </HStack>
                            {/* <div className="flex gap-6">
                                {[
                                    ["Instagram", "https://www.instagram.com/tedx.ecolepolytechnique/"],
                                    ["LinkedIn", "https://www.linkedin.com/company/tedx%C3%A9colepolytechnique2023/posts"],
                                ].map(([name, link]) => (
                                    <a key={name} href={link} className="font-mono text-sm hover:text-red-600 transition-colors duration-300">
                                        {name}
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    </motion.div>

                </div>

            </main>


            {/* corners deco */}
            <motion.div
                key={1}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-red-600`}
            ></motion.div>
            <motion.div
                key={2}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-red-600`}
            ></motion.div>

            {/* lines background */}
            <div className="absolute inset-0 opacity-15">
                {Array(20)
                    .fill(null)
                    .map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.06 }}
                            className="absolute h-[1px] w-full bg-white"
                            style={{ top: `${(i + 1) * 5}%` }}
                        />
                    ))}
            </div>

            {/* shake effect text */}
            <style>
                {`
                .red-tedx-color {
                      color: var(--tedx-red);
                  }
                  @keyframes shake {
                      0% { transform: translate(0) }
                      20% { transform: translate(-2px, 2px) }
                      40% { transform: translate(-2px, -2px) }
                      60% { transform: translate(2px, 2px) }
                      80% { transform: translate(2px, -2px) }
                      100% { transform: translate(0) }
                  }
                  .shake-effect:hover {
                      animation: shake 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
                  }`}
            </style>
        </section >
    );
};

export default Announcer;
