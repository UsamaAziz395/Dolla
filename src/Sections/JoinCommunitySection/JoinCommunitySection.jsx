import React from 'react';
import CommunityCard from '../../Components/CommunityCard/CommunityCard';

const JoinCommunitySection = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#1A1614] flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <CommunityCard />
      </div>
    </section>
  );
};
export default JoinCommunitySection;