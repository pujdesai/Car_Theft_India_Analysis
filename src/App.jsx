import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import IntroductionSection from './components/IntroductionSection';
import DataIntroSection from './components/DataIntroSection';
import VizHero from './components/VizHero';
import Viz1Section from './components/Viz1Section';
import Viz2Section from './components/Viz2Section';
import Viz3Section from './components/Viz3Section';
import Viz4Section from './components/Viz4Section';
import Viz5Section from './components/Viz5Section';
import SummarySection from './components/SummarySection';
import './index.css';

function App() {
  const teamRef = useRef(null);
  const introRef = useRef(null);
  const dataIntroRef = useRef(null);
  const vizHeroRef = useRef(null);
  const Viz1Ref = useRef(null);
  const Viz2Ref = useRef(null);
  const Viz3Ref = useRef(null);
  const Viz4Ref = useRef(null);
  const Viz5Ref = useRef(null);
  const summaryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <HeroSection scrollToNext={() => scrollToSection(teamRef)} />
      <TeamSection ref={teamRef} />
      <IntroductionSection ref={introRef} />
      <DataIntroSection ref={dataIntroRef} />
      <VizHero 
        ref={vizHeroRef} 
        scrollToNext={() => scrollToSection(Viz1Ref)} 
      />
      <Viz1Section ref={Viz1Ref} /> 
      <Viz2Section ref={Viz2Ref} />
      <Viz3Section ref={Viz3Ref} />
      <Viz4Section ref={Viz4Ref} />
      <Viz5Section ref={Viz5Ref} />
      <SummarySection ref={summaryRef} />
    </div>
  );
}

export default App;