import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/global/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] text-[#171717] min-h-screen pt-28 pb-24 px-6 md:px-12 font-sans text-left">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">

          {/* PAGE TITLE */}
          <section className="space-y-4">
            <span className="text-xs font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              ABOUT THIS PROJECT
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#171717] font-normal leading-tight">
              ABOUT
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#16734A] italic font-normal leading-relaxed max-w-3xl">
              "An attempt to look at India not as a single story, but as a living conversation."
            </p>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 01 — WHY THIS EXISTS */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              01 · PURPOSE
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              WHY THIS WEBSITE EXISTS
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              <p className="text-[#171717] font-serif text-xl italic font-medium">
                "India is too vast to be reduced to a single definition."
              </p>
              <p>
                It is a country shaped by thousands of years of history, countless communities, languages, landscapes, traditions, ideas and experiences. It contains contradictions that often exist side by side — ancient and modern, local and global, continuity and change, celebration and struggle.
              </p>
              <p>
                This website was created as an attempt to explore some of those layers.
              </p>
              <p>
                It is not meant to be a complete account of India, nor does it claim to speak for every Indian experience. Instead, it is a visual and digital journey through some of the people, cultures, food, landscapes, history, ideas and realities that help make India what it is.
              </p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 02 — THE INSPIRATION */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              02 · INSPIRATION
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              THE INSPIRATION
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              <p className="text-[#171717] font-serif text-xl italic font-medium">
                "The inspiration behind this project came from a simple curiosity: What makes a country a country?"
              </p>
              <p>
                Is it only its borders, institutions and history? Or is it also the everyday life of its people — the food they cook, the languages they speak, the places they inhabit, the stories they remember, the ideas they debate and the future they imagine?
              </p>
              <p>
                This website grew from that curiosity.
              </p>
              <p>
                It tries to move beyond a purely textbook understanding of India and instead look at the country as something lived, experienced and continuously shaped by its people.
              </p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 03 — A JOURNEY, NOT A TEXTBOOK */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              03 · STRUCTURE
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              A JOURNEY, NOT A TEXTBOOK
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              <p className="text-[#171717] font-serif text-xl italic font-medium">
                "The structure of the website follows a journey."
              </p>
              <ul className="space-y-3 pt-2 text-sm md:text-base text-[#171717] font-sans">
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">Explore</strong> introduces the country.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">People</strong> brings individual lives and voices into focus.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">Culture</strong> looks at the traditions and expressions that communities carry forward.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">Food</strong> explores one of the most intimate ways people experience place and identity.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">Nature</strong> looks at the landscapes and environments that shape the country.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">History</strong> asks where many of these stories came from.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">Ideas</strong> explores the principles, arguments and visions that have shaped the idea of India.</li>
                <li><strong className="font-mono text-[#E8752A] uppercase tracking-wider">India Today</strong> turns toward the present — its aspirations, disagreements, inequalities, questions and possibilities.</li>
              </ul>
              <p className="pt-2">
                Together, these sections are not intended to provide one final answer. They are meant to encourage questions.
              </p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 04 — WHAT I WANT YOU TO TAKE FROM IT */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              04 · INTENT
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              WHAT I WANT YOU TO TAKE FROM IT
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              <p className="text-[#171717] font-serif text-xl italic font-medium">
                "I do not want this website to tell you what to think about India. I want it to make you think about India."
              </p>
              <div className="border-l-2 border-[#E8752A] pl-6 space-y-2 py-1 text-sm md:text-base text-[#171717] font-serif italic">
                <p>Question the stories you encounter.</p>
                <p>Look at history with curiosity rather than certainty.</p>
                <p>Notice the diversity that exists within the country.</p>
                <p>Recognise both achievement and failure.</p>
                <p>Celebrate what deserves celebration, but do not ignore what deserves criticism.</p>
              </div>
              <p className="pt-2">
                And most importantly, remember that a nation is never a finished idea. Every generation inherits something from the generations before it — and every generation decides what it will preserve, what it will change and what it will build.
              </p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 05 — A PERSONAL NOTE */}
          <section className="space-y-6 bg-white border border-[#171717]/10 p-8 md:p-12 rounded-sm shadow-xs">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              05 · CREATOR'S NOTE
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              A PERSONAL NOTE
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed">
              <p className="text-[#171717] font-serif text-xl italic font-medium">
                "This project is an independent personal project created by Anshuman Behera."
              </p>
              <p>
                I am an engineering student with an interest in technology, science, history, geography, culture and the questions that connect them.
              </p>
              <p>
                Building this website has been as much an exploration for me as it is an attempt to create something for others to explore. It is a work in progress. There will be things that can be improved, information that may need correction and perspectives that may deserve to be expanded.
              </p>
              <p className="italic font-serif text-[#16734A] text-base md:text-lg">
                "That is part of the point. A website about a country as diverse and complex as India can never truly be 'finished.'"
              </p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 06 — ACCURACY & CORRECTIONS */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#E8752A] tracking-[0.3em] uppercase block">
              06 · RESPONSIBILITY
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              ACCURACY MATTERS
            </h2>
            <div className="space-y-4 text-[#6B6B6B] font-sans text-base md:text-lg font-light leading-relaxed max-w-3xl">
              <p>
                This website has been created with an effort to present information carefully and responsibly. However, no independent digital project is free from mistakes. Historical interpretation can differ. Sources can disagree. Images can sometimes lack complete context. Contemporary events can change quickly.
              </p>
              <p>
                If you find incorrect information, misleading context, a broken link or an image that requires clarification, please reach out. Corrections and constructive criticism are welcome.
              </p>
              <p className="text-[#171717] font-serif text-lg italic font-medium">
                "The goal is not to pretend that this website is perfect. The goal is to keep making it better."
              </p>
              <div className="pt-3">
                <a 
                  href="mailto:anshumanbehera3039@gmail.com" 
                  className="inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase font-bold text-[#E8752A] hover:text-[#16734A] transition-colors border-b border-[#E8752A]/40 hover:border-[#16734A] pb-1 cursor-pointer"
                >
                  <span>FOUND SOMETHING WRONG? → CONTACT</span>
                </a>
              </div>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 07 — IMAGE & CONTENT DISCLAIMER */}
          <section className="space-y-4">
            <span className="text-[10px] font-mono font-bold text-[#6B6B6B] tracking-[0.3em] uppercase block">
              07 · NOTICE
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold uppercase tracking-wide">
              DISCLAIMER
            </h2>
            <div className="space-y-3 text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl">
              <p>Images and visual materials used throughout this website may belong to their respective copyright holders. They are used for illustrative, educational, documentary or editorial purposes where applicable.</p>
              <p>This website is an independent project and is not affiliated with or endorsed by the Government of India, any political party, institution, organisation, media organisation, filmmaker, photographer or other entity represented or referenced on the website unless explicitly stated.</p>
              <p>The website is intended for educational, cultural and exploratory purposes.</p>
              <p>References to people, places, historical events, organisations, films, movements or contemporary issues should not be interpreted as an endorsement of any particular political position or ideology.</p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 08 — COPYRIGHT */}
          <section className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#6B6B6B] tracking-[0.3em] uppercase block">
              08 · COPYRIGHT
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#171717] font-semibold uppercase tracking-wide">
              COPYRIGHT
            </h2>
            <div className="space-y-2 text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-3xl">
              <p className="font-medium text-[#171717]">© 2026 Anshuman Behera. All rights reserved.</p>
              <p>The original website design, written material, structure and code of this project belong to the creator unless otherwise stated.</p>
              <p>Third-party images, trademarks, logos and other materials remain the property of their respective owners.</p>
            </div>
          </section>

          <div className="h-[1px] w-full bg-[#171717]/10" />

          {/* SECTION 09 — CONNECT */}
          <section className="space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              09 · REACH OUT
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide">
              CONNECT
            </h2>
            <p className="text-[#6B6B6B] font-sans text-sm md:text-base font-light max-w-2xl">
              If you would like to explore the project, discuss an idea, report an issue or simply say hello, you can find me here:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <a 
                href="mailto:anshumanbehera3039@gmail.com" 
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group cursor-pointer"
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
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group cursor-pointer"
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
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group cursor-pointer"
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
                className="p-4 bg-white border border-[#171717]/10 hover:border-[#E8752A] transition-all rounded-sm shadow-xs block group cursor-pointer"
              >
                <span className="text-[10px] font-mono text-[#6B6B6B] block uppercase tracking-wider mb-1">GITHUB</span>
                <span className="text-xs font-sans font-medium text-[#171717] group-hover:text-[#E8752A] block">
                  Anshuman3039
                </span>
              </a>
            </div>
          </section>

          {/* RETURN TO HOME BUTTON */}
          <div className="pt-8 border-t border-[#171717]/10 text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest uppercase font-bold text-[#171717] hover:text-[#E8752A] border-b border-[#171717] hover:border-[#E8752A] pb-1 transition-colors cursor-pointer"
            >
              ← RETURN TO MAIN PAGE
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
