import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Navigation from './components/Navigation';
import CommuneSection from './components/sections/CommuneSection';
import DemarchesSection from './components/sections/DemarchesSection';
import VieLocaleSection from './components/sections/VieLocaleSection';
import EconomieSection from './components/sections/EconomieSection';
import TourismeSection from './components/sections/TourismeSection';
import TransparenceSection from './components/sections/TransparenceSection';
import ContactSection from './components/sections/ContactSection';
import ActualitesSection from './components/sections/ActualitesSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = React.useState('accueil');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'commune':
        return <CommuneSection />;
      case 'demarches':
        return <DemarchesSection />;
      case 'vie-locale':
        return <VieLocaleSection />;
      case 'economie':
        return <EconomieSection />;
      case 'tourisme':
        return <TourismeSection />;
      case 'transparence':
        return <TransparenceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSlider />
            <ActualitesSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;