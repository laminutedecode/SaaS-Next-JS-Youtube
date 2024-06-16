# SaaS-MDC

Ce repository contient le code source pour la création d'un SaaS avec les technologies suivantes :
- Next.js
- NextAuth
- Prisma
- SQLite
- Stripe
- ShadCN
- Tailwind CSS

## Prérequis

- Node.js et npm installés
- Compte Stripe pour le traitement des paiements

## Installation

1. Clonez ce repository :
    ```bash
    git clone https://github.com/votre-utilisateur/SaaS-MDC.git
    ```
2. Naviguez dans le dossier du projet :
    ```bash
    cd SaaS-MDC
    ```
3. Installez les dépendances :
    ```bash
    npm install
    ```
4. Configurez les variables d'environnement. Créez un fichier `.env.local` et ajoutez les variables nécessaires :
    ```bash
    NEXTAUTH_URL=http://localhost:3000
    DATABASE_URL=file:./dev.db
    STRIPE_SECRET_KEY=your-stripe-secret-key
    STRIPE_PUBLIC_KEY=your-stripe-public-key
    ```
5. Exécutez les migrations de Prisma pour configurer la base de données :
    ```bash
    npx prisma migrate dev --name init
    ```
6. Lancez l'application en mode développement :
    ```bash
    npm run dev
    ```

## Utilisation

Vous pouvez maintenant accéder à l'application SaaS à l'adresse `http://localhost:3000`. Utilisez les fonctionnalités d'authentification, de gestion des utilisateurs, et de traitement des paiements intégrées.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :
1. Forkez ce repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`).
3. Commitez vos modifications (`git commit -am 'Ajoutez ma fonctionnalité'`).
4. Poussez votre branche (`git push origin feature/ma-fonctionnalite`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est la propriété de LaMinuteDeCode. Il est strictement interdit de copier ou de vendre ces ressources sans autorisation préalable. Voir le fichier `LICENSE` pour plus de détails.
