import React from 'react'
import Hero from '../Sections/Hero/Hero';
import About from '../Pages/About';
import PartnersSection from '../Sections/PartnersSection/PartnersSection';
import TokenomicsSection from '../Sections/TokenomicsSection/TokenomicsSection';
import HowToBuyCrypto from '../Sections/HowToBuyCrypto/HowToBuyCrypto';
import HowToBuyCard from '../Sections/HowToBuyCard/HowToBuyCard';
import JoinCommunitySection from '../Sections/JoinCommunitySection/JoinCommunitySection';
import BottomNav from '../Components/BottomNav/BottomNav'
import Navbar from '../Components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
         <Hero />
            <About />
            <PartnersSection />
            <TokenomicsSection />
            <HowToBuyCrypto />
            <HowToBuyCard />
            <JoinCommunitySection />
            <BottomNav />
  
      
    </div>
  )
}

export default Home
