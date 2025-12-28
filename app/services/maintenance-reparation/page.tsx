import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Maintenance & Réparation Ordinateur Avranches",
  description: "Réparation PC portable et fixe, changement écran, batterie, disque dur SSD. Atelier à Avranches.",
};

export default function MaintenancePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/services" className="text-sm text-slate-500 hover:text-sky-600 mb-4 inline-block">← Retour aux services</Link>
        <h1 className="text-3xl font-bold mb-6">Maintenance et Réparation en Atelier</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="lead text-xl text-slate-600 mb-8">
            Notre atelier situé au 68 rue de la Constitution est équipé pour diagnostiquer et réparer tous types d'équipements informatiques, quelle que soit la marque ou le lieu d'achat.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Nos prestations atelier</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Diagnostic complet :</strong> Matériel et logiciel.</li>
            <li><strong>Réparation matérielle :</strong> Changement d'écran cassé, remplacement de connecteur de charge, changement de clavier, batterie.</li>
            <li><strong>Amélioration (Upgrade) :</strong> Installation de disques SSD pour rendre votre ordinateur jusqu'à 10x plus rapide, ajout de mémoire RAM.</li>
            <li><strong>PC sur Mesure :</strong> Assemblage d'ordinateurs fixes selon vos spécifications (Bureautique, Gamer, DAO).</li>
            <li><strong>Restauration :</strong> Nettoyage interne (poussière, pâte thermique) pour éviter la surchauffe.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Processus de prise en charge</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Dépôt du matériel à l'atelier (après-midi 14h-18h).</li>
            <li>Diagnostic et établissement d'un devis si nécessaire.</li>
            <li>Réparation après accord.</li>
            <li>Tests de contrôle qualité.</li>
            <li>Restitution du matériel avec conseils d'utilisation.</li>
          </ol>

          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-8">
            <h4 className="font-bold text-sky-900 mb-2">Recyclage Responsable</h4>
            <p className="text-sm text-sky-800">
              Si votre matériel n'est pas réparable ou si le coût excède la valeur, nous pouvons nous charger de son dépôt en point de collecte agréé (Ecosystem) ou vous le restituer.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/contact">Nous trouver</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/tarifs">Voir les forfaits</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

