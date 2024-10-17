/* eslint-disable prettier/prettier */
import { IconCloud } from "../_Animations_Genaretor/CloudPropsSkills";
import Container from "../_Container/Container";

const Skills = () => {
  const slugs = [
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "postgresql",
    "docker",
    "tailwindcss",
    "bootstrap",
    "nextui",
    "zod",
    "framer",
    "",
    "axios",
    "elementor",
    "woo",
    "tanstack",
    "lottie",
    "firebase",
    "stripe",
    "wordpress",
    "webflow",
    "nodeJs",
    "daisyui",
    "flowbite",
    "redux",
    "mongoose",
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "express",
    "firebase",
    "vercel",
    "netlify",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];
  const expertise =
    "Expertise: HTML, CSS, Bootstrap, Tailwind, daisyui, flowbite, material-tailwind, shadcn, Ant Design, NextUi, nexios-http, JavaScript, TypeScript, DOM, OOP, React JS, Redux, nextJS, Express JS, MongoDB, Mongoose, Jod, Joi";

  const comfortable =
    "Comfortable: React-hook-form, swiperJs, GSAP, Lottie, Firebase, Stripe JS, AmarPay, finsweet";

  const familiar = "Familiar: Spline, Node JS, Farmer Motion";

  const tools =
    "Tools: Axios, tanstack query, React Router, JWT, Chrome dev tools, GitHub, netlify, vercel, VS code";

  const interpersonalSkills =
    "Interpersonal: Expert on WordPress and webflow customization, comfortable with canva, MS Excel, Photoshop";

  return (
    <Container>
      <div className="flex items-center flex-col-reverse lg:flex-row gap-5 justify-center mt-10 lg:px-0 px-5">
        <div className="lg:w-[50%] pr-10">
          <h2 className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5 ">
            Technical Proficiencies
          </h2>
          {/* <TextGenerateEffect textSize="sm" words={expertise} /> */}
          {/* <TextGenerateEffect words={comfortable} />
          <TextGenerateEffect words={familiar} />
          <TextGenerateEffect words={tools} />
          <TextGenerateEffect words={interpersonalSkills} /> */}
          <li>{expertise}</li>
          <li>{comfortable}</li>
          <li>{familiar}</li>
          <li>{tools}</li>
          <li>{interpersonalSkills}</li>
        </div>
        <div className="lg:w-[50%] w-full relative flex size-full items-center justify-center overflow-hidden   bg-background lg:px-20 pb-20  lg:border-r-4 lg:border-sky-600">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
