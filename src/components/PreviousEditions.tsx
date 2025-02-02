import { EDITIONS } from "@/Data";
import { Box, Text, Span } from "@chakra-ui/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const PreviousEditions = () => {
    return (
        <>
            <Text as={"h2"} id="events" fontSize={"4xl"} fontWeight={"medium"} textAlign={"center"} mt={10} mb={6}>
                Previous Editions <Span color="var(--tedx-red)">2022-2024</Span>
            </Text>

            <Box as="section" width="full" py={12} px={8}>
                {EDITIONS.map((ed, i) => (
                    <CrazyLink key={i} heading={ed.title} subheading={ed.theme} imgSrc={ed.image} href={ed.link} />
                ))}
            </Box>
        </>
    );
};

interface LinkProps {
    heading: string;
    imgSrc: string;
    subheading: string;
    href: string;
}

const CrazyLink = ({ heading, imgSrc, subheading, href }: LinkProps) => {
    const ref = useRef<HTMLAnchorElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["70%", "90%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const rect = ref.current!.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
            <div>
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
                >
                    {heading.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                            key={i}
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </motion.span>
                <span className="relative mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">{subheading}</span>
            </div>

            <motion.img
                style={{
                    top,
                    left,
                    translateX: "-50%",
                    translateY: "-50%",
                    zIndex: 999,
                }}
                variants={{
                    initial: { scale: 0, rotate: "-13deg" },
                    whileHover: { scale: 1, rotate: "13deg" },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                alt={`link for ${heading}`}
            />

            <motion.div
                variants={{
                    initial: {
                        x: "25%",
                        opacity: 0,
                    },
                    whileHover: {
                        x: "0%",
                        opacity: 1,
                    },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};

export default PreviousEditions;

{
    /* old cards previous editions (switched to hover effects list) */
    /* <>
    <Flex justify="space-around" flexWrap="wrap" px={20} py={10} gap={20}>
    {EDITIONS.map((edition, i) => (
        <Card.Root key={i} maxW="sm" overflow="hidden" boxShadow="md">
            <Image src={edition.image} height={60} objectPosition="top" />
            <Card.Body>
                <Card.Title fontWeight="medium">{edition.title}</Card.Title>
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                    {edition.theme}
                </Text>
            </Card.Body>
            <Card.Footer gap="2">
                <Link fontSize="sm" fontWeight="medium" bg="red" px={4} py={2} href={edition.link} target="_blank" borderRadius="md">
                    Tell me more
                    <FaExternalLinkAlt />
                </Link>
            </Card.Footer>
            </Card.Root>
            ))}
    <SquishyCard />
    </Flex>
</> */
}
