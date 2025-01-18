import { useState, useRef, useEffect } from "react";

const HashLetterEffect = ({ words = ["Hashhhh", "Effect !"], rtl = false }: { words?: string[], rtl: boolean }) => {
    // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*():{};|,.<>/?";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*():{};|,.<>/?";
    const [currentText, setCurrentText] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const shuffleTime = 50;
    const cyclesPerLetter = 2;

    const animateText = () => {
        const targetWord = words[wordIndex];
        let pos = (rtl) ? targetWord.length : 0;

        intervalRef.current = setInterval(() => {
            // const interval = setInterval(() => {
            //     setCurrentText((prev) =>
            //         prev
            //             .split("")
            //             .map((_, index) => {
            //                 if ((rtl && index >= pos) || (!rtl && index < pos))
            //                     return targetWord[index];
            //                 return letters[Math.floor(Math.random() * letters.length)];
            //             })
            //             .join("")
            //     );


            const hashed = targetWord
                .split("")
                .map((char, index) => {
                    if ((rtl && index >= pos / cyclesPerLetter) || (!rtl && pos / cyclesPerLetter > index)) {
                        return char;
                    }
                    const randomCharIndex = Math.floor(Math.random() * letters.length);
                    const randomChar = letters[randomCharIndex];
                    return randomChar;
                })
                .join("");

            setCurrentText(hashed);

            if (rtl) pos--;
            else pos++;

            if ((rtl && pos < 0) || (!rtl && pos >= targetWord.length * cyclesPerLetter)) {
                clearInterval(intervalRef.current || undefined);
                setCurrentText(targetWord);
            }
            // if ((rtl && pos <= 0) || (!rtl && pos >= targetWord.length)) clearInterval(intervalRef.current || undefined);

            // pos += 0.30 * (rtl ? -1 : 1);
        }, shuffleTime);

    };

    useEffect(() => {
        // const switchWords = () => {
        //     setWordIndex((prev) => (prev + 1) % words.length);
        //     animateText();
        // };

        // Initial animation
        animateText();

        intervalRef.current = setInterval(animateText, Math.random() * 3500 + 2500);
        // intervalRef.current = setInterval(switchWords, Math.random() * 3500 + 2500);

        return () => {
            clearInterval(intervalRef.current || undefined);
        };
    }, [wordIndex]);

    // return <span>{currentText}</span>;
    return <span>{currentText}</span>;
};

export default HashLetterEffect;

// TODO: potential improvement

import { Box, Button, ButtonProps, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props extends ButtonProps {
    plainText?: string;
    cyclesPerLetter?: number;
    shuffleTime?: number;
    cipherChars?: string;
}

// export default
function EncryptedButton({
    plainText = "Encrypt data",
    cyclesPerLetter = 2,
    shuffleTime = 50,
    cipherChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*():{};|,.<>/?",
    ...props
}: Props) {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [text, setText] = useState(plainText);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = plainText
                .split("")
                .map((char, index) => {
                    if (pos / cyclesPerLetter > index) {
                        return char;
                    }
                    const randomCharIndex = Math.floor(Math.random() * cipherChars.length);
                    const randomChar = cipherChars[randomCharIndex];
                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= plainText.length * cyclesPerLetter) {
                stopScramble();
            }
        }, shuffleTime);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(plainText);
    };

    return (
        <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }} style={{ display: "inline-block" }}>
            <Button
                onMouseEnter={scramble}
                onMouseLeave={stopScramble}
                w={"fit-content"}
                overflow={"hidden"}
                borderRadius={"lg"}
                borderWidth={"1px"}
                bgColor={"gray.800"}
                borderColor={"gray.900"}
                px={4}
                py={2}
                fontFamily={"mono"}
                fontWeight={"medium"}
                textTransform={"uppercase"}
                // color={"gray.200"}
                transition={"color 0.2s"}
                _hover={{
                    color: "green.300",
                }}
                role="group"
                {...props}
            >
                <Box as={Flex} position={"relative"} zIndex={10} alignItems={"center"} gap={2}>
                    <span>{text}</span>
                </Box>
            </Button>
        </motion.div>
    );
}
