export default function WarningBanner() {
    return (
      <div className="bg-black text-white text-sm py-2">
        <div className="flex justify-between items-center w-full px-10">
          <img src="images/interdit-aux-mineurs.png" alt="Logo -18" className="h-8 w-8 ml-2" />
          <div className="flex-1 text-center">
            <div>
              <span>JOUEUR COMPORTE DES RISQUES : ENDETTEMENT, ISOLEMENT, DÉPENDANCE.</span>
            </div>
            <div>
              <span>POUR ÊTRE AIDÉ, APPELEZ LE 09-74-75-13-13 (APPEL NON SURTAXÉ)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }