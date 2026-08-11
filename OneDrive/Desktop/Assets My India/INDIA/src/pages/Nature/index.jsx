import React from 'react';
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
      </div>
    </PageTransition>
  );
}
