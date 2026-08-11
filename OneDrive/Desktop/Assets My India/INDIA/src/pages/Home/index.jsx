import React from 'react';
import Hero from './Hero';
import IndiaIdentity from '../../components/home/IndiaIdentity';
import ManyStories from '../../components/home/ManyStories';
import ExploreIndia from '../../components/home/ExploreIndia';
import PageTransition from '../../components/global/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
        <Hero />
        <IndiaIdentity />
        <ManyStories />
        <ExploreIndia />
      </main>
    </PageTransition>
  );
}
