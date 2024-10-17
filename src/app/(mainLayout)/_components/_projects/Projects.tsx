/* eslint-disable prettier/prettier */
"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
// import { ReactLenis } from "lenis/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
// import { ReactLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";

import { LinkPreview } from "../_Animations_Genaretor/LinkGenerator";

// const projectsOld = [
//   {
//     title: "SUMMER SPORTS EXCELLENCE - MERN Stuck",
//     description:
//       "mplement firebase authentication like google, github, and email/password authentication. And use private route. You can add, update, delete and search for a toy. And awesome slider, animation and responsive home page. A beautiful car gallery has been added to the home page. Which becomes a slider when you click on the image.",
//     src: "rock.jpg",
//     link: "https://res.cloudinary.com/da5dhxzen/image/upload/v1729106795/Summer_Sports_Excellence1-d8d19bda_hdjr97.png",
//     frontendCode: "https://github.com/webashraf/summer-sports-excellence-",
//     backendCode: "https://github.com/webashraf/summer-sports-excellence-server",
//     liveLink: "https://a12-summer-camp.web.app/",
//     color: "#5196fd",
//   },
//   {
//     title: "VroomVroomPlay - MERN Stuck",
//     description:
//       "Implement three dashboard for admin, instructor, and student. An admin can Approve, remove, give feedback, assign rules. Instructor: Add classes. User: Select, purchase courses. Course select button disabled when seat is below 1. And scroll animation, cartoon animation, dark-light mood",
//     src: "rock.jpg",
//     link: "https://res.cloudinary.com/da5dhxzen/image/upload/v1729152929/screencapture-vroomvroomplay-web-app-2024-10-17-01_38_40_zv5ufm.png",
//     frontendCode: "https://github.com/webashraf/vroomVroomPlay",
//     backendCode: "https://github.com/webashraf/vroomVroomPlay_server",
//     liveLink: "https://vroomvroomplay.web.app/",
//     color: "#5196fd",
//   },
//   {
//     title: "GameGrounds - MERN Stuck",
//     description:
//       "Responsive design with advanced animations for seamless UI.Secure authentication, facility management, booking system, and payments. Admin and user dashboards for managing facilities and bookings. TECHNOLOGY - vite, react-router, gsap and farmer motion animation, MongoDB, mongose, and express JS.",
//     src: "rock.jpg",
//     link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729179726/game-grounds-frontend_sw57pe.png",
//     frontendCode: "https://github.com/webashraf/GameGrounds-Frontend",
//     backendCode:
//       "https://github.com/webashraf/sports-facility-booking-platform/tree/main",
//     liveLink:
//       "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180011/game-grounds-frontend_sh08kf.png",
//     color: "#5196fd",
//   },
//   {
//     title: "Flora-fusion-nursery - MERN Stuck",
//     description:
//       "Smooth animations with GSAP and Framer Motion for enhanced user experience. Product management, cart functionality, and secure payments via Stripe. Responsive design and efficient state management with Redux. TECHNOLOGY - vite, react-router, gsap and farmer motion animation, MongoDB, mongose, and express JS.",
//     src: "rock.jpg",
//     link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180449/flora-fusion-nursery_dzh4gk.png",
//     frontendCode: "https://github.com/webashraf/GameGrounds-Frontend",
//     backendCode:
//       "https://github.com/webashraf/sports-facility-booking-platform/tree/main",
//     liveLink:
//       "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180377/flora-fusion-nursery_j7pn0s.png",
//     color: "#5196fd",
//   },
//   {
//     title: "Cook-storia-culinary - NextJs and MERN",
//     description:
//       "This application offers a robust user authentication system for login, registration, password management, and profile updates. Users can engage with recipes by upvoting, downvoting, and commenting, fostering community interaction. Premium membership features are integrated with Stripe, restricting access to exclusive recipes. Users can create and manage their own recipes with rich text and images, while advanced search and filtering enhance usability. Protected routes ensure only premium members access exclusive content, and an admin dashboard allows for effective management of users and recipes. Built with Next.js, Tailwind CSS, and MongoDB, this platform provides a seamless user experience.",
//     src: "rock.jpg",
//     link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729181238/cook-storia-culinary_hueyle.png",
//     frontendCode: "https://github.com/webashraf/cook-storia-culinary-frontend",
//     backendCode: "https://github.com/webashraf/cookstoria-server",
//     liveLink:
//       "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729181238/cook-storia-culinary_hueyle.png",
//     color: "#5196fd",
//   },
// ];
const projects = [
  {
    title: "SUMMER SPORTS EXCELLENCE - MERN Stack",
    description:
      "A dynamic web application that integrates Firebase authentication for seamless user login via Google, GitHub, or email/password. Users can easily manage toys by adding, updating, deleting, and searching through a visually appealing interface featuring a responsive homepage with animations. The application showcases a beautiful car gallery that transforms into an interactive slider upon image clicks.",
    src: "rock.jpg",
    link: "https://res.cloudinary.com/da5dhxzen/image/upload/v1729106795/Summer_Sports_Excellence1-d8d19bda_hdjr97.png",
    frontendCode: "https://github.com/webashraf/summer-sports-excellence-",
    backendCode: "https://github.com/webashraf/summer-sports-excellence-server",
    liveLink: "https://a12-summer-camp.web.app/",
    color: "#FFB6C1", // Light pink
    features: [
      "Firebase authentication (Google, GitHub, Email/Password)",
      "Private routes for user management",
      "Add, update, delete, and search for toys",
      "Responsive design with animations",
      "Image slider for car gallery",
    ],
    technologies: ["React", "Firebase", "MERN Stack", "CSS", "JavaScript"],
  },
  {
    title: "VroomVroomPlay - MERN Stack",
    description:
      "This comprehensive platform features three distinct dashboards for admin, instructors, and students. Administrators have the ability to approve, remove, and provide feedback on classes, while instructors can create and manage course offerings. Students can select and purchase courses, with intuitive UI elements disabling selections when seats are unavailable. The application includes engaging scroll animations and a dark-light mode for enhanced user experience.",
    src: "rock.jpg",
    link: "https://res.cloudinary.com/da5dhxzen/image/upload/v1729152929/screencapture-vroomvroomplay-web-app-2024-10-17-01_38_40_zv5ufm.png",
    frontendCode: "https://github.com/webashraf/vroomVroomPlay",
    backendCode: "https://github.com/webashraf/vroomVroomPlay_server",
    liveLink: "https://vroomvroomplay.web.app/",
    color: "#BFD3C1", // Soft green
    features: [
      "Three dashboards for admin, instructor, and student",
      "Admin functionalities: Approve, remove, feedback",
      "Instructor can add classes",
      "Course selection based on seat availability",
      "Scroll and cartoon animations with dark-light mode",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "GameGrounds - MERN Stack",
    description:
      "An engaging and responsive application that utilizes advanced animations for a smooth user interface. It features secure authentication, a comprehensive facility management system, and a robust booking system with payment integration. The platform includes both admin and user dashboards to efficiently manage facilities and bookings, ensuring an excellent user experience.",
    src: "rock.jpg",
    link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729179726/game-grounds-frontend_sw57pe.png",
    frontendCode: "https://github.com/webashraf/GameGrounds-Frontend",
    backendCode:
      "https://github.com/webashraf/sports-facility-booking-platform/tree/main",
    liveLink:
      "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180011/game-grounds-frontend_sh08kf.png",
    color: "#FFDAB9", // Peach puff
    features: [
      "Responsive design with advanced animations",
      "Secure authentication system",
      "Facility management and booking system",
      "Admin and user dashboards for management",
      "Payment integration",
    ],
    technologies: [
      "Vite",
      "React",
      "GSAP",
      "Framer Motion",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    title: "Flora-Fusion-Nursery - MERN Stack",
    description:
      "A beautifully designed e-commerce platform that offers smooth animations using GSAP and Framer Motion for an engaging user experience. It includes product management, a shopping cart functionality, and secure payment processing through Stripe. The responsive design is paired with efficient state management using Redux, making it a well-rounded solution for online shopping.",
    src: "rock.jpg",
    link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180449/flora-fusion-nursery_dzh4gk.png",
    frontendCode: "https://github.com/webashraf/GameGrounds-Frontend",
    backendCode:
      "https://github.com/webashraf/sports-facility-booking-platform/tree/main",
    liveLink:
      "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729180377/flora-fusion-nursery_j7pn0s.png",
    color: "#E6E6FA", // Lavender
    features: [
      "Smooth animations with GSAP and Framer Motion",
      "Product management system",
      "Cart functionality",
      "Secure payments via Stripe",
      "Responsive design and state management with Redux",
    ],
    technologies: [
      "Vite",
      "React",
      "GSAP",
      "Framer Motion",
      "MongoDB",
      "Express.js",
      "Redux",
    ],
  },
  {
    title: "Cook-Storia-Culinary - Next.js and MERN",
    description:
      "An innovative recipe-sharing platform that features a robust user authentication system for managing logins, registrations, and password updates. Users can engage with recipes through upvoting, downvoting, and commenting, promoting community interaction. The platform includes premium membership options, integrated with Stripe for payment processing, allowing users to create and manage recipes enriched with rich text and images. Advanced search and filtering functionalities enhance usability, while protected routes ensure exclusive access for premium members. The admin dashboard streamlines user and recipe management, all built with Next.js, Tailwind CSS, and MongoDB for a seamless experience.",
    src: "rock.jpg",
    link: "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729181238/cook-storia-culinary_hueyle.png",
    frontendCode: "https://github.com/webashraf/cook-storia-culinary-frontend",
    backendCode: "https://github.com/webashraf/cookstoria-server",
    liveLink:
      "https://res.cloudinary.com/dyalzfwd4/image/upload/v1729181238/cook-storia-culinary_hueyle.png",
    color: "#FFFAF0", // Floral white
    features: [
      "Robust user authentication system",
      "Community interaction through upvoting and commenting",
      "Premium membership with Stripe integration",
      "Recipe creation and management with rich text and images",
      "Advanced search and filtering options",
      "Protected routes for premium content access",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Stripe",
      "JavaScript",
    ],
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

            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Transforming Ideas into <br /> Interactive Realities 👇
            </h1>
          </div>
        </div>

        <div className="text-white w-full bg-slate-950  mx-auto">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;

            return (
              <Card
                key={`p_${i}`}
                backendCode={project?.backendCode}
                color={project?.color}
                description={project?.description.slice(0, 80)}
                features={project?.features}
                frontendCode={project?.frontendCode}
                i={i}
                link={project?.link}
                liveLink={project?.liveLink}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                src={project?.src}
                targetScale={targetScale}
                technologies={project?.technologies}
                title={project?.title}
                url={project?.link}
              />
            );
          })}
        </div>

        <footer className="group bg-slate-950  ">
          <div className="flex flex-col justify-center items-center bg-whit mb-10">
            <div className="z-10 flex min-h-64d items-center justify-center">
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                See more
              </button>
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
  link: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  frontendCode: string;
  backendCode: string;
  liveLink: string;
  features: string[];
  technologies: string[];
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  link,
  url,
  color,
  progress,
  range,
  targetScale,
  frontendCode,
  backendCode,
  liveLink,
  features,
  technologies,
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
      className="h-screen flex items-center justify-center sticky top-0 p-5"
    >
      <motion.div
        className={`flex flex-col relative -top-[25%] h-[600px] lg:w-[70%] w-[100%] rounded-md lg:p-10 p-5 origin-top bg-black/60 backdrop-blur-xl`}
        style={{
          // backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-2xl text-center font-semibold mb-5">{title}</h2>
        <div className={`flex flex-col lg:flex-row h-full mt- gap-10`}>
          <ScrollShadow
            hideScrollBar
            className="lg:w-[40%] w-full h-[90%] lg:block hidden"
            offset={100}
            orientation="horizontal"
          >
            <div className={` relative top-[10%]`}>
              <p className="text-white text-xl md:text-xl max-w-3xl mx-auto mb-3">
                {description}
              </p>
              <div>
                <ul>
                  <h4>Features-</h4>
                  {features?.map((feature, index) => (
                    <li key={index}>✨ {feature}. </li>
                  ))}
                </ul>

                <div className="mt-3">
                  <h4>Technologies-</h4>

                  <div className="flex gap-2 flex-wrap">
                    {technologies?.map((technology, index) => (
                      <button
                        key={index}
                        className="bg-whit text-sm underline text-blac px- rounded-full bord border-[#cacaca]"
                      >
                        #{technology}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <h4>Links-</h4>
                  <div className="flex gap-2">
                    <LinkPreview
                      className="font-bold uppercase hover:underline"
                      url={liveLink}
                    >
                      <p className="">Live</p>
                    </LinkPreview>
                    <LinkPreview
                      className="font-bold uppercase hover:underline"
                      url={backendCode}
                    >
                      <p className="">Backend code</p>
                    </LinkPreview>
                    <LinkPreview
                      className="font-bold uppercase hover:underline"
                      url={frontendCode}
                    >
                      <p className="">Frontend code</p>
                    </LinkPreview>
                  </div>
                </div>
              </div>
            </div>
          </ScrollShadow>

          <div
            className={`relative lg:w-[60%] w-full h-full rounded-lg overflow-hidden `}
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
          <LinkPreview className="font-bold" url={liveLink}>
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
