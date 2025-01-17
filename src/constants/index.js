import { supreme1, supreme2, supreme3, supreme4, webDev, python, gamePad, mealCalender, mouseTrap2, coupanion2, eyedressProj, cnTutoring,  } from "../assets/images";
import { introVid, abelll, pastEyedress } from "../assets/videos";
import { p2, gsap, re, three, ts } from "../assets/icons";

export const imageStories = [
    {
        imgURL: supreme1 
    },
    {
        imgURL: supreme2
    },
    {
        // imgURL: supreme3
        videoURL: pastEyedress
    },
    {
        // imgURL: supreme4
        videoURL: introVid,
    }
];

export const navLinks = [
    { id: 1, name: "About", href: "#about" },
    { id: 3, name: "Pricing", href: "#pricing" },
    { id: 4, name: "Contact", href: "#contact" },
];



export const codeCategories = [
  {
    imgURL: webDev,
    title: 'Web Development',
    bgColor: '#3490dc', // Example color for web development
  },
  {
    imgURL: python,
    title: 'Introductory Programming',
    bgColor: '#f59e0b', // Example color for Python
  },
  {
    imgURL: gamePad,
    title: 'Game Development',
    bgColor: '#10b981', // Example color for game development
  },
];



export const projects = [
  {
    id: 1,
    title: "Code Ninjas Tutoring Service Site",
    des: "Developed a responsive website for Code Ninjas Studio City, showcasing their diverse tutoring services, including web development, where I will also be an instructor.",
    img: cnTutoring,
    iconLists: [gsap, re, three, ts],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Abel's Portfolio (Current Page)",
    des: "Developed a responsive portfolio website to showcase my expertise and background in computer science, allowing visitors to learn more about my work.",
    img: p2,
    iconLists:[gsap, re, three, ts],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Eyedress Tamagotchi Game",
    des: "Creating an interactive digital pet inspired by indie artist Eyedress using MakeCode Arcade, with an LCD display and data management via EYESPI.",
    img: eyedressProj,
    iconLists: [gsap, re, three, ts],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Mouse Trap A* Algorithm Game",
    des: "Implemented maze generation and the A* algorithm to create engaging, dynamic gameplay, while designing an interactive graphical user interface (GUI) in Processing",
    img: mouseTrap2,
    iconLists: [gsap, re, three, ts],
    link: "/ui.apple.com",
  },
  {
    id: 5,
    title: "Coupanion Mobile Discount Service",
    des: "Developed a full-stack mobile app for business owners to easily list services, products, and promotions, streamlining their offerings and customer reach.",
    img: coupanion2,
    iconLists: [gsap, re, three, ts],
    link: "/ui.apple.com",
  },
  {
    id: 6,
    title: "Salt N Prepper Meal Planner",
    des: "Partnered with a team to build a dynamic, responsive online fitness and health journal, leading the development of the full-stack web application.",
    img: mealCalender,
    iconLists: [gsap, re, three, ts],
    link: "/ui.apple.com",
  },
];



export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
