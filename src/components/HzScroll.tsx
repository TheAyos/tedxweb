// import React, { useState } from "react";
// import "./HzScroll.css";
// import { motion } from "framer-motion";
// import { IMAGES } from "@/Data";
// import { Text } from "@chakra-ui/react";

// const HzScroll: React.FC = () => {
//     const [mouseDownAt, setMouseDownAt] = useState(0);
//     const [prevPercentage, setPrevPercentage] = useState(0);
//     const [percentage, setPercentage] = useState(0);

//     const handleOnDown = (e: React.MouseEvent | React.TouchEvent) => {
//         if (e.type === "mousedown") {
//             setMouseDownAt((e as React.MouseEvent).clientX);
//         } else {
//             setMouseDownAt((e as React.TouchEvent).touches[0].clientX);
//         }
//     };

//     const handleOnUp = () => {
//         setMouseDownAt(0);
//         setPrevPercentage(percentage);
//     };

//     const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
//         if (mouseDownAt === 0) return;

//         const clientX = e.type === "mousemove" ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
//         const mouseDelta = mouseDownAt - clientX;
//         const maxDelta = window.innerWidth / 2;

//         const newPercentage = (mouseDelta / maxDelta) * -100;
//         const nextPercentageUnconstrained = prevPercentage + newPercentage;
//         const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//         setPercentage(nextPercentage);

//         const track = document.querySelector(".image-track") as HTMLElement;
//         track.animate({ transform: `translate(${nextPercentage}%, -50%)` }, { duration: 1200, fill: "forwards" });

//         for (const image of track.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>)
//             image.animate({ objectPosition: `${100 + nextPercentage}% center` }, { duration: 1200, fill: "forwards" });
//     };

//     return (
//         <>
//             <Text as="h2" id="gallery" alignSelf="center" fontSize={"4xl"} pos={"relative"} mt={20} right={{ base: "0%", md: "25%" }}>
//                 Highlights
//             </Text>
//             <div className="gallery">
//                 <motion.div
//                     className="image-track"
//                     onMouseDown={handleOnDown}
//                     onTouchStart={handleOnDown}
//                     onMouseUp={handleOnUp}
//                     onTouchEnd={handleOnUp}
//                     onMouseLeave={handleOnUp}
//                     onMouseMove={handleOnMove}
//                     onTouchMove={handleOnMove}
//                 >
//                     {IMAGES.map((src, index) => (
//                         <motion.img
//                             key={index}
//                             initial={{ opacity: 0, y: 100 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                             className="image"
//                             src={src}
//                             draggable="false"
//                         />
//                     ))}
//                 </motion.div>
//             </div>
//         </>
//     );
// };

// export default HzScroll;
import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  IconButton,
  Dialog
} from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IMAGES } from "@/Data";

const HzScroll: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  };

  if (!IMAGES.length) return null;

  return (
    <>
    <a id="hzscroll"></a>
    <Box as="section" bg="black" py={28}>
      <VStack
        maxW="container.xl"
        mx="auto"
        px={{ base: 6, md: "10vw" }}
        align="stretch"
        gap={8}
      >
        <Text
          as="h2"
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="medium"
          color="white"
        >
          Gallery
        </Text>

        <Box position="relative" w="100%" overflow="hidden" borderRadius="md">
          <Flex
            transform={`translateX(-${(current * 100) / IMAGES.length}%)`}
            transition="transform 0.5s ease-in-out"
            w={`${IMAGES.length * 100}%`}
            >
            {IMAGES.map((img, index) => (
                <Box
            key={index}
            w={`${100 / IMAGES.length}%`}
            flexShrink={0}
            // onClick={() => setSelectedImage(img)}
            // cursor="zoom-in"
            >
            <Box
            w="100%"
            h={{ base: "300px", md: "500px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="black"
            >
            <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                maxH="100%"
                maxW="100%"
                objectFit="contain"
            />
            </Box>
            </Box>
            ))}
            </Flex>

        <IconButton
        aria-label="Previous slide"
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        onClick={prevSlide}
        bg="blackAlpha.700"
        color="white"
        _hover={{ bg: "blackAlpha.800" }}
        borderRadius="full"
        >
        <span style={{ fontSize: "28px" }}>‹</span>
        </IconButton>

        <IconButton
        aria-label="Next slide"
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        onClick={nextSlide}
        bg="blackAlpha.700"
        color="white"
        _hover={{ bg: "blackAlpha.800" }}
        borderRadius="full"
        >
        <span style={{ fontSize: "28px" }}>›</span>
        </IconButton>

          <Flex
            position="absolute"
            bottom={4}
            left="50%"
            transform="translateX(-50%)"
            gap={2}
          >
            {IMAGES.map((_, index) => (
              <Box
                key={index}
                w="10px"
                h="10px"
                borderRadius="full"
                bg={index === current ? "var(--tedx-red)" : "whiteAlpha.700"}
                cursor="pointer"
                onClick={() => setCurrent(index)}
              />
            ))}
          </Flex>
        </Box>
      </VStack>
    </Box>
    
<Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
  <Dialog.Backdrop bg="blackAlpha.800" />

  <Dialog.Positioner>
    <Dialog.Content bg="transparent" boxShadow="none">
      <Dialog.CloseTrigger color="white" />

      <Dialog.Body
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={0}
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            maxH="90vh"
            maxW="100%"
            objectFit="contain"
          />
        )}
      </Dialog.Body>

    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
  </>
  );
};

export default HzScroll;