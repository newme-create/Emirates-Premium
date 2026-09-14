import React from 'react';
import { ActiveTab } from '../types';
import { PRICING_AIR_PLANS } from '../data/mockData';
import { CtaBanner } from '../components/CtaBanner';
import { 
  Plane, Ship, Clock, CheckCircle2, ShieldCheck, ArrowRight, 
  Smartphone, Laptop, Car, Factory, HelpCircle
} from 'lucide-react';

interface TarifsViewProps {
  onOpenDevis: () => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const TarifsView: React.FC<TarifsViewProps> = ({ onOpenDevis, setActiveTab }) => {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Visual Left Box with Container Ship Photo */}
            <div className="lg:col-span-4 bg-[#061124] rounded-2xl overflow-hidden text-white flex flex-col justify-between shadow-md border border-slate-700 group">
              <div className="h-44 w-full relative overflow-hidden bg-slate-900">
                <img 
                  src="/assets/container-ship.jpg" 
                  alt="Porte-conteneurs Fret Maritime Emirates Premium" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061124] via-transparent to-black/30"></div>
                <span className="absolute top-3 left-3 text-[10px] font-bold bg-[#C89736] text-[#0B1B36] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  GROUPAGE & CONTENEURS
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-2xl mb-3">
                    Acheminement maritime par le port de Douala
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Groupage au mètre cube (CBM), conteneurs complets de 20 et 40 pieds, dépotage sécurisé et acheminement vers les zones commerciales de Yaoundé et Douala.
                  </p>

                  <div className="space-y-2 text-xs text-slate-200 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Port de départ : Guangzhou / Shenzhen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>Port d'arrivée : Port Autonome de Douala</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenDevis}
                  className="w-full py-3 bg-[#C89736] hover:bg-[#b08229] text-[#0B1B36] font-bold text-xs rounded-xl transition-colors shadow-md cursor-pointer"
                >
                  Calculer le coût de mon conteneur
                </button>
              </div>
            </div>

            {/* Table Right Box */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3.5 px-4">Type de service maritime</th>
                      <th className="py-3.5 px-4">Spécifications</th>
                      <th className="py-3.5 px-4 text-right">Tarif indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-800">Groupage CBM</td>
                      <td className="py-3.5 px-4 text-slate-500">Facturation au mètre cube, cartons mixtes</td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-[#C89736]">380 000 XAF / CBM</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-800">Conteneur 20 pieds (20FT)</td>
                      <td className="py-3.5 px-4 text-slate-500">Capacité ~33 m³, scellé usine exclusif</td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-[#C89736]">1 850 000 XAF</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-800">Conteneur 40 pieds (40FT)</td>
                      <td className="py-3.5 px-4 text-slate-500">Capacité ~67 m³, grands volumes industriels</td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-[#C89736]">3 200 000 XAF</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-800">Marchandises hors-gabarit</td>
                      <td className="py-3.5 px-4 text-slate-500">Engins, tracteurs, machines lourdes</td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-slate-700">Sur devis détaillé</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] text-slate-500">
                <span>✓ Dédouanement portuaire</span>
                <span>✓ Dépotage sécurisé</span>
                <span>✓ Manutention incluse</span>
                <span>✓ Suivi navire en direct</span>
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
