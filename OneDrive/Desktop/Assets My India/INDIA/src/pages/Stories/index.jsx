import React, { useState, useEffect } from 'react';
import StoriesIntro from './StoriesIntro';
import StoryGallery from './StoryGallery';
import StoryViewer from './StoryViewer';
import StoriesClosing from './StoriesClosing';
import PageTransition from '../../components/global/PageTransition';
import { stories } from '../../data/stories';

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Manage body scroll locking when the full-viewport story viewer is active
  useEffect(() => {
    if (selectedStory !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedStory]);

  const handleStart = () => {
    // Smooth scroll down past the intro to the story selection gallery
    const gallerySection = document.getElementById('story-gallery-section');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectStory = (story) => {
    const idx = stories.findIndex(s => s.id === story.id);
    setSelectedStory(story);
    setActiveIndex(idx);
  };

  const handleNextStory = () => {
    if (activeIndex < stories.length - 1) {
      const nextIdx = activeIndex + 1;
      setActiveIndex(nextIdx);
      setSelectedStory(stories[nextIdx]);
    }
  };

  const handlePrevStory = () => {
    if (activeIndex > 0) {
      const prevIdx = activeIndex - 1;
      setActiveIndex(prevIdx);
      setSelectedStory(stories[prevIdx]);
    }
  };

  const handleCloseViewer = () => {
    setSelectedStory(null);
    setActiveIndex(-1);
  };

  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#171717] min-h-screen flex flex-col relative">
        
        {selectedStory ? (
          <StoryViewer
            story={selectedStory}
            activeIndex={activeIndex}
            totalStories={stories.length}
            onNext={handleNextStory}
            onPrev={handlePrevStory}
            onClose={handleCloseViewer}
          />
        ) : (
          <>
            {/* Main Editorial Wall Journey */}
            <StoriesIntro onStart={handleStart} />
            
            <div id="story-gallery-section">
              <StoryGallery onSelectStory={handleSelectStory} />
            </div>
            
            <StoriesClosing />
          </>
        )}

      </div>
    </PageTransition>
  );
}
