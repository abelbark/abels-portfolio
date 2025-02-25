import { mealCalender, mouseTrap2, coupanion2, eyedressProj, cnTutoring, abelsPortfolio, helloWorld, miniIntro, abelCV, miniAbelCV, miniGoodWill, goodwill  } from "../assets/images";
import { p2, gsap, re } from "../assets/icons";
import { darkAWS, darkCSS, darkHTML, darkJS, darkReact, darkTailwind, firebase, wordpress, darkJava, darkFigma } from "../../public/assets/tech-logos";
import { useState, useEffect } from "react";

// Make sure to return the updated array on window resize
const getImageStories = () => {
  if (window.innerWidth <= 520) {
    return [
      { imgURL: miniIntro },
      { imgURL: miniGoodWill },
      { imgURL: miniAbelCV },
    ];
  } else {
    return [
      { imgURL: helloWorld },
      { imgURL: goodwill },
      { imgURL: abelCV },
    ];
  }
};

// // Preload images to avoid delays
// const preloadImages = (images) => {
//   images.forEach((img) => {
//     const imgElement = new Image();
//     imgElement.src = img.imgURL 
//   });
// };

export const useImageStories = () => {
  const [imageStories, setImageStories] = useState(getImageStories()); // Initial state

  useEffect(() => {

    // preloadImages(getImageStories());
    const resizeListener = () => {
      setImageStories(getImageStories()); // Update the stories on resize
    };
    
    window.addEventListener('resize', resizeListener);

    // Clean up listener when the component is unmounted
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return imageStories;
};


export const navLinks = [
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Projects", href: "#projects" },
    { id: 4, name: "Contact", href: "#contact" },
];




export const projects = [
  {
    id: 1,
    title: "Code Ninjas Tutoring Service Site",
    des: "Developed a responsive website for Code Ninjas Studio City, showcasing their diverse tutoring services, including web development, where I will also be an instructor.",
    img: cnTutoring,
    iconLists: [wordpress, darkCSS, darkFigma],
    link: "https://tutoring.codeninjasstudiocity.com",
  },
  {
    id: 2,
    title: "Abel's Portfolio (Current Page)",
    des: "Developed a responsive portfolio website to showcase my expertise and background in computer science, allowing visitors to learn more about my work.",
    img: abelsPortfolio,
    iconLists:[darkReact, darkTailwind, darkFigma],
    link: "https://github.com/abelbark/abels-portfolio",
  },
  {
    id: 3,
    title: "Eyedress Tamagotchi Game (WIP)",
    des: "Creating an interactive digital pet inspired by indie artist Eyedress using MakeCode Arcade, with an LCD display and data management via EYESPI.",
    img: eyedressProj,
    iconLists: [darkJS, darkFigma],
    link: "https://arcade.makecode.com/S40020-80839-16047-63240",
  },
  {
    id: 4,
    title: "Mouse Trap A* Algorithm Game",
    des: "Implemented maze generation and the A* algorithm to create engaging, dynamic gameplay, while designing an interactive graphical user interface (GUI) in Processing",
    img: mouseTrap2,
    iconLists: [darkJava, darkFigma],
    link: "https://github.com/abelbark/Mouse-Trap",
  },
  {
    id: 5,
    title: "Coupanion Mobile Discount Service",
    des: "Developed a full-stack mobile app for business owners to easily list services, products, and promotions, streamlining their offerings and customer reach.",
    img: coupanion2,
    iconLists: [darkReact, darkAWS, firebase, darkFigma],
    link: "https://github.com/kyle-hebron/coupanion",
  },
  {
    id: 6,
    title: "Salt N Prepper Meal Planner",
    des: "Partnered with a team to build a dynamic, responsive online fitness and health journal, leading the development of the full-stack web application.",
    img: mealCalender,
    iconLists: [darkHTML, darkCSS, darkJS, darkFigma],
    link: "https://github.com/abelbark/Meal-Planner",
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