import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">{siteConfig.name}</h3>
          <p className="text-sm leading-relaxed mb-4">
            Expert en dépannage informatique, maintenance et location événementielle à Avranches depuis plus de 15 ans.
          </p>
          <div className="text-sm font-semibold text-sky-400">
            Nouveau local : 68 rue de la Constitution
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <span>{siteConfig.address.street}<br/>{siteConfig.address.zip} {siteConfig.address.city}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.contact.phone.replace(/ /g, '')}`} className="hover:text-white">{siteConfig.contact.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.contact.mobile.replace(/ /g, '')}`} className="hover:text-white">{siteConfig.contact.mobile}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">{siteConfig.contact.email}</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/maintenance-reparation" className="hover:text-white">Maintenance & Réparation</Link></li>
            <li><Link href="/services/depannage-domicile" className="hover:text-white">Dépannage à Domicile</Link></li>
            <li><Link href="/location" className="hover:text-white">Location Événementielle</Link></li>
            <li><Link href="/services/cyber" className="hover:text-white">Espace Cyber</Link></li>
            <li><Link href="/tarifs" className="hover:text-white">Tarifs Atelier</Link></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Horaires Bureau</h3>
          <ul className="space-y-1 text-sm">
            {siteConfig.hours.display.map((h, i) => (
              <li key={i} className="flex justify-between">
                <span>{h.day}</span>
                <span className={h.hours === "Fermé" ? "text-slate-500" : "text-white"}>{h.hours}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-sky-400 border-t border-slate-800 pt-2">
            * Le matin est réservé aux interventions sur site et à domicile.
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés. Site web optimisé pour le local.</p>
      </div>
    </footer>
  );
}

