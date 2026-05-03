import { HStack, Container, VStack, Text, Box, Span, Grid, Link as ChakraLink } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { SPONSORS } from "@/Data";

const Partners = () => {
    return (
        <>
            <Container maxW="container.xl" mt={20} mx="auto" px={{ base: 8, md: "10vw" }}>
            <HStack width={"full"} align="start">
                <Text as={"h2"} id="partners" color="var(--tedx-red)" fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
                    Our Partners
                </Text>
            </HStack>

            {/*to use when there is still no information about partners*/}

            {/* <Card.Root
                    width="100%"
                    overflow="hidden"
                    mx="auto"
                    mt={16}
                    px={{ base: 8, md: "10vw" }}
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
                    // fancy hover blob
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
                    <Card.Body gap={3} py={12} alignItems="center" textAlign="center">
                        <Text textStyle="2xl" fontWeight="bold" color="white" letterSpacing="tight">
                            This Section is Coming Soon
                        </Text>
                        <Card.Description maxW="320px"  textAlign="center">
                            Our partners for the 2026 edition are currently being finalized. Check back soon for updates.
                        </Card.Description>
                    </Card.Body>
                </Box>
            </Card.Root> */}
        
        {SPONSORS.map((edition, i) => (
                <>
                <Box width="full" key={i} pt={10}>
                    <Text as="h2" fontSize="4xl" fontWeight="medium" mb={8} color="white">
                        <Span color="var(--tedx-red)">{edition.year}</Span>
                    </Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
                        {edition.sponsors.map((sponsor, i) => (
                            sponsor && (
                            <ChakraLink
                                key={i}
                                href={sponsor.url}
                                rel="noopener noreferrer"
                                target="_blank"
                                _hover={{ textDecoration: 'none' }}
                            >
                            <Box
                                key={i}
                                bg="white"
                                p={4}
                                borderRadius="md"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                transition="transform 0.2s"
                                _hover={{ transform: 'scale(1.05)' }}
                            >
                                <img
                                    src={sponsor.image}
                                    alt={`Partner ${sponsor.image}`}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Box>
                            </ChakraLink>
                            )
                        ))}
                    </Grid>
                </Box>
                </>
            ))}
                    
        <VStack
            mt={10}
            align="center"
        >
        <Box mt={8} mb={16}>
        <HashLink
            smooth
            to="/previous-partners#top"
            className="group inline-block border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
            <div className="flex items-center p-2 px-6">
            <span className="font-mono text-lg">PARTNERS FROM PREVIOUS YEARS</span>
            <span className="font-mono text-lg transform group-hover:translate-x-1 transition-transform duration-300 pl-2">
                →
            </span>
            </div>
        </HashLink>
        </Box>
        </VStack>
        </Container>
        </>
    
);
};

export default Partners;