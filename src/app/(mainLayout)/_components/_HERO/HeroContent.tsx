import Spotlight from "../_Animations_Genaretor/Spotlight";
import { TextGenerateEffect } from "../_Animations_Genaretor/TextGenerateEffect";

const HeroContent = () => {
  return (
    <div className=" h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
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
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
