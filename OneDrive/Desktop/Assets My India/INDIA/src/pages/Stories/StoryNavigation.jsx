import React from 'react';

export default function StoryNavigation({ story, activeIndex, totalStories, onNext, onPrev, onClose }) {
  const currentChapter = String(activeIndex + 1).padStart(2, '0');
  const totalChapters = String(totalStories).padStart(2, '0');

  return (
    <div className="w-full bg-[#1b1b1b]/95 border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-30 select-none backdrop-blur-md">
      
      {/* Return to honeycomb link */}
      <button
        onClick={onClose}
        className="font-sans text-[10px] font-bold text-white/70 hover:text-white flex items-center space-x-1 tracking-widest uppercase cursor-pointer transition-colors focus-visible:outline-[#E8752A]"
        aria-label="Return to the stories honeycomb grid index"
      >
        <span>← ALL STORIES</span>
      </button>

      {/* Center Story Title & Tracker */}
      <div className="hidden sm:flex items-center space-x-4">
        <span className="font-mono text-xs text-[#E8752A] tracking-wider uppercase font-semibold">
          {currentChapter} / {totalChapters}
        </span>
        <div className="h-[12px] w-[1px] bg-white/20" />
        <span className="font-serif text-sm text-white tracking-wide truncate max-w-xs uppercase">
          {story.title}
        </span>
      </div>

      {/* Prev / Next story controls */}
      <div className="flex items-center space-x-6 text-[10px] font-mono tracking-widest uppercase text-white/50">
        <button
          onClick={onPrev}
          disabled={activeIndex === 0}
          className="hover:text-white transition-colors cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Load previous story cover"
        >
          PREVIOUS
        </button>

        <button
          onClick={onNext}
          disabled={activeIndex === totalStories - 1}
          className="hover:text-[#E8752A] text-[#E8752A] transition-colors font-bold cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Load next story cover"
        >
          NEXT
        </button>
      </div>

    </div>
  );
}
