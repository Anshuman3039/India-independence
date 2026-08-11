import React from 'react';

export default function StoryPreview({ story, onClick }) {
  // Use first scene image as preview cover
  const coverImage = story.scenes[0].image;

  return (
    <div 
      onClick={() => onClick(story)}
      className="group relative cursor-pointer overflow-hidden bg-[#171717] rounded-sm select-none border border-white/5"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(story);
        }
      }}
      aria-label={`Open story: ${story.title}. ${story.description}`}
    >
      {/* Visual Cover */}
      <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden relative">
        <img
          src={coverImage}
          alt={story.scenes[0].alt || story.title}
          className="w-full h-full object-cover transform group-hover:scale-105 group-hover:translate-x-1 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-[#171717]/30 group-hover:bg-[#171717]/45 transition-colors duration-500" />
        
        {/* Story Number Badge overlay */}
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-mono text-[#E8752A] rounded-sm">
          {story.number}
        </div>
      </div>

      {/* Editorial Content Meta Box */}
      <div className="p-5 space-y-2 bg-[#1b1b1b]/95 text-left border-t border-white/5">
        <h3 className="font-serif text-lg md:text-xl text-white group-hover:text-[#E8752A] transition-colors duration-300">
          {story.title}
        </h3>
        <p className="text-[#D0C9BC]/70 font-sans text-xs md:text-sm font-light leading-relaxed">
          {story.description}
        </p>

        {/* Action Callout */}
        <div className="pt-2 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-wider uppercase">
            EXPLORE STORY
          </span>
          <span className="text-[#E8752A] text-xs">→</span>
        </div>
      </div>
    </div>
  );
}
