export const siteConfig = {
  name: "SOS Service Informatique",
  description: "Dépannage informatique, maintenance, réparation et location événementielle à Avranches (Manche).",
  address: {
    street: "68 rue de la Constitution",
    zip: "50300",
    city: "Avranches",
    country: "France",
    googleMapUrl: "https://www.google.com/maps/search/?api=1&query=SOS+Service+Informatique+68+rue+de+la+Constitution+Avranches"
  },
  contact: {
    phone: "02 33 58 95 62",
    phoneSecondary: "02 33 58 74 89",
    mobile: "06 03 89 49 88",
    email: "sosserviceinfo@free.fr",
  },
  hours: {
    display: [
      { day: "Lundi", hours: "14:00 – 18:00" },
      { day: "Mardi", hours: "Fermé" },
      { day: "Mercredi", hours: "14:00 – 18:00" },
      { day: "Jeudi", hours: "14:00 – 18:00" },
      { day: "Vendredi", hours: "14:00 – 18:00" },
      { day: "Samedi", hours: "Fermé" },
    ],
    note: "Le matin est réservé pour les dépannages sur site et à domicile."
  },
  services: [
    { name: "Maintenance & Réparation", slug: "maintenance", icon: "Wrench" },
    { name: "Dépannage à Domicile", slug: "domicile", icon: "Truck" },
    { name: "Cyber Espace", slug: "cyber", icon: "Wifi" },
    { name: "Location Événementielle", slug: "location", icon: "Projector" },
  ]
};

