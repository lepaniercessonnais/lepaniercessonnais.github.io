# Le Panier Cessonnais - Site Web AMAP

Site web complet pour l'Association pour le Maintien d'une Agriculture Paysanne (AMAP) "Le Panier Cessonnais".

## 🎯 Fonctionnalités

- **Page d'accueil** : Présentation de l'AMAP avec sections hero, avantages et call-to-action
- **Présentation AMAP** : Explication détaillée de ce qu'est une AMAP, mission, valeurs et histoire
- **Producteurs & Produits** : Catalogue des producteurs partenaires et leurs produits de saison
- **Fonctionnement** : Guide complet du fonctionnement de l'AMAP (adhésion, paniers, distribution)
- **Actualités** : Blog avec articles, événements et newsletter
- **Contact** : Formulaire de contact et informations pratiques
- **Connexion** : Espace adhérents avec authentification et inscription

## 🛠️ Technologies utilisées

- **Next.js 15** : Framework React avec TypeScript
- **Tailwind CSS 4** : Framework CSS utilitaire
- **TypeScript** : Typage statique
- **Responsive Design** : Interface adaptée mobile/desktop

## 🚀 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour production
npm run build

# Déploiement sur GitHub Pages
npm run deploy
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── Layout.tsx          # Layout principal avec navigation et footer
│   └── Navigation.tsx      # Composant de navigation
├── pages/
│   ├── index.tsx           # Page d'accueil
│   ├── amap.tsx            # Présentation AMAP
│   ├── producteurs.tsx     # Producteurs et produits
│   ├── fonctionnement.tsx  # Fonctionnement de l'AMAP
│   ├── actualites.tsx      # Actualités et blog
│   ├── contact.tsx         # Page de contact
│   └── connexion.tsx       # Espace adhérents
└── styles/
    └── globals.css         # Styles globaux
```

## 🎨 Design

- **Thème vert** : Couleurs naturelles et écologiques
- **Interface moderne** : Design épuré et professionnel
- **UX optimisée** : Navigation intuitive et formulaires clairs
- **Accessibilité** : Respect des standards d'accessibilité web

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuration

Le projet utilise :
- **Next.js** avec configuration TypeScript
- **Tailwind CSS** pour le styling
- **ESLint** pour la qualité du code
- **GitHub Pages** pour le déploiement

## 📞 Contact

Pour toute question ou suggestion concernant le site :
- Email : lepaniercessonnais@gmail.com
- Téléphone : 01 23 45 67 89

## 📄 Licence

Ce projet est développé pour l'AMAP "Le Panier Cessonnais" - Tous droits réservés.