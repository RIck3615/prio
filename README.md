# Portfolio Designer Graphique

Portfolio professionnel moderne créé avec Next.js, Tailwind CSS, Framer Motion et Shadcn/UI.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et modernes
- **Shadcn/UI** - Composants UI accessibles et stylés
- **Radix UI** - Primitives UI accessibles

## 📦 Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Personnalisation

### Modifier les informations personnelles

- **Hero Section** : Modifier `components/Hero.tsx`
- **À propos** : Modifier `components/About.tsx`
- **Projets** : Modifier le tableau `projects` dans `components/Projects.tsx`
- **Contact** : Modifier les informations dans `components/Contact.tsx`

### Modifier les couleurs

Les couleurs sont définies dans `app/globals.css` via les variables CSS. Vous pouvez également modifier le thème dans `tailwind.config.ts`.

### Ajouter vos propres images

1. Placez vos images dans le dossier `public/`
2. Modifiez les chemins dans `components/Projects.tsx`

## 🏗️ Structure du projet

```
my_portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/          # Composants Shadcn/UI
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── public/           # Images et assets statiques
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🚀 Déploiement

Ce portfolio peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout autre hébergeur supportant Next.js

## 📄 Licence

Ce projet est sous licence MIT.



