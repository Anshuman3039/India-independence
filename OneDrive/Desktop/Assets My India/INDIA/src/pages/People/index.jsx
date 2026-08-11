import React from 'react';
import People from '../../components/home/People';
import PageTransition from '../../components/global/PageTransition';

export default function PeoplePage() {
  return (
    <PageTransition>
      <div id="main-content" className="w-full bg-[#F7F4EE] pt-12 md:pt-16">
        <People />
      </div>
    </PageTransition>
  );
}
