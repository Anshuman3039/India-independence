import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlagAnimation from './FlagAnimation';
import WelcomeSequence from './WelcomeSequence';
import IndiaReveal from './IndiaReveal';
import SkipIntro from './SkipIntro';

export default function LoadingExperience({ onComplete, forcePlay = false }) {
  const [stage, setStage] = useState(() => {
    // Check localStorage for returning visitors synchronously
    const hasPlayed = localStorage.getItem('india_intro_played') === 'true';
    if (hasPlayed && !forcePlay) {
      return 'done';
    }
    return 'black';
  });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const audioRef = useRef(null);

  // Monitor prefers-reduced-motion & initial checks
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const listener = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    if (stage === 'done') {
      onComplete();
    }

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, [onComplete, stage]);

  // Audio Playback Autoplay and User-Interaction Fallback (Runs once on mount)
  useEffect(() => {
    const player = audioRef.current;
    if (!player) return;

    // Silent preloader for cultural background images
    const imagesToPreload = [
      "/images/culture/dance-kathak.jpg",
      "/images/culture/festival-durga.jpg",
      "/images/culture/dance-garba.jpg",
      "/images/culture/dance-bhangra.jpg",
      "/images/culture/dance-odissi.jpg",
      "/images/stories/maharashtra-citylife.jpg",
      "/images/culture/dance-bharatanatyam.jpg",
      "/images/culture/art-kalamkari.jpg",
      "/images/culture/craft-channapatna.jpg",
      "/images/culture/dance-kathakali.jpg",
      "/images/culture/festival-bihu.jpg"
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    player.volume = 1.0;
    player.currentTime = 0;
    
    console.log("INTRO AUDIO CREATED");
    console.log("INTRO AUDIO SOURCE:", player.src);
    console.log("INTRO AUDIO PLAY REQUESTED");

    const playOnInteraction = () => {
      if (player) {
        console.log("INTRO AUDIO PLAY REQUESTED (INTERACTION)");
        player.play().then(() => {
          console.log("INTRO AUDIO PLAYING (INTERACTION)");
          cleanupListeners();
        }).catch(e => console.error("INTRO AUDIO PLAY FAILED", e));
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', playOnInteraction);
      window.removeEventListener('keydown', playOnInteraction);
      window.removeEventListener('touchstart', playOnInteraction);
    };

    const playPromise = player.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("INTRO AUDIO PLAYING");
        })
        .catch((err) => {
          console.error("INTRO AUDIO PLAY FAILED", err);
          window.addEventListener('click', playOnInteraction);
          window.addEventListener('keydown', playOnInteraction);
          window.addEventListener('touchstart', playOnInteraction);
        });
    }

    const onLoadedMetadata = () => console.log("[EVENT] loadedmetadata");
    const onCanPlay = () => console.log("[EVENT] canplay");
    const onPlaying = () => console.log("[EVENT] playing");
    const onPause = () => console.log("[EVENT] pause");
    const onEnded = () => console.log("[EVENT] ended");
    const onError = () => console.error("[EVENT] error:", player.error);

    player.addEventListener('loadedmetadata', onLoadedMetadata);
    player.addEventListener('canplay', onCanPlay);
    player.addEventListener('playing', onPlaying);
    player.addEventListener('pause', onPause);
    player.addEventListener('ended', onEnded);
    player.addEventListener('error', onError);

    return () => {
      cleanupListeners();
      player.removeEventListener('loadedmetadata', onLoadedMetadata);
      player.removeEventListener('canplay', onCanPlay);
      player.removeEventListener('playing', onPlaying);
      player.removeEventListener('pause', onPause);
      player.removeEventListener('ended', onEnded);
      player.removeEventListener('error', onError);
      console.log("INTRO AUDIO PAUSED (UNMOUNT)");
      player.pause();
    };
  }, []);

  // Audio Fade Out during Reveal Stage (2.5 seconds)
  useEffect(() => {
    if (stage === 'reveal' && audioRef.current) {
      const player = audioRef.current;
      const fadeInterval = 50;
      const fadeDuration = 2000; // Fade out over 2.0s
      const steps = fadeDuration / fadeInterval;
      let currentStep = 0;
      const startVolume = player.volume;

      console.log("[DEBUG] AUDIO VOLUME CHANGING (FADE OUT STARTED)");

      const fadeTimer = setInterval(() => {
        currentStep++;
        const newVolume = Math.max(0, startVolume * (1 - currentStep / steps));
        console.log(`[DEBUG] AUDIO VOLUME CHANGED: ${newVolume.toFixed(2)}`);
        
        if (newVolume <= 0.02) {
          player.volume = 0;
          player.pause();
          console.log("[DEBUG] AUDIO PAUSED (FADE OUT COMPLETE)");
          clearInterval(fadeTimer);
        } else {
          player.volume = newVolume;
        }
      }, fadeInterval);

      return () => clearInterval(fadeTimer);
    }
  }, [stage]);

  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    localStorage.setItem('india_intro_played', 'true');
    setStage('done');
    onComplete();
  };

  const handleFlagComplete = () => {
    setStage('greetings');
  };

  const handleGreetingsComplete = () => {
    setStage('reveal');
  };

  const handleRevealComplete = () => {
    localStorage.setItem('india_intro_played', 'true');
    setStage('done');
    onComplete();
  };

  // Timeline stage pacing control
  useEffect(() => {
    if (stage === 'black') {
      const timer = setTimeout(() => {
        setStage('flag');
      }, isReducedMotion ? 1000 : 2500);
      return () => clearTimeout(timer);
    }

    if (stage === 'flag') {
      const timer = setTimeout(() => {
        handleFlagComplete();
      }, isReducedMotion ? 1000 : 2500);
      return () => clearTimeout(timer);
    }
  }, [stage, isReducedMotion]);

  if (stage === 'check' || stage === 'done') {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-colors duration-1000 ${
        stage === 'black' ? 'bg-black' : 'bg-[#F7F4EE]'
      }`}
      role="dialog"
      aria-label="Welcome Introduction Sequence"
      aria-modal="true"
    >
      {/* Vande Mataram Audio Element */}
      <audio 
        ref={audioRef} 
        src="/audio/vande_mataram.m4a" 
        preload="auto"
      />

      <SkipIntro onSkip={handleSkip} />

      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {stage === 'black' && (
            <motion.div
              key="black-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white/20 font-serif italic text-xs tracking-[0.2em] uppercase select-none text-center"
            >
              Allow the opening to breathe...
            </motion.div>
          )}

          {stage === 'flag' && (
            <motion.div
              key="flag-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <FlagAnimation isReducedMotion={isReducedMotion} />
            </motion.div>
          )}

          {stage === 'greetings' && (
            <motion.div
              key="greetings-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <WelcomeSequence 
                isReducedMotion={isReducedMotion} 
                onComplete={handleGreetingsComplete} 
              />
            </motion.div>
          )}

          {stage === 'reveal' && (
            <motion.div
              key="reveal-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center"
            >
              <IndiaReveal 
                isReducedMotion={isReducedMotion} 
                onComplete={handleRevealComplete} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
