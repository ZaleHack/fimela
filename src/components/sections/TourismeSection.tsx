import React from 'react';
import { Camera } from 'lucide-react';

const TourismeSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Découvrir Fimela
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Située au cœur du delta du Sine-Saloum, classé patrimoine mondial de l'UNESCO, 
            la Commune de Fimela est un lieu unique où nature, culture et hospitalité se rencontrent.
          </p>
        </div>

        {/* Découvrir Fimela et le Sine-Saloum */}
        <section>
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <Camera className="w-8 h-8 text-[#0a8734]" />
            Découvrir Fimela et le Sine-Saloum
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Située au cœur du delta du Sine-Saloum, classé patrimoine mondial de l'UNESCO, la Commune de Fimela 
              est un lieu unique où nature, culture et hospitalité se rencontrent. Entre mangroves, îles, bolongs 
              et plages préservées, le visiteur découvre un environnement exceptionnel propice à l'écotourisme. 
              Les traditions sérères et les savoir-faire artisanaux constituent un patrimoine immatériel riche et vivant.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TourismeSection;