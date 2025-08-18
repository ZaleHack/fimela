import React from 'react';
import { GraduationCap, Heart, Users, Palette, Leaf, Shield } from 'lucide-react';

const VieLocaleSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Vie Locale
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La Commune de Fimela s'engage pour le bien-être de ses habitants à travers 
            des services de qualité dans l'éducation, la santé, la culture et l'environnement.
          </p>
        </div>

        {/* Section Éducation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#0a8734]" />
            Éducation
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La Commune de Fimela accorde une importance primordiale à l'éducation comme moteur de développement 
              et d'égalité des chances. Elle assure un soutien constant aux établissements scolaires, qu'ils soient 
              publics ou privés, à travers l'entretien des infrastructures, la dotation en matériel pédagogique et 
              l'organisation de programmes d'appui aux élèves en difficulté. Des partenariats sont établis avec les 
              associations et les ONG afin de favoriser l'accès à la scolarité pour tous, en particulier pour les 
              filles et les enfants issus de familles vulnérables. La commune encourage également la formation 
              continue des enseignants et promeut des activités périscolaires favorisant l'épanouissement des élèves.
            </p>
          </div>
        </section>

        {/* Section Santé */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-[#0a8734]" />
            Santé & Social
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La municipalité travaille en étroite collaboration avec les structures sanitaires locales et régionales 
              pour garantir à la population un accès de proximité à des soins de qualité. Des campagnes de sensibilisation 
              sont organisées régulièrement sur des thèmes tels que la vaccination, la santé maternelle et infantile, 
              l'hygiène publique et la prévention des maladies. Sur le plan social, la Commune met en place des programmes 
              d'aide aux familles en difficulté, de soutien aux personnes âgées et d'accompagnement des personnes en 
              situation de handicap.
            </p>
          </div>
        </section>

        {/* Section Jeunesse & Sports */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-[#0a8734]" />
            Jeunesse & Sports
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Consciente de l'importance de la jeunesse dans le développement local, la Commune de Fimela soutient 
              activement les initiatives portées par les jeunes, qu'elles soient éducatives, entrepreneuriales ou 
              culturelles. Des infrastructures sportives sont mises à disposition pour favoriser la pratique régulière 
              du sport, et des compétitions locales sont organisées pour dynamiser la vie communautaire. Des programmes 
              spécifiques encouragent l'insertion professionnelle et la formation des jeunes.
            </p>
          </div>
        </section>

        {/* Section Culture & Patrimoine */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Palette className="w-8 h-8 text-[#0a8734]" />
            Culture & Patrimoine
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Riche de son héritage historique et de ses traditions, Fimela s'engage à préserver et à promouvoir 
              son patrimoine culturel. La Commune organise et soutient des événements festifs, artistiques et 
              artisanaux qui valorisent les savoir-faire locaux et les expressions culturelles. Elle œuvre également 
              à la préservation des sites historiques et naturels, ainsi qu'à la transmission des valeurs culturelles 
              aux jeunes générations.
            </p>
          </div>
        </section>

        {/* Section Environnement */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Leaf className="w-8 h-8 text-[#0a8734]" />
            Environnement
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La protection de l'environnement est au cœur des priorités municipales. Des actions concrètes sont 
              menées pour assurer la gestion durable des déchets, préserver la biodiversité et lutter contre la 
              déforestation et l'érosion côtière. Des campagnes de sensibilisation à l'écocitoyenneté encouragent 
              les habitants à adopter des comportements responsables, notamment en matière de recyclage et de 
              préservation des ressources en eau.
            </p>
          </div>
        </section>

        {/* Section Sécurité */}
        <section>
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#0a8734]" />
            Sécurité & Prévention
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La sécurité des habitants est assurée grâce à une coopération étroite entre la Commune, les forces 
              de l'ordre et les services de secours. Des programmes de prévention sont mis en place pour lutter 
              contre l'insécurité routière, les incendies et les risques liés aux catastrophes naturelles. La 
              municipalité développe également des initiatives de formation aux gestes de premiers secours et à 
              la gestion des situations d'urgence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VieLocaleSection;