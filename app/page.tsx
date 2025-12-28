import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { Monitor, Cpu, Truck, Projector, ShieldCheck, Wifi, ArrowRight, MapPin } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://sos-service-informatique.fr/hero.jpg", // Placeholder
    "@id": "https://sos-service-informatique.fr",
    "url": "https://sos-service-informatique.fr",
    "telephone": siteConfig.contact.phone,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "postalCode": siteConfig.address.zip,
      "addressCountry": "FR"
    },
    "openingHoursSpecification": siteConfig.hours.display.map(h => {
      if (h.hours === "Fermé") return null;
      const [start, end] = h.hours.split(" – ");
      const daysMap: Record<string, string> = { "Lundi": "Mo", "Mercredi": "We", "Jeudi": "Th", "Vendredi": "Fr" };
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": daysMap[h.day],
        "opens": start,
        "closes": end
      };
    }).filter(Boolean)
  };

  return (
    <div className="flex flex-col gap-12 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/hero.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Fiabilité, Rapidité, Efficacité.
            <span className="block text-sky-400 text-2xl md:text-4xl mt-2 font-bold">SOS Service Informatique</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            À votre service depuis 15 ans à Avranches. Dépannage informatique, réparation, et location de matériel événementiel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
              <Link href="/contact">Demander une intervention</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-slate-900 border-white bg-white hover:bg-slate-100">
              <Link href="/tarifs">Voir nos tarifs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Alert Location */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-md flex items-start md:items-center gap-4">
          <div className="bg-amber-100 p-3 rounded-full shrink-0 text-amber-600">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-amber-800 font-bold text-lg">Nous avons déménagé !</h3>
            <p className="text-amber-700">
              Nous sommes désormais situés au <strong>{siteConfig.address.street}</strong>, à seulement 15 mètres de l'ancien local.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Une gamme complète de solutions pour particuliers et professionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-sky-500">
            <CardHeader>
              <Cpu className="h-10 w-10 text-sky-500 mb-2" />
              <CardTitle>Maintenance & Réparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Réparation PC/Mac hors garantie, montage sur mesure, restauration de matériel, maintenance préventive.
              </p>
              <Link href="/services/maintenance-reparation" className="text-sky-600 font-medium flex items-center gap-1 hover:underline">
                En savoir plus <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
            <CardHeader>
              <Truck className="h-10 w-10 text-emerald-500 mb-2" />
              <CardTitle>Dépannage à Domicile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Intervention sur site ou à votre domicile le matin. Installation box, imprimantes, réseaux, résolution de pannes.
              </p>
              <Link href="/services/depannage-domicile" className="text-emerald-600 font-medium flex items-center gap-1 hover:underline">
                Demander un RDV <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-indigo-500">
            <CardHeader>
              <Projector className="h-10 w-10 text-indigo-500 mb-2" />
              <CardTitle>Location Événementielle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Vidéoprojecteurs, sonorisation et éclairage pour vos événements, mariages ou réunions professionnelles.
              </p>
              <Link href="/location" className="text-indigo-600 font-medium flex items-center gap-1 hover:underline">
                Voir le matériel <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Monitor className="h-10 w-10 text-slate-600 mb-2" />
              <CardTitle>Vente & Conseil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Ordinateurs, périphériques, composants. Conseils d'experts pour choisir le matériel adapté à vos besoins.
              </p>
              <Link href="/produits" className="text-slate-600 font-medium flex items-center gap-1 hover:underline">
                Nos produits <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Wifi className="h-10 w-10 text-slate-600 mb-2" />
              <CardTitle>Espace Cyber</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Accès internet haut débit en magasin. Impression de documents, scans, et assistance rapide.
              </p>
              <Link href="/services/cyber" className="text-slate-600 font-medium flex items-center gap-1 hover:underline">
                Tarifs <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <ShieldCheck className="h-10 w-10 text-slate-600 mb-2" />
              <CardTitle>Sécurité & Sauvegarde</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Désinfection virus, récupération de données, solutions de sauvegarde et prévention.
              </p>
              <Link href="/services/maintenance-reparation" className="text-slate-600 font-medium flex items-center gap-1 hover:underline">
                Sécuriser mon PC <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Pourquoi choisir SOS Service Informatique ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-500 mb-2">15 Ans</div>
              <h3 className="font-semibold text-lg mb-2">d'expertise</h3>
              <p className="text-slate-600">Une entreprise établie à Avranches, connue pour son sérieux et sa longévité.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-500 mb-2">48h</div>
              <h3 className="font-semibold text-lg mb-2">Délai moyen</h3>
              <p className="text-slate-600">Nous nous efforçons de diagnostiquer et réparer votre matériel dans les plus brefs délais.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-sky-500 mb-2">100%</div>
              <h3 className="font-semibold text-lg mb-2">Local</h3>
              <p className="text-slate-600">Proximité et écoute. Nous sommes vos voisins à Avranches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Une urgence informatique ?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Contactez-nous pour un diagnostic rapide ou passez directement à l'atelier l'après-midi.
          </p>
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
