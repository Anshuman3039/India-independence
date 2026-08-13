import React from 'react';
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

        {/* 8. Closing Editorial Transition to Ideas */}
        <section className="w-full py-20 px-6 md:px-12 bg-[#F7F4EE] border-t border-[#171717]/10 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#16734A] tracking-[0.3em] uppercase block">
              FROM HISTORY TO IDEAS
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#171717] font-semibold uppercase tracking-wide leading-tight">
              WHAT DID WE MAKE OF THE PAST?
            </h2>
            <p className="font-serif text-sm md:text-base text-[#E8752A] italic font-normal max-w-2xl mx-auto leading-relaxed">
              "Every generation inherits a past — then decides what to carry forward, what to question, and what kind of India to build."
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
