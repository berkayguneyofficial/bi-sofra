/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import WhatIsSection from './components/WhatIsSection';
import HowItWorks from './components/HowItWorks';
import HotelsSection from './components/HotelsSection';
import StudentsSection from './components/StudentsSection';
import AlgorithmHighlight from './components/AlgorithmHighlight';
import TechnologySection from './components/TechnologySection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-green-950">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhatIsSection />
      <HowItWorks />
      <HotelsSection />
      <StudentsSection />
      <AlgorithmHighlight />
      <TechnologySection />
      <ImpactSection />
      <Footer />
    </div>
  );
}
