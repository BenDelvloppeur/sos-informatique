import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact SOS Service Informatique Avranches",
  description: "Contactez-nous pour un dépannage, une réparation ou une location. Plan d'accès 68 rue de la Constitution, Avranches.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Info Colonne */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Adresse</h3>
                  <p className="text-slate-600">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </p>
                  <p className="text-sm text-amber-600 mt-2 font-medium">
                    (Nouveau local à 15m de l'ancien !)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Téléphone</h3>
                  <p className="text-slate-600">
                    Fixe : <a href={`tel:${siteConfig.contact.phone.replace(/ /g, '')}`} className="hover:text-sky-600 underline">{siteConfig.contact.phone}</a>
                  </p>
                  <p className="text-slate-600">
                    Mobile : <a href={`tel:${siteConfig.contact.mobile.replace(/ /g, '')}`} className="hover:text-sky-600 underline">{siteConfig.contact.mobile}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sky-600 underline">{siteConfig.contact.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Horaires d'ouverture</h2>
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-sky-700 font-medium">
                <Clock className="h-5 w-5" />
                <span>Accueil Magasin</span>
              </div>
              <ul className="space-y-2">
                {siteConfig.hours.display.map((h, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-slate-200 last:border-0 pb-2 last:pb-0">
                    <span className="font-medium text-slate-700">{h.day}</span>
                    <span className={h.hours === "Fermé" ? "text-slate-400" : "text-slate-900"}>{h.hours}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-slate-500 bg-white p-3 rounded border border-slate-200">
                <strong>Note :</strong> Le matin est réservé exclusivement aux interventions à domicile et sur site pour les professionnels.
              </div>
            </div>
          </div>
        </div>

        {/* Form Colonne */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 h-fit">
          <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <ContactForm />
        </div>
      </div>

      {/* Map */}
      <section className="h-96 w-full bg-slate-100 rounded-xl overflow-hidden relative shadow-md">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address.street + " " + siteConfig.address.zip + " " + siteConfig.address.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte localisation SOS Service Informatique"
        ></iframe>
      </section>
    </div>
  );
}

