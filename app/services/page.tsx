import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor, HardDrive, Shield, PenTool, Lock } from "lucide-react";

export const metadata = {
  title: "Nos Services Informatiques - Maintenance & Réparation",
  description: "Découvrez l'ensemble de nos services : maintenance, réparation PC, récupération de données, sécurité et dépannage à domicile.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nos Services Informatiques</h1>

      <div className="grid gap-12">
        
        {/* Maintenance */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-sky-100 p-4 rounded-full text-sky-600 shrink-0">
            <Monitor className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Maintenance & Réparation Atelier</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nous prenons en charge votre matériel (PC fixe, portable, toutes marques) dans notre atelier à Avranches.
              Notre expertise nous permet de réparer même hors garantie, et de proposer des solutions économiques.
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-slate-700 mb-6">
              <li className="flex items-center gap-2"><PenTool className="h-4 w-4 text-sky-500"/> Réparation matérielle (écran, connecteur, clavier...)</li>
              <li className="flex items-center gap-2"><HardDrive className="h-4 w-4 text-sky-500"/> Remplacement disque dur (SSD) & RAM</li>
              <li className="flex items-center gap-2"><Monitor className="h-4 w-4 text-sky-500"/> Assemblage PC sur mesure</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-sky-500"/> Nettoyage physique et logiciel</li>
            </ul>
            <Button asChild>
              <Link href="/services/maintenance-reparation">Détails Maintenance</Link>
            </Button>
          </div>
        </section>

        {/* Dépannage */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 shrink-0">
            <Shield className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Dépannage à Domicile / Sur Site</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Pour les problèmes liés à votre connexion internet, à votre réseau ou aux périphériques lourds (imprimantes), nous intervenons directement chez vous.
            </p>
            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg mb-6 text-sm font-medium">
              Les interventions à domicile se déroulent exclusivement le matin (Mardi-Samedi) sur rendez-vous.
            </div>
            <Button asChild variant="secondary" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href="/services/depannage-domicile">En savoir plus</Link>
            </Button>
          </div>
        </section>

        {/* Sécurité */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-indigo-100 p-4 rounded-full text-indigo-600 shrink-0">
            <Lock className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Sécurité & Données</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              La perte de données ou le piratage sont des risques majeurs. Nous proposons des solutions de prévention et de guérison.
            </p>
            <ul className="text-slate-700 space-y-2 mb-6">
              <li>• Suppression de virus persistants, malwares, rançongiciels.</li>
              <li>• Récupération de données sur disques endommagés (selon diagnostic).</li>
              <li>• Mise en place de sauvegardes automatiques.</li>
            </ul>
            <div className="text-sm text-slate-500 italic">
              Nous proposons également le recyclage de votre matériel obsolète en point de collecte agréé (Ecosystem).
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

