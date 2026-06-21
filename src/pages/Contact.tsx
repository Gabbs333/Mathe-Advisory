import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-enora-green font-semibold tracking-wider uppercase text-sm mb-3">Contactez-nous</h1>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-enora-blue mb-6">
              Parlons de votre protection
            </h2>
            <p className="text-slate-600 text-lg">
              Notre équipe basée à Douala est prête à auditer vos risques et trouver la solution adaptée à votre situation.
            </p>
          </div>

          <div className="bg-enora-blue rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Nos Coordonnées</h3>
              <p className="text-slate-300 mb-8 border-l-2 border-enora-gold pl-4 italic">
                Edith Mathe<br/>
                Consultante RH, Juridique & Contentieux
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-enora-green mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-xl">Adresse</h4>
                    <p className="text-slate-300 mt-2">Boulevard de la liberte, Akwa, Douala, Cameroun</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-enora-green mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-xl">Téléphone</h4>
                    <p className="text-slate-300 mt-2">699 56 68 07<br/>677 45 99 45</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-enora-green mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="text-white font-medium text-xl">Email</h4>
                    <p className="text-slate-300 mt-2">edithmathe@matheadvisory.pro</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-full bg-slate-200">
              {/* Image of modern office building in Douala/Africa context */}
              <img 
                src="https://images.pexels.com/photos/5668783/pexels-photo-5668783.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Bâtiment et bureaux modernes en Afrique"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
