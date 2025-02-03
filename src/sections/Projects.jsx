import React, { useState, useEffect, useRef } from "react";
import { projects } from "../constants";
import { bg, leftArrow, rightArrow } from "../assets/images";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRef = useRef(null);

  const handleNavigation = (direction) => {
    let newIndex = currentIndex;
    if (direction === "previous") {
      newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  };

  const handleSlideAnimation = (direction) => {
    const currentSlide = document.querySelector(`#slide-${currentIndex}`);
    const nextSlide = document.querySelector(`#slide-${direction === "next" ? (currentIndex === projects.length - 1 ? 0 : currentIndex + 1) : (currentIndex === 0 ? projects.length - 1 : currentIndex - 1)}`);
    
    // Fade out the current slide slowly
    gsap.to(currentSlide, { opacity: 0, y: 50, duration: 1 });  // Slow down the fade-out
    
    // Fade in the next slide slowly
    gsap.fromTo(
      nextSlide,
      { opacity: 0, y: 50 }, // Start with the next slide hidden and moved down
      { opacity: 1, y: 0, duration: 1 }  // Slow down the fade-in and give it more time
    );
  };


  useEffect(() => {
    // GSAP scroll animation
    gsap.fromTo(
      projectRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.5,
        scrollTrigger: {
          trigger: projectRef.current, // Element to trigger the animation
          start: 'top 80%', // Start when the top of the element is 80% down the viewport
        },
      }
    );
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    // Trigger fade-in for the initial slide with a slower transition
    const currentSlide = document.querySelector(`#slide-${currentIndex}`);
    gsap.fromTo(
      currentSlide,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2.5 }  // Slow down the initial fade-in
    );
  }, [currentIndex]);

  return (
    <section ref={projectRef} id="projects" className="c-space my-20">
      <h2 className="head-text c-space my-12">Projects</h2>

      <div className="c-space my-12 flex flex-col items-center">
        {projects.map((item, index) => (
          <div
            id={`slide-${index}`}
            key={item.id}
            className={`flex flex-wrap items-center justify-center p-4 gap-4 bg-black-300 border border-gray-700 rounded-3xl ${
              index !== currentIndex ? "hidden" : ""
            }`} // Hide non-active slides
          >
            <div className=" relative flex items-center justify-center w-full overflow-hidden h-[30vh] lg:h-[40vh] mb-10 rounded-lg">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover transform rotate-[1.8deg] scale-[1.1] translate-x-[2.5%] translate-y-[1.5%] border rounded-lg"
                  style={{
                    clipPath: "inset(5% 5% -5% 3.3%)", // Crop the image
                  }}
                  alt="Background"
                />
              </div>
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-white line-clamp-1 animatedText">
              {item.title}
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 sm:line-clamp-4 animatedText"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {item.des}
            </p>

            <div className="flex items-center justify-between w-full mt-7 mb-3">
              <div className="flex items-center space-x-2 animatedText">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-11 lg:h-10 w-10 h-10 flex justify-center items-center"
                  >
                    <img src={icon} alt={`Icon ${index}`} className="p-2 transform scale-125" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center animatedText">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p className="flex lg:text-xl md:text-xs text-sm text-white">
                    Check Repository
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="c-space flex justify-between items-center mt-7">
        <button
          className="arrow-btn"
          onClick={() => {
            handleNavigation("previous");
            handleSlideAnimation("previous");
          }}
        >
          <img src={leftArrow} alt="left arrow" />
        </button>

        <button
          className="arrow-btn"
          onClick={() => {
            handleNavigation("next");
            handleSlideAnimation("next");
          }}
        >
          <img src={rightArrow} alt="right arrow" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
