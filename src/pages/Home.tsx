import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { partners } from '../data';

export default function Home() {
  return (
    <>
      <section className="relative bg-enora-blue text-white overflow-hidden flex min-h-[85vh] items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=2000" 
            alt="Consultante experte souriante au Cameroun" 
            className="w-full h-full object-cover object-[center_20%] opacity-40 shrink-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-enora-blue via-enora-blue/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-enora-gold font-semibold tracking-wider uppercase text-xs">MA Mathe Advisory &times; ENORA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-6">
              Sécuriser, structurer et défendre <span className="text-enora-green">votre entreprise.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed">
              Le cabinet <strong>MA Mathe Advisory</strong> accompagne les entreprises du Cameroun dans leur conformité RH, la gestion de contentieux et le recouvrement. Découvrez également <strong className="text-white tracking-wide">enora<span className="text-enora-green-light">,</span></strong> notre solution spécialisée pour l'optimisation et la gestion de vos sinistres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/expertise" className="bg-enora-green hover:bg-enora-green-light text-white px-8 py-4 rounded-full font-semibold text-center transition-colors text-lg shadow-lg shadow-enora-green/20">
                Découvrir nos solutions
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-center transition-colors text-lg">
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-enora-gold/10 py-16 border-y border-enora-gold/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-heading font-medium text-enora-blue italic leading-relaxed"
          >
            « Anticiper et diagnostiquer les risques aujourd'hui garantit la pérennité financière et la tranquillité d'esprit pour demain. »
          </motion.h3>
        </div>
      </section>
      
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-enora-green font-semibold tracking-wider uppercase text-sm mb-3">La Force de notre Cabinet</h2>
              <h3 className="text-3xl sm:text-5xl font-heading font-bold text-enora-blue mb-8 leading-tight">
                L'alliance de l'expertise juridique et de la gestion des risques.
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Intervenant auprès des PME, TPE, et secteurs logistiques à Douala et dans tout le Cameroun, <strong>MA Mathe Advisory</strong> (fondé par Edith Mathe, Juriste & Consultante) propose une offre intégrée d'une efficacité redoutable.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-enora-blue/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-enora-blue"></div>
                  </div>
                  <p className="text-slate-700"><strong>Conformité sociale (CNPS)</strong> & protection juridique.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-enora-blue/10 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-enora-blue"></div>
                  </div>
                  <p className="text-slate-700"><strong>Recouvrement de créances</strong> pour libérer votre cash-flow.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-enora-green/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-enora-green"></div>
                  </div>
                  <p className="text-slate-700"><strong>Solution ENORA</strong> pour auditer et gérer vos sinistres et assurances.</p>
                </li>
              </ul>
              <Link to="/expertise" className="inline-flex items-center text-enora-blue font-bold hover:text-enora-green transition-colors text-lg group">
                Explorer nos domaines d'intervention 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] w-full"
            >
              {/* Main large image - Corporate professionals */}
              <div className="absolute top-0 right-0 w-4/5 h-[400px] rounded-3xl overflow-hidden shadow-2xl z-20">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Équipe de professionnels camerounais en pleine concertation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-enora-blue/10 mix-blend-multiply"></div>
              </div>

              {/* Overlapping smaller image - Logistics/Port, representing key clientele */}
              <div className="absolute bottom-0 left-0 w-3/5 h-[300px] rounded-3xl overflow-hidden shadow-2xl z-30 border-8 border-white">
                <img 
                  src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Secteur logistique et transit au port de Douala" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute top-10 left-12 w-24 h-24 bg-enora-gold/20 rounded-full blur-2xl z-10"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-enora-green/20 rounded-full blur-2xl z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: DOMAINES DE PRATIQUE (Practice Areas) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-enora-gold font-bold tracking-widest uppercase text-sm mb-3">Expertise</h2>
            <h3 className="text-3xl sm:text-5xl font-heading font-extrabold text-enora-blue mb-6">
              Nos Domaines de Pratique Principaux
            </h3>
            <div className="w-24 h-1 bg-enora-green mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              De l'audit de conformité à l'indemnisation de sinistres majeurs, notre approche holistique intègre droit, ressources humaines et ingénierie d'assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 : Juridique & RH */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-enora-blue transition-colors duration-300 shadow-sm border border-slate-100 hover:border-transparent flex flex-col">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-enora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="text-xl font-heading font-bold text-enora-blue group-hover:text-white mb-4 transition-colors">
                Droit & Ressources Humaines
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed flex-grow transition-colors">
                Sécurisation des contrats de travail, gestion des immatriculations CNPS, prévention des litiges sociaux et accompagnement disciplinaire pour fiabiliser vos équipes.
              </p>
              <Link to="/expertise" className="mt-8 text-enora-green font-semibold group-hover:text-enora-gold inline-flex items-center transition-colors">
                En savoir plus <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            {/* Service 2 : Recouvrement */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-enora-blue transition-colors duration-300 shadow-sm border border-slate-100 hover:border-transparent flex flex-col">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-enora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-heading font-bold text-enora-blue group-hover:text-white mb-4 transition-colors">
                Recouvrement de Créances
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed flex-grow transition-colors">
                Stratégies amiables et judiciaires de recouvrement. Nous protégeons le cash-flow et la trésorerie de votre entreprise grâce à une traçabilité rigoureuse des impayés.
              </p>
              <Link to="/expertise" className="mt-8 text-enora-green font-semibold group-hover:text-enora-gold inline-flex items-center transition-colors">
                En savoir plus <span className="ml-2">&rarr;</span>
              </Link>
            </div>

            {/* Service 3 : Audit & Assurance ENORA */}
            <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-enora-blue transition-colors duration-300 shadow-sm border border-slate-100 hover:border-transparent flex flex-col">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-enora-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-heading font-bold text-enora-blue group-hover:text-white mb-4 transition-colors">
                Gestion des Sinistres (ENORA)
              </h4>
              <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed flex-grow transition-colors">
                Audit de vos contrats d'assurances, prévention des risques logistiques (transit, marine, incendie) et coordination de l'indemnisation complète en cas de dommages.
              </p>
              <Link to="/expertise" className="mt-8 text-enora-green font-semibold group-hover:text-enora-gold inline-flex items-center transition-colors">
                En savoir plus <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-enora-gold font-semibold tracking-wider uppercase text-sm mb-3">Réseau Pluriel</h2>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-enora-blue mb-12">
            Les partenaires de la solution ENORA
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-700 max-w-5xl mx-auto">
            {partners.map(partner => (
              <div key={partner} className="bg-white px-6 py-4 rounded-xl font-heading font-bold text-slate-700 shadow-sm border border-slate-200 flex-shrink-0 text-lg hover:shadow-md transition-shadow hover:text-enora-blue hover:border-enora-blue/20">
                {partner}
              </div>
            ))}
          </div>
          <p className="mt-12 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Grâce à notre vaste réseau d'assureurs institutionnels, nous avons la capacité d'auditer vos contrats et de vous garantir les meilleures couvertures, associées à une indemnisation rapide de vos sinistres.
          </p>
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
            Obtenez une consultation personnalisée
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
            Contactez notre équipe d'experts à Douala. Nous sommes prêts à auditer vos risques et sécuriser votre entreprise dès aujourd'hui.
          </p>
          <Link to="/contact" className="inline-block bg-enora-gold hover:bg-yellow-500 text-slate-900 px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl">
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
