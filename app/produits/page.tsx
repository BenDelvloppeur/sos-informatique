import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, Monitor, Mouse, HardDrive, Shield } from "lucide-react";

export const metadata = {
  title: "Vente Matériel Informatique Avranches",
  description: "Vente d'ordinateurs, composants, périphériques et logiciels à Avranches. Conseil expert.",
};

export default function ProduitsPage() {
  const categories = [
    { name: "Ordinateurs", icon: Monitor, desc: "Portables et Fixes (Asus, Lenovo, HP...)" },
    { name: "Composants", icon: Cpu, desc: "Cartes graphiques, Processeurs, Cartes mères" },
    { name: "Périphériques", icon: Mouse, desc: "Claviers, Souris, Écrans, Imprimantes" },
    { name: "Stockage", icon: HardDrive, desc: "Disques SSD, Disques durs externes, Clés USB" },
    { name: "Sécurité", icon: Shield, desc: "Antivirus, Onduleurs" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Vente de Matériel</h1>
        <p className="text-slate-600">
          Nous sélectionnons pour vous les meilleurs produits du marché. 
          Disponibilité selon stocks en magasin.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:shadow-md transition-shadow">
            <cat.icon className="h-10 w-10 mx-auto text-sky-500 mb-3" />
            <h3 className="font-semibold text-slate-900">{cat.name}</h3>
            <p className="text-xs text-slate-500 mt-2">{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d'un PC sur mesure ?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Nous assemblons votre ordinateur selon vos besoins spécifiques (Gaming, DAO, Bureautique intensive). 
          Choisissez vos composants, nous nous occupons du montage et de l'installation.
        </p>
        <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
          <Link href="/contact">Demander un devis montage</Link>
        </Button>
      </div>
    </div>
  );
}

