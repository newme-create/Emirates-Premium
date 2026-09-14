import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { PRICING_AIR_PLANS, PRICING_MARITIME_CATEGORIES } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Plane, Ship, Clock, CheckCircle2, ShieldCheck, ArrowRight, 
  Smartphone, Laptop, Car, Factory, HelpCircle, Package, Boxes, Wrench, Zap, Calculator, Sparkles
} from 'lucide-react';

interface TarifsViewProps {
  onOpenDevis: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const TarifsView: React.FC<TarifsViewProps> = ({ onOpenDevis, setActiveTab }) => {
  const [selectedMaritimeCategory, setSelectedMaritimeCategory] = useState<string>('ordinaires');
  const [inputCbm, setInputCbm] = useState<string>('2');

  const currentCategory = PRICING_MARITIME_CATEGORIES.find(c => c.id === selectedMaritimeCategory) || PRICING_MARITIME_CATEGORIES[0];
  const parsedCbm = Math.max(0.1, parseFloat(inputCbm) || 1);
  const estimatedMaritimeTotal = currentCategory.pricePerCbm 
    ? (parsedCbm * currentCategory.pricePerCbm).toLocaleString('fr-FR') + ' FCFA'
    : 'Sur devis personnalisé';
  return (
    <div className="space-y-0">
      
      {/* Hero Banner with multimodal cargo background */}
      <section className="relative bg-[#061124] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/assets/hero-cargo.jpg" 
            alt="Tarifs Emirates Premium" 
            className="w-full h-full object-cover object-center opacity-30 filter brightness-90 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061124] via-[#061124]/90 to-[#0B1B36]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top slogan in handwriting/serif style */}
          <div className="hidden lg:block absolute right-4 top-2 text-right">
            <span className="font-serif italic text-slate-300 text-lg block">Votre cargo.</span>
            <span className="font-serif italic text-slate-300 text-lg block">Notre priorité.</span>
            <span className="font-serif italic font-bold text-[#E0A938] text-xl block">Votre succès.</span>
          </div>

          <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <button onClick={() => setActiveTab('accueil')} className="hover:underline cursor-pointer">Accueil</button>
            <span>&gt;</span>
            <span className="text-white">Tarifs</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Nos tarifs <span className="text-[#C89736]">transparents</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Des solutions adaptées à vos besoins, avec des tarifs compétitifs, clairs et sans aucun frais caché au port ou à l'aéroport.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tarifs nets & dédouanement inclus</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Délais respectés et garantis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Devis gratuit sous 60 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Fret Aérien Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36]">
                  Fret aérien
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Rapide, sécurisé et idéal pour vos marchandises urgentes et à forte valeur.
                </p>
              </div>
            </div>

            {/* Delivery Times Badge Box */}
            <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs flex items-center gap-4 text-xs">
              <span className="font-bold text-[#0B1B36] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                Délais garantis :
              </span>
              <div className="border-l border-slate-200 pl-4 flex items-center gap-6">
                <div>
                  <span className="text-slate-400 block text-[10px]">Super Express</span>
                  <strong className="text-slate-800 font-extrabold">24 h</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Express</span>
                  <strong className="text-slate-800 font-extrabold">48 - 72 h</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Standard</span>
                  <strong className="text-slate-800 font-extrabold">7 - 14 jours</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Air Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PRICING_AIR_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs relative ${
                  plan.popular
                    ? 'border-2 border-amber-500 shadow-lg ring-4 ring-amber-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Visual Image Header */}
                <div className="h-28 w-full relative overflow-hidden bg-slate-900">
                  <img 
                    src="/assets/air-cargo.jpg" 
                    alt={plan.name}
                    className="w-full h-full object-cover object-center filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  {plan.popular && (
                    <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#C89736] text-[#0B1B36] text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {plan.speedTag || 'Populaire'}
                    </span>
                  )}
                  <span className="absolute bottom-2 left-3 text-xs font-bold text-amber-300 drop-shadow-xs flex items-center gap-1">
                    <Plane className="w-3.5 h-3.5" />
                    <span>Départ régulier Guangzhou</span>
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-[#0B1B36] mb-1">
                      {plan.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                      {plan.subtitle}
                    </p>

                    <div className="mb-6 pb-4 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl font-extrabold text-[#C89736]">
                          {plan.price}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {plan.unit}
                        </span>
                      </div>
                      {plan.condition && (
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {plan.condition}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenDevis}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] shadow-md'
                        : 'bg-[#0B1B36] hover:bg-[#152A4A] text-white'
                    }`}
                  >
                    <span>Demander un devis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Fret Maritime Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1B36]">
                  Fret maritime
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Économique, fiable et parfaitement adapté aux gros volumes et matériels lourds.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs flex items-center gap-3 text-xs">
              <Clock className="w-4 h-4 text-blue-600" />
              <div>
                <span className="text-slate-400 block text-[10px]">Délai moyen de traversée</span>
                <strong className="text-slate-800 font-extrabold">20 à 45 jours (Chine ➔ Douala)</strong>
              </div>
            </div>
          </div>

          {/* Maritime Grid Container */}
          <div className="space-y-8 mb-16">

            {/* Official Maritime CBM Pricing Table & Simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (8 cols): Official CBM Rates Table */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Barème Officiel Groupage Maritime (LCL / CBM)
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#0B1B36] mt-1">
                      Grille tarifaire au mètre cube (CBM)
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Départ : Guangzhou / Shenzhen ➔ Port de Douala
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4 sm:px-6">Catégorie</th>
                        <th className="py-3.5 px-4 text-right sm:text-center">Tarif</th>
                        <th className="py-3.5 px-4 sm:px-6">Exemples de marchandises</th>
                        <th className="py-3.5 px-4 text-right">Simulation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PRICING_MARITIME_CATEGORIES.map((item) => {
                        const isSelected = selectedMaritimeCategory === item.id;
                        return (
                          <tr 
                            key={item.id} 
                            onClick={() => setSelectedMaritimeCategory(item.id)}
                            className={`transition-colors cursor-pointer hover:bg-slate-50/80 ${
                              isSelected ? 'bg-amber-50/50' : ''
                            }`}
                          >
                            <td className="py-4 px-4 sm:px-6">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  item.id === 'ordinaires' ? 'bg-emerald-100 text-emerald-700' :
                                  item.id === 'lourdes' ? 'bg-blue-100 text-blue-700' :
                                  item.id === 'machines' ? 'bg-amber-100 text-amber-700' :
                                  'bg-purple-100 text-purple-700'
                                }`}>
                                  {item.id === 'ordinaires' && <Package className="w-4 h-4" />}
                                  {item.id === 'lourdes' && <Boxes className="w-4 h-4" />}
                                  {item.id === 'machines' && <Wrench className="w-4 h-4" />}
                                  {item.id === 'batteries-speciaux' && <Zap className="w-4 h-4" />}
                                </div>
                                <div>
                                  <span className="font-bold text-slate-900 block">
                                    {item.category}
                                  </span>
                                  <span className="text-[11px] text-slate-400">
                                    {item.badge}
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td className="py-4 px-4 text-right sm:text-center">
                              <span className="font-extrabold text-[#0B1B36] sm:text-base font-serif whitespace-nowrap">
                                {item.tariff}
                              </span>
                            </td>

                            <td className="py-4 px-4 sm:px-6 text-slate-600 text-xs leading-relaxed max-w-xs">
                              {item.examples}
                            </td>

                            <td className="py-4 px-4 text-right">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedMaritimeCategory(item.id);
                                }}
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  isSelected 
                                    ? 'bg-[#0B1B36] text-amber-400 shadow-xs' 
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                              >
                                {isSelected ? 'Sélectionné' : 'Calculer'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] text-slate-600">
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dédouanement portuaire
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dépotage sécurisé Douala
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Manutention portuaire incluse
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Suivi satellite navire
                  </span>
                </div>
              </div>

              {/* Right Column (4 cols): Live CBM Simulator & Port Info */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Live CBM Calculator Card */}
                <div className="bg-[#0B1B36] text-white rounded-2xl p-6 shadow-md border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-base text-white">
                        Simulateur CBM Maritime
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
                      Estimation direct
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-4">
                    Sélectionnez la nature de vos biens et ajustez votre volume au mètre cube :
                  </p>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1 font-semibold">
                        Catégorie choisie :
                      </label>
                      <select
                        value={selectedMaritimeCategory}
                        onChange={(e) => setSelectedMaritimeCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-medium focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                      >
                        {PRICING_MARITIME_CATEGORIES.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.category} ({c.tariff})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-slate-400 font-semibold">
                          Volume estimé en CBM (m³) :
                        </label>
                        <span className="text-amber-400 font-mono font-bold">
                          {parsedCbm} m³
                        </span>
                      </div>
                      <input
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={inputCbm}
                        onChange={(e) => setInputCbm(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:ring-2 focus:ring-amber-400 focus:outline-hidden"
                        placeholder="Ex: 2"
                      />
                      
                      {/* Quick CBM pills */}
                      <div className="flex items-center gap-1.5 mt-2">
                        {['1', '2', '3', '5', '8'].map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setInputCbm(vol)}
                            className={`px-2 py-1 rounded text-[11px] font-mono cursor-pointer transition-colors ${
                              inputCbm === vol
                                ? 'bg-amber-400 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            {vol} CBM
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculation summary */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700 space-y-2 mt-4">
                      <div className="flex justify-between items-center text-slate-400 text-[11px]">
                        <span>Tarif de base :</span>
                        <span className="text-slate-200 font-semibold">{currentCategory.tariff}</span>
                      </div>
                      {currentCategory.pricePerCbm && (
                        <div className="flex justify-between items-center text-slate-400 text-[11px]">
                          <span>Formule de calcul :</span>
                          <span className="font-mono text-slate-300">{parsedCbm} CBM × {currentCategory.pricePerCbm.toLocaleString('fr-FR')}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                        <span className="text-slate-300 font-bold text-xs">Total estimé :</span>
                        <span className="font-mono text-base font-extrabold text-[#E0A938]">
                          {estimatedMaritimeTotal}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenDevis}
                      className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Réserver ce volume par devis</span>
                    </button>
                  </div>
                </div>

                {/* Additional Full Container Loads (FCL) Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <h4 className="font-serif font-bold text-sm text-[#0B1B36] mb-2 flex items-center gap-1.5">
                    <Ship className="w-4 h-4 text-blue-600" />
                    <span>Besoin d'un conteneur entier (FCL) ?</span>
                  </h4>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    Pour les importateurs avec de gros volumes réguliers :
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-slate-800">Conteneur 20FT (~33 m³)</span>
                      <strong className="text-blue-900 font-mono">1 850 000 FCFA</strong>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-slate-800">Conteneur 40FT (~67 m³)</span>
                      <strong className="text-blue-900 font-mono">3 200 000 FCFA</strong>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* 3-Column Grid: Special items, Why Choose, Custom quote */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Col 1: Special Rates */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="font-serif font-bold text-lg text-[#0B1B36] mb-4 flex items-center gap-2">
                <span>📦</span>
                <span>Autres tarifs spéciaux</span>
              </h4>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-700">
                    <Smartphone className="w-4 h-4 text-slate-400" />
                    Téléphone bas de gamme
                  </span>
                  <strong className="text-slate-900 font-bold">5 000 XAF / kg</strong>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-700">
                    <Smartphone className="w-4 h-4 text-slate-400" />
                    Téléphone haut de gamme
                  </span>
                  <strong className="text-slate-900 font-bold">10 000 – 25 000 XAF / pce</strong>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-700">
                    <Laptop className="w-4 h-4 text-slate-400" />
                    Ordinateur portable
                  </span>
                  <strong className="text-slate-900 font-bold">25 000 XAF / pce</strong>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-700">
                    <Car className="w-4 h-4 text-slate-400" />
                    Véhicule (Auto)
                  </span>
                  <strong className="text-amber-700 font-bold">Sur devis officiel</strong>
                </div>

                <div className="py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-700">
                    <Factory className="w-4 h-4 text-slate-400" />
                    Matériel industriel lourd
                  </span>
                  <strong className="text-amber-700 font-bold">Sur devis officiel</strong>
                </div>
              </div>
            </div>

            {/* Col 2: Why our rates are transparent */}
            <div className="bg-[#0B1B36] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-lg text-white mb-4">
                  Pourquoi choisir nos tarifs ?
                </h4>

                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#C89736] text-[#0B1B36] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Tarifs compétitifs et adaptés à votre budget</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#C89736] text-[#0B1B36] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Absence garantie de faux frais de douane</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#C89736] text-[#0B1B36] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Devis personnalisé selon votre marchandise</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#C89736] text-[#0B1B36] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    <span>Pesée électronique certifiée en direct</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-700 mt-6 text-xs text-amber-400 font-serif italic">
                "Votre satisfaction et la pérennité de votre commerce sont notre priorité."
              </div>
            </div>

            {/* Col 3: Custom Quote Request with authentic WhatsApp logo */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-2xl border border-amber-200 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-lg text-[#0B1B36] mb-2">
                  Besoin d'un tarif personnalisé ?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Notre équipe vous accompagne pour trouver la meilleure solution selon le volume, le type d'article et l'urgence.
                </p>

                <button
                  onClick={onOpenDevis}
                  className="w-full py-3 bg-[#0B1B36] hover:bg-[#152A4A] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer mb-3"
                >
                  Demander une cotation en ligne
                </button>
              </div>

              <a
                href="https://wa.me/8613249700362?text=Bonjour,%20je%20souhaite%20un%20tarif%20personnalis%C3%A9"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#112340] hover:bg-[#18315b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2.5 shadow-xs transition-colors border border-slate-300"
              >
                <img 
                  src="/assets/whatsapp-logo.webp" 
                  alt="WhatsApp" 
                  className="w-4 h-4 rounded-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span>Discuter sur WhatsApp (+86)</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Reusable Master CTA Banner with cargo image & WhatsApp logo */}
      <CtaBanner 
        title="Besoin d'un tarif personnalisé ?"
        subtitle="Nos équipes de Guangzhou et du Cameroun sont à votre disposition pour vous calculer la cotation la plus avantageuse."
        onOpenDevis={onOpenDevis}
      />

    </div>
  );
};
