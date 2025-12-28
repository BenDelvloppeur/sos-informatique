"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2">Message envoyé !</h3>
        <p>Nous vous répondrons dans les plus brefs délais.</p>
        <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4 bg-white">Envoyer un autre message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom</label>
          <input
            id="name"
            required
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Votre nom"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone</label>
          <input
            id="phone"
            type="tel"
            required
            className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="06..."
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
        <input
          id="email"
          type="email"
          required
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="votre@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-700">Sujet</label>
        <select
          id="subject"
          defaultValue={defaultSubject}
          className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Choisir un sujet...</option>
          <option value="devis">Demande de devis</option>
          <option value="rdv">Prise de rendez-vous domicile</option>
          <option value="location">Location matériel</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Comment pouvons-nous vous aider ?"
        />
      </div>

      <p className="text-xs text-slate-500">
        En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter. 
        Elles ne seront jamais transmises à des tiers.
      </p>

      <Button type="submit" className="w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}

