/* eslint-disable prettier/prettier */
"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
// import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

import AnimatedShinyText from "../_Animations_Genaretor/ButtonGenarator";
import { LinkPreview } from "../_Animations_Genaretor/LinkGenerator";

import { cn } from "@/src/lib/utils";
const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    src: "tree.jpg",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    src: "water.jpg",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "house.jpg",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "cactus.jpg",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

export default function Projects(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div ref={container} className="bg-black">
        <div>
          <div className="text-white  h-[70vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Transforming Ideas into <br /> Interactive Realities 👇
            </h1>
          </div>
        </div>

        <div className="text-white   w-full bg-slate-950  mx-auto">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                color={project?.color}
                description={project?.description}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                src={project?.src}
                targetScale={targetScale}
                title={project?.title}
                url={project?.link}
              />
            );
          })}
        </div>

        <footer className="group bg-slate-950  ">
          <div className="flex flex-col justify-center items-center bg-whit mb-10">
            <div className="z-10 flex min-h-64d items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ More Transforms</span>
                </AnimatedShinyText>
              </div>
            </div>
          </div>
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            Ashraf
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full" />
        </footer>
      </div>
    </div>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className={`flex flex-col relative -top-[25%] h-[600px] w-[70%] rounded-md p-10 origin-top`}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt- gap-10`}>
          <ScrollShadow
            hideScrollBar
            className="w-[40%] h-[90%]"
            offset={100}
            orientation="horizontal"
          >
            <div className={` relative top-[10%]`}>
              <p className="text-white  text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                {description}
              </p>
            </div>
          </ScrollShadow>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill alt="image" className="object-cover" src={url} />
            </motion.div>
          </div>
        </div>
        <span className="flex items-center gap-2 pt-2">
          <LinkPreview className="font-bold" url="https://framer.com/motion">
            <p className="flex gap-2 items-center">
              See Details
              <svg
                fill="none"
                height="12"
                viewBox="0 0 22 12"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </p>
          </LinkPreview>
        </span>
      </motion.div>
    </div>
  );
};
