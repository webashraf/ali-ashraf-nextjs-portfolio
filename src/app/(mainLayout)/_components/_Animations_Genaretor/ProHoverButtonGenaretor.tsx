"use client";
/* eslint-disable prettier/prettier */

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";

const TARGET_TEXT = "Resume";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    (intervalRef as any).current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/Ali_Ashraf_Resume.pdf";
    link.download = "Ali_Ashraf_Resume.pdf";
    link.click();
  };

  return (
    <motion.button
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 mt-5 w-[130px]"
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onClick={() => handleDownload()}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiDownload />
        <span>{text}</span>
      </div>
      <motion.span
        animate={{
          y: "-100%",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
        initial={{
          y: "100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
      />
    </motion.button>
  );
};
