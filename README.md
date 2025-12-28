# SOS Service Informatique - Site Web

Site web vitrine pour SOS Service Informatique (Avranches), développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

1. **Installation des dépendances**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

- `app/` : Pages et routing (App Router).
  - `page.tsx` : Page d'accueil.
  - `services/` : Pages détaillées des services.
  - `tarifs/` : Grille tarifaire.
  - `location/` : Location de matériel événementiel.
  - `contact/` : Formulaire et plan.
- `components/` : Composants réutilisables.
  - `layout/` : Header (Menu) et Footer.
  - `ui/` : Boutons, Cartes, etc.
- `lib/` : Utilitaires et configuration.
  - `site-config.ts` : **Fichier central pour modifier les infos (Tél, Adresse, Horaires).**

## 🎨 Personnalisation

### Modifier les informations (Téléphone, Horaires...)
Ouvrez `lib/site-config.ts`. Toutes les données globales sont stockées ici pour éviter les erreurs de saisie multiples.

### Images
Le dossier `public/` doit contenir les images. Les noms de fichiers attendus (placeholders actuels) sont :
- `hero.jpg` (Bannière accueil)
- Autres images contextuelles si nécessaire.

### Design System
Les couleurs et polices sont configurées dans `tailwind.config.ts` (par défaut Tailwind) et `app/globals.css`.

## 📦 Déploiement

Ce site est optimisé pour être déployé sur **Vercel** (recommandé pour Next.js) ou n'importe quel hébergeur Node.js / Statique.

1. Poussez le code sur GitHub/GitLab.
2. Connectez le dépôt à Vercel.
3. Le déploiement est automatique.

Pour un export statique (si hébergement classique type Apache/Nginx) :
1. Modifiez `next.config.ts` pour activer `output: 'export'`.
2. Lancez `npm run build`.
3. Le dossier `out/` contiendra le site HTML/CSS/JS.

---
*Projet généré par Assistant IA pour SOS Service Informatique.*
