# SaaS Application avec Next.js 🚀

Ce projet est un tutoriel complet pour créer une application SaaS moderne utilisant les dernières technologies web. Le tutoriel est disponible sur [La Minute De Code](https://www.laminutedecode.com/tutoriels/coder-un-saas-avec-next-js).

## 🛠️ Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React pour la production
- [TypeScript](https://www.typescriptlang.org/) - Typage statique pour JavaScript
- [Stripe](https://stripe.com/) - Gestion des paiements
- [Prisma](https://www.prisma.io/) - ORM pour la base de données
- [SQLite](https://www.sqlite.org/) - Base de données légère
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [ShadCN](https://ui.shadcn.com/) - Composants UI réutilisables
- [NextAuth](https://next-auth.js.org/) - Authentification pour Next.js

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Compte Stripe pour les paiements
- Éditeur de code (VS Code recommandé)

## 🚀 Installation

1. Clonez le repository :
```bash
git clone [votre-repo]
cd SaaS-NextJS-Prisma
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Configurez les variables d'environnement :
- Créez un fichier `.env` à la racine du projet
- Ajoutez les variables d'environnement nécessaires

4. Initialisez la base de données :
```bash
npx prisma migrate dev
```

5. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

## 🎯 Fonctionnalités

- ⚡ Application Next.js optimisée pour la performance
- 🔐 Authentification sécurisée avec NextAuth
- 💳 Intégration des paiements avec Stripe
- 📊 Gestion de base de données avec Prisma
- 🎨 Interface utilisateur moderne avec Tailwind CSS et ShadCN
- 📱 Design responsive
- 🔄 API Routes pour la gestion des données

## 📚 Structure du Projet

```
SaaS-NextJS-Prisma/
├── app/                # Dossier principal Next.js 13+
├── components/         # Composants réutilisables
├── lib/               # Utilitaires et configurations
├── prisma/            # Schéma et migrations Prisma
├── public/            # Assets statiques
└── styles/            # Styles globaux
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

[La Minute De Code](https://www.laminutedecode.com/)

## 🙏 Remerciements

Un grand merci à tous ceux qui contribuent à ce projet et à la communauté open source en général.
