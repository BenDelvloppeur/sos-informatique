import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Dépannage Informatique à Domicile Avranches",
  description: "Intervention technicien informatique à domicile à Avranches et alentours. Installation box, imprimante, réseau.",
};

export default function DomicilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/services" className="text-sm text-slate-500 hover:text-sky-600 mb-4 inline-block">← Retour aux services</Link>
        <h1 className="text-3xl font-bold mb-6">Dépannage à Domicile & Sur Site</h1>
        
        <div className="bg-amber-50 p-6 rounded-lg mb-8 border border-amber-100">
          <p className="font-medium text-amber-900">
            ⏰ <strong>Important :</strong> Les interventions à domicile sont réalisées <strong>le matin</strong> (Mardi au Vendredi), sur rendez-vous uniquement.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Certains problèmes ne peuvent pas être résolus en atelier, notamment ceux liés à votre environnement de connexion ou à des périphériques encombrants. C'est pourquoi SOS Service Informatique se déplace chez vous.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Pourquoi une intervention à domicile ?</h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            <li className="bg-white p-4 border rounded shadow-sm">
              <strong>Connexion Internet</strong>
              <p className="text-sm text-slate-500">Installation Box (Free, Orange, SFR, Bouygues), configuration WiFi, CPL.</p>
            </li>
            <li className="bg-white p-4 border rounded shadow-sm">
              <strong>Périphériques</strong>
              <p className="text-sm text-slate-500">Installation d'imprimantes, scanners, serveurs NAS.</p>
            </li>
            <li className="bg-white p-4 border rounded shadow-sm">
              <strong>Formation</strong>
              <p className="text-sm text-slate-500">Aide à la prise en main de votre nouvel ordinateur ou tablette dans votre environnement.</p>
            </li>
            <li className="bg-white p-4 border rounded shadow-sm">
              <strong>Réseau</strong>
              <p className="text-sm text-slate-500">Câblage RJ45, switchs, partage de fichiers.</p>
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Comment prendre rendez-vous ?</h3>
          <p className="mb-4">
            Contactez-nous par téléphone ou via le formulaire de contact pour décrire votre problème. Nous conviendrons ensemble d'un créneau d'intervention en matinée.
          </p>

          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Demander un RDV</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

