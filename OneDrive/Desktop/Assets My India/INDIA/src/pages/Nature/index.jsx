import React from 'react';
import { Link } from 'react-router-dom';
import NatureIntro from './NatureIntro';
import Geography from './Geography';
import Ecosystems from './Ecosystems';
import Wildlife from './Wildlife';
import ProtectedIndia from './ProtectedIndia';
import NatureAndPeople from './NatureAndPeople';
import NatureClosing from './NatureClosing';
import PageTransition from '../../components/global/PageTransition';

export default function Nature() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE]">
        {/* 1. Introduction Header */}
        <NatureIntro />

        {/* 2. Physical Landscapes */}
        <Geography />

        {/* 3. Ecological Communities */}
        <Ecosystems />

        {/* 4. Wildlife Profiles */}
        <Wildlife />

        {/* 5. Protected Reserves Map */}
        <ProtectedIndia />

        {/* 6. Human Ecology */}
        <NatureAndPeople />

        {/* 7. Closing Statement Banner */}
        <NatureClosing />

        {/* NEW: Story-driven transition to History */}
        <section className="bg-[#F7F4EE] pb-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 text-center overflow-hidden">
          <div className="pt-20 pb-4 text-center flex flex-col items-center space-y-6 max-w-2xl mx-auto w-full">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em] block">
              NEXT: HISTORY
            </span>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
                From the landscapes that shape life,<br />to the histories that unfolded upon them.
              </h3>
              <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
                India's mountains, rivers, forests and coasts have shaped where people settled, how they travelled, what they built and how societies changed. Step into the many pasts that have shaped India.
              </p>
            </div>
            <div className="pt-2">
              <Link 
                to="/history"
                className="group inline-flex items-center gap-2.5 font-sans text-xs md:text-sm font-bold tracking-widest uppercase text-[#171717] hover:text-[#E8752A] border-b border-[#171717]/25 hover:border-[#E8752A] pb-1.5 transition-all duration-200 focus-visible:outline-[#E8752A]"
              >
                EXPLORE HISTORY 
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
