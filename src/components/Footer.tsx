export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-400 gap-8">
        <div className="text-center md:text-left flex flex-col items-center md:items-start group cursor-default">
          <div className="flex flex-col items-center justify-center bg-white p-3 rounded-lg mb-4">
            <div className="flex items-baseline -mb-1">
              <span className="text-3xl font-heading font-medium text-enora-gold" style={{letterSpacing: '-0.08em'}}>M</span>
              <span className="text-3xl font-heading font-medium text-enora-blue" style={{letterSpacing: '-0.08em', marginLeft: '-0.1em'}}>A</span>
            </div>
            <span className="text-[8px] font-heading font-semibold text-enora-blue tracking-[0.2em] uppercase border-t border-enora-blue/80 pt-[2px] mt-1 w-full text-center">
              Mathe Advisory
            </span>
          </div>
          <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
            Cabinet de Conseil RH, Juridique & Contentieux.<br/>
            Également porteur de <strong className="text-white">ENORA</strong>, la solution intégrée pour la gestion de vos sinistres et assurances.
          </p>
        </div>
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} MA Mathe Advisory.<br/>
          Tous droits réservés.<br/>
          Boulevard de la liberté, Akwa, Douala, Cameroun.
        </div>
      </div>

      {/* Ka Labs signature */}
      <div className="mt-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-slate-500 tracking-wide">
            Made with <span className="text-red-400" aria-label="love">♥</span> by <span className="text-slate-400 font-medium">Ka Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
