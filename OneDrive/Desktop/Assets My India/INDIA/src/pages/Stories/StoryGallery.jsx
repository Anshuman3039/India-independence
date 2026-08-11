import React from 'react';
import { stories } from '../../data/stories';

export default function StoryGallery({ onSelectStory }) {
  // Hexagon clip-path polygon (standard vertical hexagon)
  const hexClipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  // Helper to map positions relative to hexagon width (w) and height (h)
  const getCellPositions = (w, h) => [
    { id: "rain", left: w * 0.75, top: 0 },
    { id: "train", left: 0, top: h * 0.5 },
    { id: "weaver", left: w * 1.5, top: h * 0.5 },
    { id: "chai", left: w * 0.75, top: h },
    { id: "sea", left: 0, top: h * 1.5 },
    { id: "lookup", left: w * 1.5, top: h * 1.5 }
  ];

  return (
    <div className="w-full bg-[#171717] py-28 px-6 md:px-12 flex flex-col items-center justify-center select-none overflow-hidden min-h-[90vh]">
      
      <div className="text-center space-y-4 mb-20">
        <span className="font-mono text-xs text-[#E8752A] tracking-[0.4em] uppercase font-bold block">
          MANY STORIES. ONE COUNTRY.
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-white font-normal uppercase tracking-widest">
          Explore India Through Moments
        </h2>
        <div className="h-[1px] w-32 bg-white/20 mx-auto" />
      </div>

      {/* Honeycomb Grid Wrapper - scaled up 25% for desktop and tablet */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* Desktop Honeycomb Layout (25% Larger: Width 262px, Height 300px) */}
        <div className="hidden lg:block relative" style={{ width: '655px', height: '750px' }}>
          {getCellPositions(262, 300).map((pos) => {
            const story = stories.find(s => s.id === pos.id);
            if (!story) return null;
            return (
              <HexagonCell
                key={story.id}
                story={story}
                width={262}
                height={300}
                left={pos.left}
                top={pos.top}
                clipPath={hexClipPath}
                onClick={onSelectStory}
              />
            );
          })}
        </div>

        {/* Tablet Honeycomb Layout (Scaled: Width 200px, Height 230px) */}
        <div className="hidden sm:block lg:hidden relative" style={{ width: '500px', height: '575px' }}>
          {getCellPositions(200, 230).map((pos) => {
            const story = stories.find(s => s.id === pos.id);
            if (!story) return null;
            return (
              <HexagonCell
                key={story.id}
                story={story}
                width={200}
                height={230}
                left={pos.left}
                top={pos.top}
                clipPath={hexClipPath}
                onClick={onSelectStory}
              />
            );
          })}
        </div>

        {/* Mobile Honeycomb Layout (Scaled: Width 140px, Height 160px) */}
        <div className="block sm:hidden relative" style={{ width: '350px', height: '400px' }}>
          {getCellPositions(140, 160).map((pos) => {
            const story = stories.find(s => s.id === pos.id);
            if (!story) return null;
            return (
              <HexagonCell
                key={story.id}
                story={story}
                width={140}
                height={160}
                left={pos.left}
                top={pos.top}
                clipPath={hexClipPath}
                onClick={onSelectStory}
              />
            );
          })}
        </div>

      </div>

    </div>
  );
}

// Hexagonal Cell Subcomponent
function HexagonCell({ story, width, height, left, top, clipPath, onClick }) {
  const coverImage = story.scenes[0].image;

  return (
    <div
      onClick={() => onClick(story)}
      style={{
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`,
        top: `${top}px`,
        clipPath: clipPath
      }}
      className="group relative cursor-pointer overflow-hidden bg-black/60 border border-white/5 transition-transform duration-300 ease-out focus-visible:outline-[#E8752A]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(story);
        }
      }}
      aria-label={`Open story ${story.number}: ${story.title}. ${story.description}`}
    >
      {/* Photograph cover (subtle zoom on hover) */}
      <img
        src={coverImage}
        alt={story.scenes[0].alt || story.title}
        className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
        loading="eager"
      />
      
      {/* Subtle cover gradient overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500" />

      {/* Editorial text centered inside the cell */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center z-10">
        <span className="font-mono text-[9px] lg:text-[10px] text-[#E8752A] tracking-wider uppercase font-semibold mb-1">
          {story.number}
        </span>
        
        <h3 className="font-serif text-xs lg:text-sm text-white uppercase tracking-wider font-semibold leading-snug max-w-[140px] group-hover:text-[#E8752A] transition-colors duration-300">
          {story.title}
        </h3>
        
        <p className="hidden sm:block text-[8px] lg:text-[9px] text-[#D0C9BC]/70 leading-normal max-w-[125px] line-clamp-1 italic font-light mt-0.5">
          "{story.subtitle}"
        </p>

        {/* Small hover CTA */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] lg:text-[9px] font-mono font-bold tracking-widest text-white mt-2 uppercase">
          OPEN STORY →
        </span>
      </div>

    </div>
  );
}
