import React from 'react';
import { Eye } from 'lucide-react';

const TransparenceSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Transparence & Open Data
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dans un souci de transparence démocratique, découvrez les budgets, décisions 
            et données publiques de la commune de Fimela.
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Eye className="w-8 h-8 text-[#0a8734]" />
            Transparence & Open Data
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Informations sur la transparence et les données ouvertes de la commune disponibles prochainement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransparenceSection;