import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs Dépannage Informatique",
  description: "Consultez nos tarifs de réparation ordinateur, formatage, virus et maintenance à Avranches.",
};

export default function TarifsPage() {
  const prices = [
    {
      name: "Forfait Express",
      price: "39,90 €",
      duration: "30 min",
      description: "Petits problèmes, installations simples, assistance rapide, conseil.",
      guarantee: "2 semaines",
    },
    {
      name: "Forfait Dépannage",
      price: "59,90 €",
      duration: "1 heure",
      description: "Dépannage standard, installation de périphériques, assistance avancée.",
      guarantee: "3 semaines",
    },
    {
      name: "Forfait Formatage",
      price: "89,90 €",
      duration: "Illimitée",
      description: "Réinstallation complète du système (Windows/Mac), mises à jour, pilotes. Durée jusqu'à résolution.",
      guarantee: "4 semaines",
    },
    {
      name: "Forfait Illimité + Sauvegarde",
      price: "99,90 €",
      duration: "Illimitée",
      description: "Formatage complet avec sauvegarde et transfert de vos données personnelles.",
      guarantee: "4 semaines",
    },
    {
      name: "Désinfection Virus / Récupération",
      price: "69,00 €",
      duration: "Selon cas",
      description: "Éradication de virus, spywares, malwares ou récupération de données perdues (selon état du disque).",
      guarantee: "Suivi inclus",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tarifs Atelier</h1>
        <p className="text-slate-600">
          Des tarifs clairs et sans surprise pour toutes nos interventions en magasin.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-semibold text-slate-900">Forfait</th>
                <th className="p-4 font-semibold text-slate-900">Description</th>
                <th className="p-4 font-semibold text-slate-900">Garantie</th>
                <th className="p-4 font-semibold text-slate-900 text-right">Prix TTC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {prices.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900 whitespace-nowrap align-top">
                    {item.name}
                    <span className="block text-xs text-slate-500 font-normal mt-1">{item.duration}</span>
                  </td>
                  <td className="p-4 text-slate-600 align-top">
                    {item.description}
                  </td>
                  <td className="p-4 text-slate-500 text-sm align-top">
                    {item.guarantee}
                  </td>
                  <td className="p-4 font-bold text-sky-600 text-right align-top whitespace-nowrap">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-amber-800 text-sm">
        <AlertCircle className="h-5 w-5 shrink-0" />
        <p>
          <strong>Note :</strong> Les tarifs ci-dessus s'appliquent aux interventions en atelier. 
          Certaines pannes complexes peuvent nécessiter un diagnostic approfondi et un devis spécifique avant intervention. 
          Le matin est réservé aux interventions à domicile ou sur site (tarification spécifique déplacement + main d'œuvre).
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Service Cyber Espace</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">2,50 €</div>
              <div className="text-slate-500 font-medium">1 Heure</div>
              <p className="text-sm text-slate-400 mt-2">Accès internet, bureautique</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">10,00 €</div>
              <div className="text-slate-500 font-medium">10 Heures</div>
              <p className="text-sm text-slate-400 mt-2">Carte prépayée valable 1 an</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

