import React from 'react';
import PageTransition from '../../components/global/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] text-[#171717] min-h-screen pt-28 pb-20 px-6 md:px-12 font-sans text-left">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* 01 — OPENING */}
          <section className="space-y-6">
            <span className="text-xs font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              ABOUT THIS PROJECT
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
              "India is too vast to be told in one story."
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#16734A] italic font-normal">
              "This website is an attempt to listen to some of them."
            </p>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl pt-2">
              India cannot be reduced to one narrative, one image, one historical interpretation, or one definition. This website is an attempt to explore India through many connected perspectives — bridging its past, its geography, its culture, its people, and the questions of today.
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 02 — WHY THIS EXISTS */}
          <section className="space-y-6">
            <span className="text-xs font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              WHY THIS EXISTS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-snug">
              "Some countries are learned. India is encountered."
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              You encounter India through its people, places, food, culture, history, nature, ideas, everyday experiences, and the living realities of India today. This project was created out of curiosity and the desire to connect these distinct fragments into a unified, thoughtful digital experience.
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 03 — THE INSPIRATION */}
          <section className="space-y-6">
            <span className="text-xs font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              THE INSPIRATION
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-snug">
              "Curiosity came first."
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              This website grew from an enduring curiosity about India's diversity, history, culture, geography, science, people, contradictions, achievements, challenges, and the questions that remain unresolved. Learning should not only be about memorising information — sometimes asking a good question matters far more than immediately finding an answer.
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 04 — HOW TO EXPLORE THIS WEBSITE */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
                NAVIGATION CONCEPT
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-snug">
                "Different doors. One country."
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2.5 pt-2">
              {["EXPLORE", "PEOPLE", "CULTURE", "FOOD", "NATURE", "HISTORY", "IDEAS", "INDIA TODAY"].map((door) => (
                <span 
                  key={door}
                  className="px-3.5 py-1.5 text-xs font-mono tracking-widest text-[#171717] bg-white border border-[#171717]/15 rounded-sm font-semibold uppercase shadow-xs"
                >
                  {door}
                </span>
              ))}
            </div>

            <p className="text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              These are not isolated categories; they are different ways of looking at the same country. People shape culture. Culture shapes everyday life. Food carries geography and memory. Nature shapes communities. History shapes the present. Ideas shape the country people imagine. And India Today asks what is happening to that inheritance now.
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 05 — WHAT THIS WEBSITE WANTS FROM THE VIEWER */}
          <section className="space-y-8">
            <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-snug">
              "Perhaps the point is not to leave with an answer."
            </h2>

            <div className="space-y-4 border-l-2 border-[#E8752A] pl-6 py-2">
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"What does it mean to belong to a country this diverse?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"How much of the past still lives in the present?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"What should be preserved?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"What should be questioned?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"What does progress mean for different people?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"How does a democracy remain alive?"</p>
              <p className="font-serif text-lg md:text-xl text-[#171717] italic font-normal">"What kind of India do we want to build?"</p>
            </div>

            <p className="font-serif text-xl md:text-2xl text-[#16734A] italic font-medium pt-2">
              "Perhaps the point is not to leave with one answer, but with better questions."
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 06 — AN INDIA STILL BEING MADE */}
          <section className="space-y-6">
            <span className="text-xs font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              BALANCED PERSPECTIVE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#171717] font-normal leading-snug">
              "India is not finished."
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              This website does not present an idealised India. India contains extraordinary achievements alongside serious challenges — from inequality, unemployment, and unequal opportunity to social tensions, political polarisation, democratic participation, pluralism, scientific temper, and critical thinking. A country is continuously shaped by its people.
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 07 — ABOUT THE CREATOR */}
          <section className="space-y-6 bg-white border border-[#171717]/10 p-8 md:p-12 rounded-sm shadow-xs">
            <span className="text-xs font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              CREATOR'S NOTE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#171717] font-semibold">
              "Hi, I'm Anshuman Behera."
            </h2>
            <p className="font-serif text-lg md:text-xl text-[#E8752A] italic font-normal leading-relaxed">
              "An engineering student with an interest in technology, science, geography, history, culture and the questions that connect them."
            </p>
            <p className="text-[#6B6B6B] font-sans text-base leading-relaxed font-light">
              This project grew from curiosity and from the desire to use technology to create something that encourages people to explore, learn and think.
            </p>
          </section>

          {/* 08 — CONNECT */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold">
              Let's connect.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="mailto:anshumanbehera3039@gmail.com" 
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group"
              >
                <span className="text-[10px] font-mono text-[#6B6B6B] block uppercase tracking-wider mb-1">EMAIL</span>
                <span className="text-xs font-sans font-medium text-[#171717] group-hover:text-[#E8752A] truncate block">
                  anshumanbehera3039@gmail.com
                </span>
              </a>

              <a 
                href="https://www.instagram.com/ans_human39_/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group"
              >
                <span className="text-[10px] font-mono text-[#6B6B6B] block uppercase tracking-wider mb-1">INSTAGRAM</span>
                <span className="text-xs font-sans font-medium text-[#171717] group-hover:text-[#E8752A] block">
                  @ans_human39_
                </span>
              </a>

              <a 
                href="https://www.linkedin.com/in/anshuman-behera-623745386" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group"
              >
                <span className="text-[10px] font-mono text-[#6B6B6B] block uppercase tracking-wider mb-1">LINKEDIN</span>
                <span className="text-xs font-sans font-medium text-[#171717] group-hover:text-[#E8752A] block">
                  Anshuman Behera
                </span>
              </a>

              <a 
                href="https://github.com/Anshuman3039" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group"
              >
                <span className="text-[10px] font-mono text-[#6B6B6B] block uppercase tracking-wider mb-1">GITHUB</span>
                <span className="text-xs font-sans font-medium text-[#171717] group-hover:text-[#E8752A] block">
                  Anshuman3039
                </span>
              </a>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* 09 — DISCLAIMER */}
          <section className="space-y-4">
            <h3 className="font-serif text-xl text-[#171717] font-semibold">
              Disclaimer
            </h3>
            <div className="space-y-3 text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
              <p>This website is an independent personal project created for educational, exploratory and creative purposes. It is not affiliated with or endorsed by the Government of India, any political organisation, institution or commercial entity unless explicitly stated.</p>
              <p>Information presented here has been assembled from different sources and is intended to encourage exploration and learning rather than serve as an authoritative academic, legal or governmental reference.</p>
              <p>Historical events and contemporary issues can contain different interpretations and perspectives.</p>
              <p>Third-party images, photographs, trademarks and other materials remain the property of their respective owners where applicable.</p>
              <p>If you notice an incorrect fact, attribution issue or broken link, please contact the creator.</p>
            </div>
          </section>

          {/* 10 — CORRECTIONS */}
          <section className="p-6 md:p-8 bg-[#171717] text-[#FAF8F5] rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono text-[#E8752A] uppercase tracking-widest block font-bold">
                SOMETHING WRONG?
              </span>
              <p className="text-xs md:text-sm font-sans font-light text-[#D0C9BC] leading-relaxed">
                History is complicated. Sources can disagree. Information can become outdated. If you find something that needs correction, please let me know.
              </p>
            </div>
            <a 
              href="mailto:anshumanbehera3039@gmail.com" 
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#FAF8F5] hover:text-[#E8752A] bg-[#E8752A]/20 hover:bg-[#E8752A]/30 px-5 py-3 border border-[#E8752A]/40 rounded-sm transition-all shrink-0 text-center"
            >
              <span>CONTACT ME</span>
              <span>→</span>
            </a>
          </section>

          {/* 11 — COPYRIGHT & FINAL STATEMENT */}
          <section className="pt-8 text-center space-y-6 border-t border-[#171717]/10">
            <div className="space-y-1 text-xs font-sans text-[#6B6B6B]">
              <p className="font-medium text-[#171717]">© 2026 Anshuman Behera. All rights reserved.</p>
              <p className="italic font-serif text-[#16734A]">India — A Digital Exploration</p>
            </div>

            <div className="pt-6 max-w-2xl mx-auto space-y-2">
              <h4 className="font-serif text-xl md:text-3xl text-[#171717] font-semibold">
                "India cannot be contained in a website."
              </h4>
              <p className="font-serif text-base md:text-xl text-[#E8752A] italic font-normal">
                "But perhaps a website can make us curious enough to keep looking."
              </p>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
