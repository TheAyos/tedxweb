import { useState, useRef, useEffect } from "react";

// const HashLetterEffectt = ({
//   words = ["Hashhhh", "Effect !"],
// }: {
//   words?: string[];
// }) => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   const [currentText, setCurrentText] = useState(words[0]);
//   let targetWord = words[0];
//   const intervalRef = useRef(0);
//   const pRef = useRef(null);

//   const hashSpeed = 8;
//   const hashDuration = 2000;
//   const hashIntervalDelay = hashDuration / (targetWord.length * hashSpeed);

//   const handleMouseOver = () => {
//     let iteration = 0;

//     clearInterval(intervalRef.current);

//     const interval = setInterval(() => {
//       setCurrentText((prevText) =>
//         prevText
//           .split("")
//           .map((_letter, index) => {
//             if (index < iteration) return targetWord[index];
//             return letters[Math.floor(Math.random() * letters.length)];
//           })
//           .join("")
//       );
//       if (iteration >= targetWord.length) clearInterval(interval);
//       iteration += 1 / hashSpeed;
//     }, hashIntervalDelay);
//   };

//   useEffect(() => {
//     pRef.current &&
//       (pRef.current as HTMLElement).addEventListener(
//         "mouseover",
//         handleMouseOver
//       );
//     return () => {
//       pRef.current &&
//         (pRef.current as HTMLElement).removeEventListener(
//           "mouseover",
//           handleMouseOver
//         );
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   const [isActive, setIsActive] = useState(true);

//   const index = useRef(0);
//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         index.current++;
//         setCurrentText(words[index.current]);
//         targetWord = words[index.current];
//         if (index.current === words.length - 1) {
//           setIsActive(false);
//         }
//       }, hashDuration);
//     }
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isActive]);

//   return (
//     <p ref={pRef} data-value={targetWord}>
//       {currentText}
//     </p>
//   );
// };

const HashLetterEffect = ({
  words = ["Hashhhh", "Effect !"],
}: {
  words?: string[];
}) => {
  const letters = "abcdefghijklmnopqrstuvwxyz"; // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  const [currentText, setCurrentText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateText = () => {
    const targetWord = words[wordIndex];
    let iteration = 0;

    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < iteration) return targetWord[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= targetWord.length) clearInterval(interval);

      iteration += 0.25;
    }, 40);
  };

  useEffect(() => {
    const switchWords = () => {
      setWordIndex((prev) => (prev + 1) % words.length);
      animateText();
    };

    // Initial animation
    animateText();

    intervalRef.current = setInterval(switchWords, Math.random() * 3500 + 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [wordIndex]);

  // return <span>{currentText}</span>;
  return <span>{currentText}</span>;
};

export default HashLetterEffect;
