import React, { useEffect, useRef, useState } from 'react';
import Stories from 'react-insta-stories';
import { useImageStories } from '../constants';
import gsap from 'gsap';

const Hero = () => {
  const heroTextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [resizeTimeout, setResizeTimeout] = useState(null);

  const imageStories = useImageStories();
  const stories = imageStories.map((story, index) => ({
    url: story.imgURL || story.videoURL,
    type: story.videoURL ? 'video' : 'image',
    duration: 3000,
    id: `${index}-${resetTrigger}`, // Forces a refresh after resize
  }));

  const handleStoryClick = (event) => {
    const screenWidth = window.innerWidth;
    const clickPosition = event.clientX;
    setCurrentIndex((prevIndex) =>
      clickPosition < screenWidth / 2
        ? prevIndex === 0 ? stories.length - 1 : prevIndex - 1
        : prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsPaused(true); // Pause during resize
      if (resizeTimeout) clearTimeout(resizeTimeout);

      setResizeTimeout(
        setTimeout(() => {
          setIsPaused(false); // Unpause after resizing stops
          setResetTrigger((prev) => prev + 1); // Force a refresh
        }, 300)
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [resizeTimeout]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stories.length]);

  useEffect(() => {
    if (currentIndex === 0 && heroTextRef.current) {
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
        key={resetTrigger} // Forces a full remount after resize
        stories={stories}
        defaultInterval={3000}
        width="100vw"
        height="100vh"
        loop={true}
        keyboardNavigation={true}
        currentIndex={currentIndex}
        isPaused={isPaused}
        onStoryEnd={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)}
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
      />
    </section>
  );
};

export default Hero;
