import React from 'react';
import { Calendar } from 'lucide-react';

const ActualitesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3e2a1a] flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-[#0a8734]" />
            Actualités
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-lg text-gray-700">
            Les actualités de la commune seront bientôt disponibles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActualitesSection;