"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Produits", href: "/produits" },
    { label: "Location", href: "/location" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Urgent Info */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> {siteConfig.contact.phone}
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Avranches
            </span>
          </div>
          <div className="flex items-center gap-1 font-medium text-sky-400">
            <Clock className="h-3 w-3" />
            <span>Le matin : dépannages sur site et à domicile</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            SOS Service Informatique
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Expertise & Réactivité depuis 15 ans
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-full shadow-lg flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link href="tel:0233589562">Appeler maintenant</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

