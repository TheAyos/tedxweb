import React, { useState } from "react";
import "./HzScroll.css";
import { motion } from "framer-motion";
import { IMAGES } from "@/Data";
import { Text } from "@chakra-ui/react";

const HzScroll: React.FC = () => {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const handleOnDown = (e: React.MouseEvent | React.TouchEvent) => {
        if (e.type === "mousedown") {
            setMouseDownAt((e as React.MouseEvent).clientX);
        } else {
            setMouseDownAt((e as React.TouchEvent).touches[0].clientX);
        }
    };

    const handleOnUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (mouseDownAt === 0) return;

        const clientX = e.type === "mousemove" ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
        const mouseDelta = mouseDownAt - clientX;
        const maxDelta = window.innerWidth / 2;

        const newPercentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = prevPercentage + newPercentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);

        const track = document.querySelector(".image-track") as HTMLElement;
        track.animate({ transform: `translate(${nextPercentage}%, -50%)` }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>)
            image.animate({ objectPosition: `${100 + nextPercentage}% center` }, { duration: 1200, fill: "forwards" });
    };

    return (
        <>
            <Text as="h2" id="gallery" alignSelf="center" fontSize={"4xl"} pos={"relative"} mt={20} right={{ base: "0%", md: "25%" }}>
                Highlights
            </Text>
            <div className="gallery">
                <motion.div
                    className="image-track"
                    onMouseDown={handleOnDown}
                    onTouchStart={handleOnDown}
                    onMouseUp={handleOnUp}
                    onTouchEnd={handleOnUp}
                    onMouseLeave={handleOnUp}
                    onMouseMove={handleOnMove}
                    onTouchMove={handleOnMove}
                >
                    {IMAGES.map((src, index) => (
                        <motion.img
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="image"
                            src={src}
                            draggable="false"
                        />
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default HzScroll;
