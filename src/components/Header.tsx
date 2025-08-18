import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#3e2a1a] text-white">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 text-sm border-b border-[#856f53]">
          <div className="flex flex-wrap items-center gap-4 mb-2 lg:mb-0">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Fimela, Région de Fatick, Sénégal</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+221 33 XXX XX XX</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>contact@fimela.sn</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Français</span>
            <span>|</span>
            <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Wolof</span>
            <span>|</span>
            <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Sérère</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-6">
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <div className="w-16 h-16 bg-[#d3a277] rounded-full flex items-center justify-center text-[#3e2a1a] font-bold text-xl">
              FIMELA
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white">
                Commune de Fimela
              </h1>
              <p className="text-[#d3a277] text-sm lg:text-base">
                Perle du Delta du Sine-Saloum
              </p>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <div className="text-sm text-[#d3a277] mb-1">Bienvenue sur le site officiel</div>
            <div className="text-lg font-semibold">République du Sénégal</div>
            <div className="text-xs text-[#d3a277]">Un Peuple - Un But - Une Foi</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;