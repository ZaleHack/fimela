import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    service: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#d3a277]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#3e2a1a] mb-6">
            Contact & Urgences
          </h1>
          <div className="w-24 h-1 bg-[#0a8734] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Contactez les services municipaux de Fimela. Nous sommes à votre écoute 
            pour répondre à vos questions et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <section>
            <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-[#0a8734]" />
              Écrivez-nous
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#3e2a1a] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#0a8734] focus:ring-2 focus:ring-[#0a8734]/20"
                    placeholder="Votre nom et prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#3e2a1a] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#0a8734] focus:ring-2 focus:ring-[#0a8734]/20"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#3e2a1a] mb-2">
                  Sujet de votre message *
                </label>
                <input
                  type="text"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#0a8734] focus:ring-2 focus:ring-[#0a8734]/20"
                  placeholder="Résumé de votre demande"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#3e2a1a] mb-2">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#0a8734] focus:ring-2 focus:ring-[#0a8734]/20"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a8734] text-white py-4 rounded-lg hover:bg-[#0a8734]/90 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer le Message
              </button>
            </form>
          </section>

          {/* Informations de Contact */}
          <section className="space-y-8">
            {/* Localisation */}
            <div>
              <h2 className="text-3xl font-bold text-[#3e2a1a] mb-8 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-[#0a8734]" />
                Localisation
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0a8734] mt-1" />
                    <div>
                      <div className="font-semibold text-[#3e2a1a]">Adresse</div>
                      <div className="text-gray-600">Commune de Fimela</div>
                      <div className="text-gray-600">Région de Fatick, Sénégal</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#5383a9] to-[#0a8734] h-48 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  Carte Interactive
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#3e2a1a] mb-6">Contact</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0a8734]" />
                    <div className="text-sm">
                      <div className="text-gray-300">Mairie de Fimela</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0a8734]" />
                    <div className="text-sm">
                      <div className="text-gray-300">Email général</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;