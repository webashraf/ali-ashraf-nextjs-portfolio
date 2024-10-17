"use client";

import { motion } from "framer-motion";

import AuroraBackground from "../_Animations_Genaretor/aurora-background";
import { EncryptButton } from "../_Animations_Genaretor/ProHoverButtonGenaretor";
import { TextGenerateEffect } from "../_Animations_Genaretor/TextGenerateEffect";

export function AuroraBackgroundHero() {
  return (
    <AuroraBackground>
      <motion.div
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        // initial={{ opacity: 0.0, y: 40 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full lg:pt- lg:pt-48 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-5">
            Crafting Dynamic Web Solutions
          </h1>
          <div className="mt-4 font-normal text-base text-neutral-300 max-w-4xl text-center mx-auto">
            <TextGenerateEffect
              // textSize="md"
              words="Full Stack Expertise with a Creative Touch. Leveraging MERN Stack,
          Next.js, and Animation for Innovative Web Solutions, Seamlessly
          Integrated with WordPress and Webflow."
            />
            <motion.div
              className="relative flex flex-col gap-4 items-center justify-center px-4"
              initial={{ opacity: 0.0, y: 40 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <EncryptButton />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
