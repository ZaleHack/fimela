import React from 'react';
import { User, Users, Building, MapPin, FileText, Handshake, UserCheck } from 'lucide-react';

const CommuneSection: React.FC = () => {
  const commissions = [
    {
      nom: "Santé publique et hygiène",
      responsable: "Pape Sy",
      domaine: "Santé"
    },
    {
      nom: "Éducation, formation professionnelle et technique",
      responsable: "Mamadou Sène",
      domaine: "Éducation"
    },
    {
      nom: "Tourisme",
      responsable: "Amadou Faye",
      domaine: "Tourisme"
    },
    {
      nom: "Pêche",
      responsable: "Faby Ndong",
      domaine: "Économie"
    },
    {
      nom: "Environnement et développement durable",
      responsable: "Simon Basse",
      domaine: "Environnement"
    },
    {
      nom: "Jeunesse, sport et culture",
      responsable: "Khadim",
      domaine: "Culture"
    },
    {
      nom: "Action sociale et solidarité",
      responsable: "Nafy",
      domaine: "Social"
    },
    {
      nom: "Énergie hydraulique",
      responsable: "Ousseynou Mané",
      domaine: "Infrastructure"
    },
    {
      nom: "Entrepreneuriat féminin et GIE",
      responsable: "Ndieme Ndong",
      domaine: "Économie"
    },
    {
      nom: "Finances et économie",
      responsable: "Bamba Fam",
      domaine: "Finances"
    },
    {
      nom: "Commission domaniale",
      responsable: "Pape Adama Faye",
      domaine: "Urbanisme"
    },
    {
      nom: "Coopération internationale et ONG",
      responsable: "Issa Sarr",
      domaine: "Coopération"
    },
    {
      nom: "Habitat et urbanisme",
      responsable: "Lamine Singhane Sarr",
      domaine: "Urbanisme"
    }
  ];

  const villages = [
    { nom: "Fimela", statut: "Chef-lieu" },
    { nom: "Samba Dia", statut: "Village" },
    { nom: "Mar Fafaco", statut: "Village" },
    { nom: "Mar Lothie", statut: "Village" },
    { nom: "Simal", statut: "Village" },
    { nom: "Ndangane Sambou", statut: "Village" },
    { nom: "Campement Ndangane", statut: "Campement" },
    { nom: "Yayème", statut: "Village" },
    { nom: "Mbissel", statut: "Village" },
    { nom: "Kobongoye 1", statut: "Quartier" },
    { nom: "Kobongoye 2", statut: "Quartier" },
    { nom: "Djilor", statut: "Village" },
    { nom: "Baboucar", statut: "Village" },
    { nom: "Samba Diallo", statut: "Village" },
    { nom: "Mar Soulou", statut: "Village" },
    { nom: "Ndiedieng", statut: "Village" }
  ];

  const services = [
    {
      nom: "Service de l'État Civil",
      description: "Enregistrements de naissances, mariages, décès",
      couleur: "border-[#0a8734]"
    },
    {
      nom: "Service Financier",
      description: "Élaboration et exécution du budget, gestion des recettes et dépenses",
      couleur: "border-[#5383a9]"
    },
    {
      nom: "Service Technique",
      description: "Urbanisme, travaux publics, entretien des infrastructures",
      couleur: "border-[#856f53]"
    },
    {
      nom: "Service Social et Culturel",
      description: "Aide sociale, sport, culture, jeunesse",
      couleur: "border-[#d3a277]"
    },
    {
      nom: "Service Environnement",
      description: "Propreté, gestion des déchets, protection des écosystèmes",
      couleur: "border-[#0a8734]"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            La Commune de Fimela
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'organisation, les responsables et le patrimoine de notre commune, 
            perle du delta du Sine-Saloum.
          </p>
        </div>

        {/* Équipe Municipale */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-[#3e2a1a] mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-[#0a8734]" />
              Équipe Municipale
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'équipe municipale de Fimela est dirigée par le Maire, représentant légal de la collectivité territoriale. 
              Elle comprend également des adjoints au Maire et des conseillers municipaux, élus au suffrage universel 
              pour un mandat de cinq ans. Ensemble, ils ont pour mission de représenter les citoyens, de défendre 
              l'intérêt général et de conduire les projets de développement de la Commune dans le respect des lois 
              et règlements en vigueur.
            </p>
          </div>
        </section>

        {/* Maire */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#3e2a1a] to-[#856f53] px-8 py-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <User className="w-8 h-8" />
                Maire de Fimela
              </h2>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-[#d3a277] to-[#856f53] rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  KS
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-[#3e2a1a] mb-2">Karim SÉNE</h3>
                  <p className="text-[#0a8734] font-semibold text-xl mb-6">Maire de Fimela</p>
                  <div className="mt-6">
                    <a 
                      href="mailto:karim.sene@commune-fimela.com" 
                      className="bg-[#0a8734] text-white px-8 py-4 rounded-lg hover:bg-[#0a8734]/90 transition-colors text-lg font-semibold"
                    >
                      karim.sene@commune-fimela.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adjoints au Maire */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <Users className="w-8 h-8 text-[#0a8734]" />
            Adjoints au Maire
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0a8734] to-[#5383a9] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  SS
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3e2a1a]">Sokhna SOLLY</h3>
                  <p className="text-[#0a8734] font-semibold">Première Adjointe</p>
                  <a href="mailto:sokhna.solly@commune-fimela.com" className="text-sm text-gray-600 hover:text-[#0a8734]">
                    sokhna.solly@commune-fimela.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5383a9] to-[#856f53] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  AF
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3e2a1a]">Amadou FAYE</h3>
                  <p className="text-[#5383a9] font-semibold">Deuxième Adjoint</p>
                  <a href="mailto:amadou.faye@commune-fimela.com" className="text-sm text-gray-600 hover:text-[#0a8734]">
                    amadou.faye@commune-fimela.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#856f53] to-[#d3a277] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  NB
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3e2a1a]">Nafy Pale BAKHOUM</h3>
                  <p className="text-[#856f53] font-semibold">Troisième Adjointe</p>
                  <a href="mailto:nafy.bakhoum@commune-fimela.com" className="text-sm text-gray-600 hover:text-[#0a8734]">
                    nafy.bakhoum@commune-fimela.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#d3a277] to-[#0a8734] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  MF
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3e2a1a]">Moussa FAYE</h3>
                  <p className="text-[#d3a277] font-semibold text-[#3e2a1a]">Quatrième Adjoint</p>
                  <a href="mailto:moussa.faye@commune-fimela.com" className="text-sm text-gray-600 hover:text-[#0a8734]">
                    moussa.faye@commune-fimela.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conseil Municipal & Commissions */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <Users className="w-8 h-8 text-[#0a8734]" />
            Conseil Municipal & Commissions
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le Conseil municipal de Fimela est l'organe délibérant de la collectivité. Il définit les orientations 
              stratégiques et adopte les budgets. Pour un travail ciblé et efficace, il s'appuie sur des commissions 
              spécialisées, chacune supervisée par un responsable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commissions.map((commission, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#0a8734] hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#3e2a1a] text-lg mb-2">{commission.nom}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <UserCheck className="w-4 h-4 text-[#0a8734]" />
                      <span className="text-[#0a8734] font-semibold">{commission.responsable}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    commission.domaine === 'Santé' ? 'bg-red-100 text-red-800' :
                    commission.domaine === 'Éducation' ? 'bg-blue-100 text-blue-800' :
                    commission.domaine === 'Tourisme' ? 'bg-purple-100 text-purple-800' :
                    commission.domaine === 'Économie' ? 'bg-green-100 text-green-800' :
                    commission.domaine === 'Environnement' ? 'bg-emerald-100 text-emerald-800' :
                    commission.domaine === 'Culture' ? 'bg-orange-100 text-orange-800' :
                    commission.domaine === 'Social' ? 'bg-pink-100 text-pink-800' :
                    commission.domaine === 'Infrastructure' ? 'bg-gray-100 text-gray-800' :
                    commission.domaine === 'Finances' ? 'bg-yellow-100 text-yellow-800' :
                    commission.domaine === 'Urbanisme' ? 'bg-indigo-100 text-indigo-800' :
                    'bg-teal-100 text-teal-800'
                  }`}>
                    {commission.domaine}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Villages et Quartiers */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-12 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-[#0a8734]" />
            Villages et Quartiers
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La Commune de Fimela regroupe plusieurs villages et quartiers, chacun ayant sa propre identité 
              culturelle et économique :
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {villages.map((village, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#0a8734] transition-colors">
                  <h3 className="text-xl font-bold text-[#3e2a1a] mb-2">{village.nom}</h3>
                  <div className="flex justify-between items-center">
                    <span className="bg-[#d3a277] text-[#3e2a1a] px-3 py-1 rounded-full text-sm font-semibold">
                      {village.statut}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organisation des Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Building className="w-8 h-8 text-[#0a8734]" />
            Organisation des Services Municipaux
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Les services municipaux de Fimela assurent la gestion administrative et technique quotidienne 
              de la Commune. Ils sont organisés autour de pôles fonctionnels :
            </p>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className={`border-l-4 ${service.couleur} pl-6`}>
                  <h3 className="font-bold text-[#3e2a1a] mb-2">{service.nom}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partenariats */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <Handshake className="w-8 h-8 text-[#0a8734]" />
            Partenariats & Jumelages
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              La Commune de Fimela développe des relations de coopération décentralisée avec d'autres 
              collectivités locales et institutions, tant au niveau national qu'international. Ces partenariats 
              et jumelages ont pour objectifs :
            </p>
            <div className="mb-6">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#0a8734] rounded-full mt-2 flex-shrink-0"></div>
                  <span>L'échange d'expériences et de bonnes pratiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#0a8734] rounded-full mt-2 flex-shrink-0"></div>
                  <span>La réalisation de projets communs dans les domaines de l'éducation, de la santé, de l'environnement et du tourisme</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#0a8734] rounded-full mt-2 flex-shrink-0"></div>
                  <span>La mobilisation de ressources techniques et financières au service des populations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Documents Officiels */}
        <section>
          <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#0a8734]" />
            Documents Officiels
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dans un souci de transparence et de bonne gouvernance, la Commune met à disposition des citoyens 
              ses documents administratifs et réglementaires : délibérations du Conseil municipal, arrêtés, 
              règlements, budgets, comptes administratifs, rapports annuels et documents de planification. 
              Ces documents peuvent être consultés au siège de la mairie.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommuneSection;