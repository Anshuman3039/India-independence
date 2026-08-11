import React, { useState, useMemo } from 'react';
import { scheduledLanguages } from '../../../data/languages';
import LanguageDetail from './LanguageDetail';

const INITIAL_FEATURED_IDS = [
  "hindi", "bengali", "tamil", "telugu", "odia", "gujarati", "malayalam", "punjabi"
];

export default function LanguageExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLanguageId, setSelectedLanguageId] = useState("hindi"); // Default selection

  // Filter languages based on search query (searching both English and Native name)
  const filteredLanguages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return scheduledLanguages;

    return scheduledLanguages.filter(
      (lang) =>
        lang.name.toLowerCase().includes(query) ||
        lang.nativeName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Determine which languages to display in the grid
  const displayedLanguages = useMemo(() => {
    // If searching, show all matching results
    if (searchQuery.trim().length > 0) {
      return filteredLanguages;
    }
    // If expanded, show all 22
    if (isExpanded) {
      return scheduledLanguages;
    }
    // Otherwise show only initial 8 featured languages
    return scheduledLanguages.filter((lang) => INITIAL_FEATURED_IDS.includes(lang.id));
  }, [searchQuery, isExpanded, filteredLanguages]);

  const selectedLanguage = useMemo(() => {
    return scheduledLanguages.find((lang) => lang.id === selectedLanguageId) || null;
  }, [selectedLanguageId]);

  const handleLanguageSelect = (id) => {
    setSelectedLanguageId(id);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full flex flex-col space-y-8" aria-label="Language Exploration Board">
      
      {/* 1. Search Field Bar */}
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Find a language (e.g. Odia or ଓଡ଼ିଆ)..."
            className="w-full bg-[#171717]/5 border border-charcoal/15 px-4 py-2 text-sm text-[#171717] font-sans rounded-none focus:border-[#E8752A] outline-none transition-colors"
            aria-label="Search for a Scheduled Language"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B6B6B] hover:text-[#171717] cursor-pointer"
              aria-label="Clear search query"
            >
              CLEAR
            </button>
          )}
        </div>

        <div className="text-xs font-sans font-light text-[#6B6B6B]">
          {searchQuery.trim() 
            ? `Found ${filteredLanguages.length} matching languages` 
            : "Eighth Schedule of the Constitution of India"
          }
        </div>
      </div>

      {/* 2. Main Content Split Grid: Wall on Left, Detail Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        
        {/* Left Column: Visual Language Wall Grid (Constellation) */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {displayedLanguages.map((lang) => {
              const isActive = lang.id === selectedLanguageId;
              return (
                <button
                  key={lang.id}
                  onClick={() => handleLanguageSelect(lang.id)}
                  className={`flex flex-col items-center justify-center p-4 border transition-all cursor-pointer outline-none focus-visible:outline-[#E8752A] text-center select-none ${
                    isActive
                      ? "bg-white border-[#E8752A] shadow-md scale-[1.02]"
                      : "bg-white/40 border-charcoal/10 hover:border-charcoal/30 hover:bg-white/70"
                  }`}
                  aria-label={`${lang.name} language, written as ${lang.nativeName}`}
                  aria-pressed={isActive}
                >
                  {/* Large visual native script */}
                  <span className={`font-serif text-2xl md:text-3xl mb-1.5 transition-colors ${
                    isActive ? "text-[#16734A]" : "text-[#171717]/80"
                  }`}>
                    {lang.nativeName}
                  </span>
                  
                  {/* English Roman name underneath */}
                  <span className="text-[10px] font-sans font-semibold text-[#6B6B6B] uppercase tracking-widest block">
                    {lang.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Toggle Expand Button (Hidden during searches) */}
          {!searchQuery.trim() && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setIsExpanded(prev => !prev)}
                className="text-xs font-sans font-semibold text-[#171717] hover:text-[#E8752A] tracking-wider uppercase border border-[#171717]/15 hover:border-[#E8752A] px-4 py-2 transition-colors cursor-pointer outline-none focus-visible:outline-[#E8752A]"
                aria-label={isExpanded ? "Show fewer languages" : "Show all 22 Scheduled Languages"}
              >
                {isExpanded ? "SHOW LESS" : "SEE ALL 22"}
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Display Panel Card */}
        <div className="lg:col-span-2">
          {selectedLanguage ? (
            <LanguageDetail
              language={selectedLanguage}
              onClose={() => setSelectedLanguageId("")}
            />
          ) : (
            <div className="bg-[#171717]/5 border border-dashed border-charcoal/15 p-8 text-center text-xs md:text-sm font-sans font-light text-[#6B6B6B] flex flex-col items-center justify-center min-h-[220px]">
              <span>Select a language from the constellation to explore its structure, script, and regions.</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
