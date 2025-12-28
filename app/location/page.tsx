import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Projector, Speaker, Lightbulb, Music } from "lucide-react";

export const metadata = {
  title: "Location Matériel Événementiel Avranches",
  description: "Location vidéoprojecteur, sonorisation, éclairage pour mariages, fêtes et séminaires à Avranches.",
};

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Location Matériel Événementiel</h1>
        <p className="text-xl text-slate-600">
          Du matériel professionnel pour réussir vos événements privés ou professionnels (mariages, anniversaires, conférences).
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="h-48 bg-slate-100 flex items-center justify-center">
            <Projector className="h-16 w-16 text-slate-400" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Vidéoprojecteurs</h3>
            <p className="text-slate-600 mb-4">
              Pour vos présentations ou diffusions vidéo. Modèles HDMI haute luminosité disponibles.
            </p>
            <ul className="text-sm text-slate-500 mb-4 space-y-1">
              <li>• Écrans de projection</li>
              <li>• Câblage fourni</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="h-48 bg-slate-100 flex items-center justify-center">
            <Speaker className="h-16 w-16 text-slate-400" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Sonorisation</h3>
            <p className="text-slate-600 mb-4">
              Enceintes amplifiées, tables de mixage, micros sans fil. Tout pour une qualité sonore optimale.
            </p>
            <ul className="text-sm text-slate-500 mb-4 space-y-1">
              <li>• Packs soirée</li>
              <li>• Micros HF</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="h-48 bg-slate-100 flex items-center justify-center">
            <Lightbulb className="h-16 w-16 text-slate-400" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Éclairage</h3>
            <p className="text-slate-600 mb-4">
              Jeux de lumière, spots LED, effets disco pour animer vos pistes de danse.
            </p>
            <ul className="text-sm text-slate-500 mb-4 space-y-1">
              <li>• Ponts de lumière</li>
              <li>• Machines à fumée</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Demander un devis location</h2>
            <p className="text-slate-600 mb-6">
              Indiquez-nous les dates de votre événement et le type de matériel souhaité. Nous vous répondrons avec une offre adaptée.
            </p>
            <div className="flex items-center gap-4 text-slate-700 mb-2">
              <Music className="h-5 w-5 text-sky-500" />
              <span>Matériel testé et vérifié avant chaque départ.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <Projector className="h-5 w-5 text-sky-500" />
              <span>Démonstration de fonctionnement au retrait.</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ContactForm defaultSubject="location" />
          </div>
        </div>
      </div>
    </div>
  );
}

