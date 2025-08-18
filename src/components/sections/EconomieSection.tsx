import React from 'react';
import { TrendingUp, MapPin, Lightbulb, Users, FileText } from 'lucide-react';

const EconomieSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Économie & Investir
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La Commune de Fimela offre un environnement propice à l'investissement grâce à 
            la diversité de ses ressources naturelles et humaines.
          </p>
        </div>

        {/* Opportunités économiques */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-[#0a8734]" />
            Opportunités Économiques
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La Commune de Fimela offre un environnement propice à l'investissement grâce à la diversité de ses 
              ressources naturelles et humaines. Les secteurs porteurs incluent l'agriculture, la pêche, l'écotourisme, 
              l'artisanat et les services. La mairie fournit aux investisseurs des informations actualisées sur les 
              opportunités disponibles et les procédures administratives nécessaires.
            </p>
          </div>
        </section>

        {/* Zones d'Activités */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-[#0a8734]" />
            Zones d'Activités & Terrains
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Des zones dédiées à l'implantation d'activités économiques et artisanales sont identifiées afin de 
              faciliter l'installation des porteurs de projets. Ces espaces bénéficient d'un accès facilité aux 
              infrastructures de base, et des procédures simplifiées sont mises en place pour accélérer leur exploitation.
            </p>
          </div>
        </section>

        {/* Appels à Projets */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-[#0a8734]" />
            Appels à Projets
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Afin de stimuler l'innovation et l'initiative locale, la Commune publie régulièrement des appels à 
              projets ouverts aux associations, entrepreneurs et organisations. Ces projets peuvent concerner des 
              domaines variés tels que l'environnement, la culture, le développement économique ou l'inclusion sociale.
            </p>
          </div>
        </section>

        {/* Annuaire des Entreprises */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-[#0a8734]" />
            Annuaire des Entreprises
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Un annuaire numérique répertorie les entreprises implantées sur le territoire communal. Il vise à 
              favoriser les échanges commerciaux, encourager les partenariats locaux et offrir une meilleure 
              visibilité aux acteurs économiques de Fimela.
            </p>
          </div>
        </section>

        {/* Partenaires & Investisseurs */}
        <section>
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#0a8734]" />
            Partenaires & Investisseurs
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La Commune travaille avec un large réseau de partenaires institutionnels, associatifs et privés, 
              au niveau national et international. Ces collaborations permettent de financer et de mettre en œuvre 
              des projets structurants pour le développement économique local.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EconomieSection;