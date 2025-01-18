import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Box, Flex, HStack, IconButton, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { MotionBox, MotionLink, MotionSpan } from "@/components/MotionUtil";
import ContainerUtil from "@/components/ContainerUtil";
import { NAV_LINKS } from "@/Data";

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
        <MotionBox
            bg={"rgba(0,0,0,0.8)"}
            borderBottom={2}
            borderStyle={"solid"}
            borderColor={"var(--tedx-red)"}
            py={4}
            position="fixed"
            width={"100vw"}
            top={0}
            zIndex={9999}
            initial={{ y: -100 }}
            animate={{ y: showNav ? 0 : -100 }}
            transition={{ type: "spring" }}
        >
            <ContainerUtil>
                <Flex flex={{ base: 1 }} justify={{ base: "space-between", md: "start" }} align={"center"} px={{ base: 0, md: 8 }}>
                    <Link href="/" _focus={{ outline: "none" }}>
                        <Image src="logo.png" alt="logo" width={"auto"} height={50} />
                    </Link>
                    <IconButton size="md" children={open ? <FaTimes /> : <FaBars />} display={{ md: "none" }} aria-label="Open Mobile Menu" onClick={onToggle} color="red" />
                    <Flex display={{ base: "none", md: "flex" }} ml="auto">
                        <DesktopNav />
                    </Flex>
                </Flex>

                {open ? (
                    <Box>
                        <Stack as="nav" mt={8} mb={4} p={0} display={{ md: "none" }} zIndex="1000">
                            <ContainerUtil height={"full"}>
                                <MobileNav />
                            </ContainerUtil>
                        </Stack>
                    </Box>
                ) : null}
            </ContainerUtil>
        </MotionBox>
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
                <HoverNavLinks color={"var(--tedx-red)"} href={"#"}>
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
        <MotionLink
            initial="initial"
            whileHover="hovered"
            href={href}
            position="relative"
            display="block"
            overflow="hidden"
            whiteSpace="nowrap"
            textDecorationLine={"none"}
            fontWeight="medium"
            textTransform="uppercase"
            color={color ?? "white"}
            _hover={{
                color: "var(--tedx-red)",
                transition: "color 0.2s ease-out",
            }}
            lineHeight={1.5}
        >
            <Box>
                <MotionSpan
                    variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                    style={{ display: "inline-block" }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {children}
                </MotionSpan>
            </Box>
            <Box position={"absolute"} inset={0}>
                <MotionSpan
                    variants={{ initial: { y: "100%" }, hovered: { y: 0 } }} //
                    style={{ display: "inline-block" }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {children}
                </MotionSpan>
            </Box>
        </MotionLink>
    );
};
