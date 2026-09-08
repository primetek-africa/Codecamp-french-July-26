# Installation d'un projet Next.js

## 1. Prérequis

Avant de commencer, vérifier que **Node.js** et **npm** sont installés :

```bash
node -v
npm -v
```

Si les deux commandes affichent une version, l'environnement est prêt.

---

## 2. Créer un nouveau projet Next.js

Se placer dans le dossier où le projet doit être créé :

```bash
cd ~/CODE_CAMPS_FRENCH_REVIEW/Exercice_Github
```

Créer le projet :

```bash
npx create-next-app@latest mon-projet
```

Lors de l'installation, choisir :

```text
Yes, use recommended defaults
```

Cette option configure automatiquement notamment :

* TypeScript
* ESLint
* Tailwind CSS
* App Router
* React
* Next.js

---

## 3. Entrer dans le projet

```bash
cd mon-projet
```

---

## 4. Démarrer le serveur de développement

```bash
npm run dev
```

Le projet sera normalement disponible à l'adresse :

```text
http://localhost:3000
```

Ouvrir cette adresse dans le navigateur.

---

## 5. Structure de base

Après l'installation, on retrouve généralement une structure similaire :

```text
mon-projet/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

### Dossiers importants

**`app/`**
Contient les pages et la logique principale de l'application.

**`public/`**
Contient les fichiers statiques comme les images.

**`node_modules/`**
Contient les dépendances installées avec npm. Ce dossier ne doit généralement pas être envoyé sur Git.

---

## 6. Commandes importantes

### Démarrer le projet

```bash
npm run dev
```

### Construire le projet pour la production

```bash
npm run build
```

### Démarrer la version production

```bash
npm start
```

### Installer une nouvelle dépendance

```bash
npm install nom-du-package
```

### Mettre à jour les dépendances

```bash
npm update
```

---

## 7. En cas de problème d'installation

Si l'installation est interrompue, entrer dans le projet :

```bash
cd mon-projet
```

Puis relancer :

```bash
npm install
```

Ensuite :

```bash
npm run dev
```

> Ne pas interrompre `npm install` avec `Ctrl+C` avant la fin de l'installation.
