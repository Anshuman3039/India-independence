import React from 'react';
import Hero from './Hero';
import IndiaIdentity from '../../components/home/IndiaIdentity';
import ManyStories from '../../components/home/ManyStories';
import ExploreIndia from '../../components/home/ExploreIndia';
import People from '../../components/home/People';
import PageTransition from '../../components/global/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
        <Hero />
        <IndiaIdentity />
        <ManyStories />
        <ExploreIndia />
        <People />
      </main>
    </PageTransition>
  );
}
