import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { codeCategories } from '../constants/index.js';
import { webDev, gamePad, python } from "../assets/images/index.js";
import { reactLogo, mobileDev, desktop } from '../assets/icons/index.js';

gsap.registerPlugin(ScrollTrigger); // Register the plugin

const About = () => {

  const aboutTextRef = useRef(null);



  // For the text/paragraphs
  useEffect(() => {
    // GSAP scroll animation
    gsap.fromTo(
      aboutTextRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutTextRef.current, // Element to trigger the animation
          start: 'top 80%', // Start when the top of the element is 80% down the viewport
        
        },
      }
    );
  }, []); // Empty dependency array to run once on mount

  // For the categories being tutored
  useEffect(() => {
    // GSAP scroll animation
    gsap.fromTo(
      '.category-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '.category-item', // Element to trigger the animation
          start: 'top 80%', // Start when the top of the element is 80% down the viewport
        },
      }
    );
  }, []); // Empty dependency array to run once on mount

  return (
    <section id="about" className="c-space my-20">
      {/* About Us Section */}
      <div ref={aboutTextRef} className="c-space text-white text-left">
        <p className="text-secondary text-white uppercase tracking-wider sm:text-[18px] text-[14px]">Introduction</p>
        <h2 className="head-text">About Me</h2>
        <div className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
          <p className="animatedText">Hi, I’m Abel Abarca, a Full-Stack Developer based in 
            Los Angeles. I have experience developing both websites and mobile apps, 
            and I’m currently a Code Instructor at Code Ninjas Studio City, 
            where I guide and mentor students in coding their own video games. 
            I graduated with a Bachelor's degree in Computer Science from California State University of Northridge, 
            where I built a strong foundation in software development. 
            My expertise includes front-end technologies like JavaScript, HTML, CSS, 
            React, and React Native, as well as backend technologies like Node.js, 
            Express.js, Python, Flask, and Java.</p>
          <br />
          <p className="animatedText">I’m skilled in tools such as After Effects, 
            Figma, Photoshop, and Illustrator, which I use to enhance design workflows. 
            I work with front-end frameworks like Tailwind, Bootstrap, and Bulma, and 
            use Webpack for asset bundling. I also have experience with the Stripe API 
            for e-commerce and rely on GitHub for version control. 
            If you're looking for a versatile developer with a passion for innovation, 
            I’d love to connect!</p>
        </div>
      </div>

      {/* Category Sections */}
      <div className="c-space grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

        {/* Item 1: Web Development */}
        <div className="category-item flex flex-col items-start p-6 bg-black-300 border border-gray-700 rounded-lg" >
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-500">
              <img src={reactLogo} alt="web development" className="w-12 h-12" />
            </div>
            <h5 className="text-lg font-semibold text-white ml-4">
              <span>Web</span> <br /> Development
            </h5>
          </div>
          <p className="mt-4 text-sm text-white">
            Building dynamic websites using HTML, CSS, and JavaScript, with expertise in frontend frameworks like React and backend development tools.
          </p>
        </div>

        {/* Item 2: Game Development */}
        <div className="category-item flex flex-col items-start p-6 bg-black-300 border border-gray-700 rounded-lg ">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-pink-500">
              <img src={mobileDev} alt="gamepad" className="w-12 h-12" />
            </div>
            <h5 className="text-lg font-semibold text-white ml-4">
              <span>Mobile App</span> <br /> Development
            </h5>
          </div>
          <p className="mt-4 text-sm text-white">
            Building iOS applications with React Native, delivering reliable, responsive, and user-friendly experiences.
          </p>
        </div>

        {/* Item 3: Mobile App Development */}
        <div className="category-item flex flex-col items-start p-6 bg-black-300 border border-gray-700 rounded-lg animate fadeInUp" style={{ animationDelay: "0s" }}>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-500">
              <img src={desktop} alt="desktop" className="w-12 h-12" />
            </div>
            <h5 className="text-lg font-semibold text-white ml-4">
              <span>Software</span> <br /> Development
            </h5>
          </div>
          <p className="mt-4 text-sm text-white">
            Object-Oriented Programming with Python, Java, and JavaScript, focusing on practical and efficient solutions.
          </p>
        </div>

        {/* Item 4: Quote that will hide */}
        <div className="category-item flex flex-col items-start p-6 hidden md:block lg:hidden">
          <div className="flex items-center">
            <h5 className="text-3xl font-semibold text-white underline decoration-blue-500">
              <span>STAY </span> <br /> BASED
            </h5>
          </div>
          <p className="mt-4 text-[17px] max-w-3xl leading-[30px] text-white">
            - Lil B THE BASEDGOD
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <div className="flex justify-between items-center mt-7">
        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
          <img src="/assets/left-arrow.png" alt="left arrow" />
        </button>
        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
          <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
        </button>
      </div> */}
    </section>
  );
};

export default About;
