1) npx create-next-app@latest
2) npm i react-icons
3) npx shadcn-ui@latest init
4) npm i next-themes
5) Créer le theme-provider et importer dans le layout
6) Créer le fichier Themetoggle et impoorter le code dans darktheme de la doc
7) Créer Navigation
8) npm i next-auth
9) Coder SessionWrapper
10) Coder authOptions
11) coder le fichier nextauth.d
12) Créer la routes dans api nextauth puis composant ButtonsProviders
13) npm install @prisma/client @next-auth/prisma-adapter
14) npm install prisma --save-dev
15) npx prisma init --datasource-provider sqlite
16) Coder layout Dashboard
17) coder settings dashboard + actionsUser + composant buttonSignOut
18) coder paiement dashboard
19) npm i stripe
20) créer un produit et recuper app-id et la clé secret de stripe
21) coder le ficheir stripe.ts
22) ajouter la fonction de stripe dans le layout pour le customerId
23) Créer le model subscription dans prisma
24) Creer la page succes et cancel
25) Créer la route dans api > webhok > stripe
26) dans le powershell Get-ChildItem -path C:\Users\Utilisateur\documents\Stripe-cli -Recurse -Filter stripe.exe
$env:Path += ";C:\Users\Utilisateur\documents\Stripe-cli"
$env:Path
stripe login
stripe listen --forward-to localhost:3000/api/webhook/stripe
Récuperer le code et le mettre dans le fichier env STRIPE_WEBHOOK_SECRET
27) activier le portal client test https://dashboard.stripe.com/test/settings/billing/portal
28) Créer model Notes dans prisma
29) npx prisma db push