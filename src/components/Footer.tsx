import React from 'react';
import { Facebook, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const quickLinks = [
    { name: 'État Civil', section: 'demarches' },
    { name: 'Urbanisme', section: 'demarches' },
    { name: 'Marchés Publics', section: 'transparence' },
    { name: 'Action Sociale', section: 'vie-locale' },
    { name: 'Contact', section: 'contact' }
  ];

  const institutionnels = [
    { name: 'Présidence du Sénégal', href: 'https://www.presidence.sn' },
    { name: 'Conseil Régional de Fatick', href: '#' },
    { name: 'Préfecture de Foundiougne', href: '#' },
    { name: 'PNDS Sine-Saloum', href: '#' }
  ];

  const services = [
    { name: 'Urgences: 18 / 15 / 17', href: 'tel:18' },
    { name: 'Mairie: +221 33 XXX XX XX', href: 'tel:+221339999999' },
    { name: 'Email: contact@fimela.sn', href: 'mailto:contact@fimela.sn' }
  ];

  return (
    <footer className="bg-[#3e2a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d3a277] rounded-full flex items-center justify-center text-[#3e2a1a] font-bold">
                F
              </div>
              <div>
                <h3 className="text-xl font-bold">Commune de Fimela</h3>
                <p className="text-[#d3a277] text-sm">Perle du Sine-Saloum</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Située au cœur du delta du Sine-Saloum, classé patrimoine mondial de l'UNESCO, 
              la Commune de Fimela est un lieu unique où nature, culture et hospitalité se rencontrent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#0a8734] rounded-full flex items-center justify-center hover:bg-[#0a8734]/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#5383a9] rounded-full flex items-center justify-center hover:bg-[#5383a9]/80 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@fimela.sn" className="w-10 h-10 bg-[#856f53] rounded-full flex items-center justify-center hover:bg-[#856f53]/80 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d3a277]">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setActiveSection(link.section)}
                    className="text-gray-300 hover:text-[#0a8734] transition-colors text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-[#0a8734] rounded-full"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Partenaires */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d3a277]">Partenaires</h4>
            <ul className="space-y-3">
              {institutionnels.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-[#0a8734] transition-colors text-sm flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d3a277]">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0a8734] mt-0.5" />
                <div className="text-sm">
                  <div className="text-gray-300">Avenue Léopold Sédar Senghor</div>
                  <div className="text-gray-300">BP 45 Fimela, Fatick</div>
                  <div className="text-gray-300">République du Sénégal</div>
                </div>
              </div>
              
              <div className="space-y-2">
                {services.map((service, index) => (
                  <a 
                    key={index}
                    href={service.href}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#0a8734] transition-colors"
                  >
                    {service.href.startsWith('tel:') ? (
                      <Phone className="w-4 h-4 text-[#0a8734]" />
                    ) : (
                      <Mail className="w-4 h-4 text-[#0a8734]" />
                    )}
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section Newsletter */}
        <div className="border-t border-[#856f53] pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-[#d3a277]">Restez Informé</h4>
            <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités 
              et informations importantes de la commune de Fimela.
            </p>
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 p-3 rounded-lg bg-white/10 border border-[#856f53] text-white placeholder-gray-400 focus:border-[#0a8734] focus:ring-2 focus:ring-[#0a8734]/20"
              />
              <button className="bg-[#0a8734] text-white px-6 py-3 rounded-lg hover:bg-[#0a8734]/80 transition-colors font-semibold">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#856f53] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Commune de Fimela. Tous droits réservés.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0a8734] transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0a8734] transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0a8734] transition-colors">
                Accessibilité
              </a>
            </div>
            <div className="text-sm text-gray-400">
              Site officiel de la République du Sénégal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;