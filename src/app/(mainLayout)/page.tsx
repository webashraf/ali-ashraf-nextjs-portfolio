import AboutMe from "./_components/_ABOUT_ME/AboutMe";
import FooterContent from "./_components/_Footer/_footer_contents";
import HeroContent from "./_components/_HERO/HeroContent";
import { VelocityScroll } from "./_components/_passions/Passions";
import Projects from "./_components/_projects/Projects";
import Skills from "./_components/_skills/Skills";

const page = () => {
  return (
    <>
      <HeroContent />
      <VelocityScroll
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        default_velocity={1}
        text="REACT NextJs TAILWIND BoothStrap Sadcn AntDesign NextUi GSAP FarmerMotion"
      />
      <AboutMe />
      {/* <Pessions /> */}
      <Skills />
      <Projects />
      <FooterContent />
    </>
  );
};

export default page;
