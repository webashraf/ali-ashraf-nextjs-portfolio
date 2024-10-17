import AboutMe from "./_components/_ABOUT_ME/AboutMe";
import FooterContent from "./_components/_Footer/_footer_contents";
import { AuroraBackgroundHero } from "./_components/_HERO/Aurora-hero";
import { VelocityScroll } from "./_components/_passions/Passions";
import Projects from "./_components/_projects/Projects";
import Skills from "./_components/_skills/Skills";

const page = () => {
  return (
    <>
      <AuroraBackgroundHero />
      <div className="pt-5">
        <VelocityScroll
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] "
          default_velocity={1}
          text="REACT NextJs TAILWIND BoothStrap Sadcn AntDesign NextUi GSAP FarmerMotion"
        />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <FooterContent />
    </>
  );
};

export default page;
