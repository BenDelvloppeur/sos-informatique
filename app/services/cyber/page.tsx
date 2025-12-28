import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Espace Cyber Avranches - Accès Internet",
  description: "Cyber café à Avranches : accès internet, impressions, scans. Tarifs à l'heure ou forfait.",
};

export default function CyberPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <Link href="/services" className="text-sm text-slate-500 hover:text-sky-600 mb-4 inline-block">← Retour aux services</Link>
        <h1 className="text-3xl font-bold mb-6">Espace Cyber & Bureautique</h1>
        <p className="text-lg text-slate-600 mb-12">
          Besoin d'un ordinateur pour consulter vos emails, imprimer des documents ou naviguer sur internet ? 
          Nous mettons à disposition des postes connectés en libre-service.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Accès Ponctuel</h3>
            <div className="text-4xl font-bold text-sky-600 mb-2">2,50 €</div>
            <div className="text-sm text-slate-500 mb-6">pour 1 heure</div>
            <ul className="text-slate-600 space-y-2">
              <li>• Connexion Haut Débit</li>
              <li>• Navigateurs sécurisés</li>
              <li>• Logiciels bureautique (Word, Excel...)</li>
              <li>• Possibilité d'impression (surcoût)</li>
            </ul>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Carte 10 Heures</h3>
            <div className="text-4xl font-bold text-sky-400 mb-2">10,00 €</div>
            <div className="text-sm text-slate-400 mb-6">soit 1,00 € l'heure</div>
            <ul className="text-slate-300 space-y-2">
              <li>• Valable 1 an</li>
              <li>• Utilisable en plusieurs fois</li>
              <li>• Idéal pour usage régulier</li>
              <li>• Assistance démarrage incluse</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-lg">
          <h3 className="text-lg font-bold mb-4">Services annexes</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-700">
            <span className="bg-white px-4 py-2 rounded shadow-sm">Impressions N&B / Couleur</span>
            <span className="bg-white px-4 py-2 rounded shadow-sm">Numérisation (Scan)</span>
            <span className="bg-white px-4 py-2 rounded shadow-sm">Photocopies</span>
            <span className="bg-white px-4 py-2 rounded shadow-sm">Reliure dossiers</span>
          </div>
        </div>

        <div className="mt-8">
           <p className="text-sm text-slate-500 mb-4">Horaires d'accès : {siteConfig.hours.display.filter(h => h.day === "Lundi")[0].hours} (sauf week-end et mardi)</p>
           <Button asChild variant="outline">
              <Link href="/contact">Nous trouver</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

