import React, { useState } from 'react';
import { 
  FileText, 
  Building, 
  CreditCard, 
  Gavel, 
  Heart, 
  AlertTriangle, 
  Calendar
} from 'lucide-react';

const DemarchesSection: React.FC = () => {
  const [activeService, setActiveService] = useState('etat-civil');

  const services = [
    { id: 'etat-civil', label: 'État Civil', icon: FileText },
    { id: 'urbanisme', label: 'Urbanisme', icon: Building },
    { id: 'fiscalite', label: 'Fiscalité', icon: CreditCard },
    { id: 'marches', label: 'Marchés Publics', icon: Gavel },
    { id: 'social', label: 'Action Sociale', icon: Heart },
    { id: 'signalement', label: 'Signalement', icon: AlertTriangle },
    { id: 'rendez-vous', label: 'Rendez-vous', icon: Calendar }
  ];

  const renderServiceContent = () => {
    switch (activeService) {
      case 'etat-civil':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#3e2a1a] mb-6">Services d'État Civil</h3>
            <div className="bg-white rounded-lg p-8">
              <p className="text-gray-700">
                Services d'état civil disponibles à la mairie de Fimela.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#3e2a1a] mb-4">
              {services.find(s => s.id === activeService)?.label}
            </h3>
            <p className="text-gray-700">
              Informations sur ce service disponibles prochainement.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Démarches & Services
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Simplifiez vos démarches administratives avec nos services en ligne. 
            Gagnez du temps et évitez les déplacements inutiles.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu des Services */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-[#3e2a1a] mb-6">Nos Services</h2>
              <div className="space-y-2">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all ${
                        activeService === service.id
                          ? 'bg-[#0a8734] text-white shadow-lg'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{service.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contenu du Service */}
          <div className="lg:w-2/3">
            <div className="bg-[#d3a277]/10 rounded-xl p-8">
              {renderServiceContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemarchesSection;