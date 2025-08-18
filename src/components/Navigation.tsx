import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Users, 
  Briefcase, 
  Camera, 
  Eye, 
  Phone,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'accueil', label: 'Accueil', icon: Building2 },
    { id: 'commune', label: 'La Commune', icon: Building2 },
    { id: 'demarches', label: 'Démarches & Services', icon: FileText },
    { id: 'vie-locale', label: 'Vie Locale', icon: Users },
    { id: 'economie', label: 'Économie & Investir', icon: Briefcase },
    { id: 'tourisme', label: 'Tourisme', icon: Camera },
    { id: 'transparence', label: 'Transparence & Open Data', icon: Eye },
    { id: 'contact', label: 'Contact & Urgences', icon: Phone }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0a8734] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center lg:hidden py-3">
          <span className="text-white font-semibold">Navigation</span>
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded hover:bg-[#0a8734]/80 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:justify-center space-y-1 lg:space-y-0 lg:space-x-1 py-2 lg:py-0">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full lg:w-auto flex items-center gap-2 px-4 py-3 lg:py-4 text-sm lg:text-base font-medium 
                      transition-all duration-200 hover:bg-white/10 rounded lg:rounded-none
                      ${activeSection === item.id 
                        ? 'bg-white text-[#0a8734] lg:bg-white lg:text-[#0a8734]' 
                        : 'text-white hover:text-[#d3a277]'
                      }
                    `}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;