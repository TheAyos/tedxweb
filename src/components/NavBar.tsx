import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex, HStack, IconButton, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";
import ContainerUtil from "@/components/ContainerUtil";
import { NAV_LINKS } from "@/Data";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const NavBar: React.FC = () => {
    const { open, onToggle } = useDisclosure();
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <motion.div
            className="bg-black bg-opacity-80 border-b-2 border-solid border-red-600 py-4 fixed w-full top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{ type: "spring" }}
        >
            <ContainerUtil>
                <Flex className="flex justify-between md:justify-start items-center px-0 md:px-8">
                    <Link href="/" className="focus:outline-none">
                        <Image src="logo.png" alt="logo" className="h-12 w-auto" />
                    </Link>
                    <IconButton size="md" children={open ? <FaTimes /> : <FaBars />} className="md:hidden" aria-label="Open Mobile Menu" onClick={onToggle} color="red" />
                    <Box className="hidden md:block ml-auto">
                        <DesktopNav />
                    </Box>
                </Flex>

                {open ? (
                    <Box>
                        <Stack as="nav" className="mt-8 mb-4 p-0 md:hidden z-50">
                            <ContainerUtil className="h-full">
                                <MobileNav />
                            </ContainerUtil>
                        </Stack>
                    </Box>
                ) : null}
            </ContainerUtil>
        </motion.div>
    );
};

export default NavBar;

const DesktopNav = () => {
    return (
        <HStack gap={6}>
            {NAV_LINKS.map((navItem) => (
                <Box key={navItem.label}>
                    <HoverNavLinks href={navItem.href ?? "#"}>{navItem.label}</HoverNavLinks>
                </Box>
            ))}

            <Box key={"Contact Us"}>
                <HoverNavLinks color={"var(--tedx-red)"} href={"mailto:TEDx.EcolePolytechnique@gmail.com"}>
                    {"Contact Us"}
                </HoverNavLinks>
            </Box>
        </HStack>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={"black"} p={4} height={"full"} gap={6}>
            {NAV_LINKS.map((navItem) => (
                <HoverNavLinks color="white" key={navItem.label} href={navItem.href ?? "#"}>
                    {navItem.label}
                </HoverNavLinks>
            ))}
        </Stack>
    );
};

interface HoverLinksProps {
    href: string;
    children: React.ReactNode;
    color?: string;
}
const HoverNavLinks = ({ children, href, color }: HoverLinksProps) => {
    return (
        <HashLink
            to={href}
            style={{
                position: "relative",
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textDecorationLine: "none",
                fontWeight: "medium",
                textTransform: "uppercase",
                color: color ?? "white",
                lineHeight: 1.5
            }}
        >
            <motion.div
                initial="initial"
                whileHover="hovered"
                style={{
                    position: "relative",
                    display: "block"
                }}
            >
                <Box>
                    <motion.span
                        variants={{
                            initial: { y: 0, color: color ?? "white" },
                            hovered: { y: "-100%", color: "var(--tedx-red)" }
                        }}
                        style={{ display: "inline-block" }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {children}
                    </motion.span>
                </Box>
                <Box position={"absolute"} inset={0}>
                    <motion.span
                        variants={{
                            initial: { y: "100%", color: color ?? "white" },
                            hovered: { y: 0, color: "var(--tedx-red)" }
                        }}
                        style={{ display: "inline-block" }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        {children}
                    </motion.span>
                </Box>
            </motion.div>
        </HashLink>

        // <MotionLink
        //     initial="initial"
        //     whileHover="hovered"
        //     href={href}
        //     position="relative"
        //     display="block"
        //     overflow="hidden"
        //     whiteSpace="nowrap"
        //     textDecorationLine={"none"}
        //     fontWeight="medium"
        //     textTransform="uppercase"
        //     color={color ?? "white"}
        //     _hover={{
        //         color: "var(--tedx-red)",
        //         transition: "color 0.2s ease-out",
        //     }}
        //     lineHeight={1.5}
        // >
        //     <Box>
        //         <motion.span
        //             variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        //             style={{ display: "inline-block" }}
        //             transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        //         >
        //             {children}
        //         </motion.span>
        //     </Box>
        //     <Box position={"absolute"} inset={0}>
        //         <motion.span
        //             variants={{ initial: { y: "100%" }, hovered: { y: 0 } }} //
        //             style={{ display: "inline-block" }}
        //             transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        //         >
        //             {children}
        //         </motion.span>
        //     </Box>
        // </MotionLink>
    );
};

