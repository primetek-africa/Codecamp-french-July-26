import { useEffect,useState } from "react";

function FicheUtilisateur(){
  const [identifiant,setIdentifiant]= useState(1);
  const [utilisateur,setUtilisateur] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur]= useState(null);


useEffect(()=>{
    const recupererDonnees = async ()=>{
        setChargement(true);
        setErreur(null);
        try{
           const reponse = await fetch(
             `https://jsonplaceholder.typicode.com/users/${identifiant}`
           ) 
           if(!reponse.ok){
            throw new Error("utilisateur introuvable")
           }
           const donnees = await reponse.json(); 
           setUtilisateur(donnees)

        }catch(e){
            setErreur(e.message);
        }finally{
            setChargement(false);
        };


    }
    recupererDonnees();
},[identifiant])

if(chargement) return <p>Chargement en cours...</p>;
if(erreur) return <p>Erreur:{erreur}</p>;


// const utilisateur = {
//     name:"jephte",
//     email:"jephte@gmail.com",
//     ville:"kinshasa"
// }
// DRY
//a+b

return(
    <>
    <div>
        <h3>{utilisateur.name}</h3>
        <p>Email:{utilisateur.email}</p>
        <p>ville:{utilisateur.address.city}</p>

        <button onClick={()=>setIdentifiant(identifiant+1)}>suivant</button>
    </div>
    </>
)


}
export default FicheUtilisateur