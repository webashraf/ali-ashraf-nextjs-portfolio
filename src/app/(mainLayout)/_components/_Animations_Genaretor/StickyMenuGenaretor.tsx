/* eslint-disable prettier/prettier */
"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/src/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      console.log("Direction", direction);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // setVisible(true);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        className={cn(
          "flex max-w-fits w-[1400px] fixed top-5 inset-x-0 mx-auto  z-[5000]   items-center justify-center",
          className
        )}
        initial={{
          opacity: 1,
          y: -100,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="text-4xl uppercase dark:bg-black bg-white  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 border border-transparent dark:border-white/[0.2] rounded-md">
            Ali Ashraf
            {/* <TextGenerateEffect words="Ali Ashraf" /> */}
          </div>

          <div className=" w-[30% flex gap-3 dark:bg-black bg-white  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 border border-transparent dark:border-white/[0.2] rounded-md">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
                href={navItem.link}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-md">
              <span>Menu</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
