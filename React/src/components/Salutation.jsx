//C'est le cas d'usage numéro un de useState dans la vraie vie. Prenez le temps.
import { useState } from "react";

function Salutation() {
    
  const [nom, setNom] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nom}
        onChange={(evenement) => setNom(evenement.target.value)}
        placeholder="Entrez votre nom"
      />
      <p>Bonjour {nom === "" ? "inconnu" : nom} !</p>
      <p>Caractères saisis : {nom.length}</p>
    </div>
  );
}

export default Salutation;


