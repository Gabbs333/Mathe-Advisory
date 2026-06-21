import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cabinetServices, enoraServices } from '../data';

// Helper to disable body scroll when modal is open
function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLocked]);
}

export default function Expertise() {
  const [selectedService, setSelectedService] = useState<((typeof enoraServices)[0]) | null>(null);
  useBodyScrollLock(!!selectedService);

  return (
    <>
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
        {/* Background Image that looks like a modern business / legal context */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Rencontre professionnelle au Cameroun" 
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-enora-blue via-enora-blue/80 to-transparent mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">Expertise Globale</h1>
          <p className="text-lg md:text-xl text-slate-300 font-light relative z-10 leading-relaxed max-w-3xl mx-auto">
            Intervenant en conformité sociale RH, gestion des litiges, et accompagnement aux sinistres avec la solution dédiée <strong>ENORA</strong>.
          </p>
        </div>
      </section>

      {/* SECTION 1: CABINET MA MATHE ADVISORY */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
            <div>
              <span className="text-enora-gold font-bold tracking-widest uppercase text-sm mb-3 block">Corporate Consulting</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-enora-blue leading-tight mb-6">
                Le Conseil Juridique, RH & Recouvrement
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mix-blend-multiply">
                L'équipe MA Mathe Advisory structure la protection légale de votre entreprise, audite vos contrats, et optimise la gestion de vos ressources humaines. Notre ancrage au Cameroun nous permet d'apporter des réponses pragmatiques et immédiates.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5668802/pexels-photo-5668802.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Consultation d'entreprise au Cameroun" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-enora-blue/10 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cabinetServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-enora-blue/10 text-enora-blue rounded-2xl flex items-center justify-center mb-8">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-slate-800 mb-4 pr-4">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                      {service.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK / ENORA INTRODUCTION */}
      <section className="relative py-32 bg-enora-blue overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          {/* Replace generic meeting with a high-stakes setting / contract signing */}
          <img 
            src="https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Homme d'affaires africain, assurance" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-enora-blue/90 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 border border-white/20">
            <span className="text-enora-green-light font-bold tracking-widest uppercase text-sm">Solution Dédiée</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
            ENORA la maîtrise des sinistres.
          </h2>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Un accompagnement technique, stratégique et de prévention conçu pour réduire systématiquement vos pertes face aux imprévus.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2: ENORA SOLUTIONS */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-center">
            <div className="order-2 lg:order-1 relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Logistique, Port maritime, Transport" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-enora-green/10 mix-blend-multiply"></div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-enora-green font-bold tracking-widest uppercase text-sm mb-3 block">Couverture & Indemnisation</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-800 leading-tight mb-6">
                Des solutions taillées pour les secteurs à forts risques.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Notre solution <strong>ENORA</strong> cible particulièrement les entreprises de transit, industrielles, et PME au Cameroun. Nous vous garantissons un audit minutieux et une coordination efficace avec les assureurs locaux et internationaux.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {enoraServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-xl hover:border-enora-green/40 transition-all focus-within:ring-2 focus-within:ring-enora-green focus:outline-none flex flex-col h-full"
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedService(service);
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="w-14 h-14 bg-enora-green/10 text-enora-green rounded-xl flex items-center justify-center mb-6 group-hover:bg-enora-green group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3 font-light leading-relaxed">
                    {service.short}
                  </p>
                  <div className="flex items-center text-enora-blue font-semibold group-hover:text-enora-green transition-colors mt-auto pt-4 border-t border-slate-100">
                    Découvrir l'offre <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW CTA SECTION */}
      <section className="relative py-24 bg-enora-blue overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5668802/pexels-photo-5668802.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Consultation juridique au Cameroun" 
            className="w-full h-full object-cover opacity-20 object-[center_30%]"
          />
          <div className="absolute inset-0 bg-enora-blue/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white mb-6">
            Vous souhaitez sécuriser votre entreprise ?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Nos solutions d'audit et de conformité sont ajustées à vos besoins locaux et environnementaux.
          </p>
          <Link to="/contact" className="inline-block bg-enora-gold hover:bg-yellow-500 text-slate-900 px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl">
            Demander un audit gratuit
          </Link>
        </div>
      </section>

      {/* MODAL FOR ENORA SERVICES */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh] border border-slate-100"
            >
              <div className="p-8 sm:p-10 flex-1 overflow-y-auto">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="w-16 h-16 bg-enora-green/10 text-enora-green rounded-2xl flex items-center justify-center mb-8">
                  {selectedService.icon && <selectedService.icon className="w-8 h-8" />}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-enora-blue font-bold tracking-widest uppercase mb-3 border-l-2 border-enora-gold pl-3">
                  Solution ENORA
                </div>

                <h3 className="text-3xl font-heading font-extrabold text-slate-800 mb-6">
                  {selectedService.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                  {selectedService.details}
                </p>

                <div className="text-sm bg-enora-blue p-5 rounded-2xl border border-enora-blue/10 text-white shadow-inner">
                  <p className="font-medium flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-enora-gold" /> Parlez-en à un expert
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Bénéficiez d'une analyse préliminaire pour adapter cette solution à votre entreprise.
                  </p>
                  <p className="text-white text-lg">Contact : <strong className="text-enora-gold font-bold">699 56 68 07</strong></p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-8 py-3 rounded-full font-semibold transition-colors w-full sm:w-auto text-center"
                >
                  Retour
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
