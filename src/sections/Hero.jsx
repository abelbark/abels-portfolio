import React, { useEffect, useRef, useState } from 'react';
import Stories from 'react-insta-stories';
import { imageStories } from '../constants';
import gsap from 'gsap';

const Hero = () => {
  const heroTextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current story index

  // Convert imageStories to the format expected by the Stories component
  const stories = imageStories.map((story) => ({
    url: story.imgURL || story.videoURL,
    type: story.videoURL ? 'video' : 'image',
    duration: 3000, // Optional: set duration for each image in ms
  }));

  // Handle click to navigate to the next or previous story
  const handleStoryClick = (event) => {
    const screenWidth = window.innerWidth;
    const clickPosition = event.clientX;

    if (clickPosition < screenWidth / 2) {
      // Go to the previous story if clicked on the left half of the screen
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
    } else {
      // Go to the next story if clicked on the right half of the screen
      setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        // Loop back to the last story if at the beginning
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? stories.length - 1 : prevIndex - 1
        );
      } else if (event.key === 'ArrowRight') {
        // Loop back to the first story if at the end
        setCurrentIndex((prevIndex) =>
          prevIndex === stories.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stories.length]);
  

  useEffect(() => {
    if (currentIndex === 0 && heroTextRef.current) {
      // GSAP animation only on the first slide
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
    }
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      onClick={handleStoryClick}
    >
      <Stories
        stories={stories}
        defaultInterval={3000}
        width="100vw"
        height="100vh"
        loop={true}
        keyboardNavigation={true}
        currentIndex={currentIndex}
        onStoryEnd={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)}
        onStoryStart={() => setCurrentIndex((prevIndex) => prevIndex)}
        preventDefault={true}
        storyContainerStyles={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        storyStyles={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
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

    </section>
  );
};

export default Hero;
