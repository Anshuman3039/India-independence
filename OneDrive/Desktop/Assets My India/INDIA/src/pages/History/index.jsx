import React from 'react';
import { Link } from 'react-router-dom';
import HistoryIntro from './HistoryIntro';
import Timeline from './Timeline';
import IndiaThroughTime from './IndiaThroughTime';
import EarlyCities from './EarlyCities';
import IdeasThatTraveled from './IdeasThatTraveled';
import PeopleAndPower from './PeopleAndPower';
import FreedomMovement from './FreedomMovement';
import Republic from './Republic';
import PageTransition from '../../components/global/PageTransition';

export default function History() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE]">
        {/* 1. Cinematic History Intro Slideshow */}
        <HistoryIntro />

        {/* 2. Chronological Timeline */}
        <Timeline />

        {/* NEW ADDITION: India Through Time map experience */}
        <IndiaThroughTime />

        {/* 3. Ancient Bronze Age Cities */}
        <EarlyCities />

        {/* 4. Global Transmission of Ideas */}
        <IdeasThatTraveled />

        {/* 5. Social History (Non-dynastic) */}
        <PeopleAndPower />

        {/* 6. Freedom Struggle Chronology */}
        <FreedomMovement />

        {/* 7. Republican Transformative Comparisons */}
        <Republic />

        {/* 8. Clickable History -> Ideas Gateway */}
        <section className="w-full py-20 px-6 md:px-12 bg-[#F7F4EE] border-t border-[#171717]/10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
                FROM HISTORY TO IDEAS
              </span>
              <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide leading-tight">
                WHAT DID WE MAKE OF THE PAST?
              </h2>
              <p className="font-serif text-sm md:text-base text-[#171717] italic font-normal max-w-2xl mx-auto leading-relaxed">
                "Every generation inherits a past — then decides what to carry forward, what to question, and what kind of India to build."
              </p>
            </div>

            <div className="pt-2">
              <Link 
                to="/ideas"
                className="group inline-flex items-center gap-2.5 font-mono text-xs md:text-sm tracking-widest uppercase font-bold text-[#E8752A] hover:text-[#16734A] transition-all duration-300 border-b border-[#E8752A]/40 hover:border-[#16734A] pb-1 outline-none focus-visible:outline-2 focus-visible:outline-[#E8752A] cursor-pointer"
                aria-label="Explore the Ideas of India"
              >
                <span>EXPLORE THE IDEAS OF INDIA</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
