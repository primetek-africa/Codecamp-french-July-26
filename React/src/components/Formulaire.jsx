//C'est le cas d'usage numéro un de useState dans la vraie vie. Prenez le temps.
import { useState } from "react";

function Formilaire() {
    
const [formulaire, setFormulaire] = useState({
  nom: "",
  email: "",
  telephone: ""
});

const modifierChamp = (champ, valeur) => {
  setFormulaire({ ...formulaire, [champ]: valeur });
};

  return (
    <div>
        <br />
        <br />
        <h1>formulaire avec bcp des champs</h1>
            <input
            value={formulaire.nom}
            onChange={(e) => modifierChamp("nom", e.target.value)}
            />
            <input
            value={formulaire.email}
            onChange={(e) => modifierChamp("email", e.target.value)}
            />
            <input
            value={formulaire.telephone}
            onChange={(e) => modifierChamp("telephone", e.target.value)}
             />

                //rendu
                    <p>formilaire:{formulaire.nom} </p>
                    <p>formilaire:{formulaire.email} </p>
                    <p>formilaire:{formulaire.telephone} </p>
    </div>
  );
}

export default Formilaire;





