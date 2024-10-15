/* eslint-disable prettier/prettier */
import { Cover } from "../_Animations_Genaretor/Cover";
import { TextGenerateEffect } from "../_Animations_Genaretor/TextGenerateEffect";
import Container from "../_Container/Container";

import { MyAnimatedPhoto } from "./MyAnimatedPhoto";

const words = `I’m a full stack developer specializing in the MERN stack and Next.js, with a focus on building dynamic, efficient, and engaging web experiences. From backend architecture to interactive frontend animations with GSAP and Framer Motion, I bring creative and technical expertise to every project.
`;

const AboutMe = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row gap-5 items-center justify-between">
        <div className="lg:w-1/2 flex items-center flex-col justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text- mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Transform Your Ideas into Reality with <Cover>ALI ASHRAF</Cover>
          </h1>
          <TextGenerateEffect textSize="text-2xl" words={words} />
        </div>
        <div className="lg:-1/2">
          <MyAnimatedPhoto />
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
