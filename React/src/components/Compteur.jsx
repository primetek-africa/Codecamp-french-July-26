import { useState } from "react";


// Réparons le compteur (démo live 1)
// Compteur.jsx - VERSION CASSÉE (volontairement)

// function Compteur() {
//   let compteur = 0;

//   const incrementer = () => {
//     compteur = compteur + 1;
//     console.log("Valeur actuelle :", compteur);
//   };

//   return (
//     <div>
//       <p>Compteur : {compteur}</p>
//       <button onClick={incrementer}>+1</button>
//     </div>
//   );
// }

// export default Compteur;




function Compteur() {

//Anatomie de useState
const [compteur, setCompteur] = useState(0);
//     ↑          ↑                     ↑
//     valeur     fonction de           valeur
//     actuelle   mise à jour           initiale


  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>+1</button>
      <button onClick={() => setCompteur(compteur - 1)}>-1</button>
      <button onClick={() => setCompteur(0)}>Réinitialiser</button>
    </div>
  );
}

export default Compteur;


