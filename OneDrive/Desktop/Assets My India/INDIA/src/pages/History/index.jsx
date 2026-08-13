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
      </div>
    </PageTransition>
  );
}
