import React, { useEffect, useRef } from 'react';
import Stories from 'react-insta-stories';
import { imageStories } from '../constants';
import gsap from 'gsap';

const Hero = () => {
  
  const heroTextRef = useRef(null);

  // Convert imageStories to the format expected by the Stories component
  const stories = imageStories.map((story) => ({
    url: story.imgURL || story.videoURL,
    type: story.videoURL ? 'video' : 'image',
    duration: 3000, // Optional: set duration for each image in ms
  }));

  useEffect(() => {
      // GSAP animation after the specified delay
      gsap.fromTo(
        heroTextRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          delay: 0.5,
        }
      );
  }, []); // Empty dependency array to run once on mount


  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden">
      <Stories
        stories={stories} // Pass the stories array
        defaultInterval={3000} // Optional: Default duration if not provided per story
        width="100vw" // Set the width to the full viewport width
        height="100vh" // Set the height to the full viewport height
        loop={true} // Loop the stories
        preventDefault={true} // Prevent default event handling
        storyContainerStyles={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        storyStyles={{
          objectFit: 'cover', // Ensure the image covers the full section without black space
          width: '100vw', // Full viewport width
          height: '100vh', // Full viewport height
        }}
        progressContainerStyles={{
          position: 'absolute',
          bottom: 20,
          width: '45%',
          gap: 5,
          zIndex: 40,
        }}
        progressStyles={{
          flex: 1,
        }}
      />
      {/* Overlay text */}
      <div
        ref={heroTextRef}
        className="absolute left-0 bottom-28 sm:bottom-32 px-8 sm:px-16 text-white text-left"
      >
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
          Welcome to
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Abel's Portfolio
        </h2>
        <p className="mt-4 text-[17px] max-w-3xl leading-[30px]">
          
        </p>
      </div>
    </section>
  );
};

export default Hero;
