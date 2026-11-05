//  import os from "node:os"
//  import {somme} from "./calcul.cjs";
//   console.log("5+3",somme(5,3));
// mon-api/
// ├── node_modules/        # paquets installés (jamais sur GitHub)
// ├── src/
// │   ├── config/          # connexion BDD, constantes
// │   ├── routes/          # les URL de l'API
// │   ├── controllers/     # ce que fait chaque route
// │   ├── services/        # logique métier
// │   ├── models/          # forme des données
// │   ├── utils/           # fonctions réutilisables
// │   └── app.js           # point d'entrée
// ├── .env                 # secrets (jamais sur GitHub)
// ├── .gitignore
// ├── package.json         # carte d'identité du projet
// ├── package-lock.json    # versions exactes installées
//└── README.md
//Type de Module natif
//fs(file System):manupulation des fichiers
//path:gestion de chemin
//http creation de servers HTTP
//...ETC
const somme = require('./calcul.cjs');
const resultat = somme(10,20);
console.log(resultat)

const fs = require('fs') //writeFile()
fs.writeFile(

  'etutiants.txt',
  'jean-pierre\nResia\nTresor',
  (erreur)=>{
    if(erreur){
       console.log("Erreur lors de la creation du fichier");
       return
    }
    console.log('Fichier Cree avec succes!!')
  }
)


