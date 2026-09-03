import { useState,useEffect } from "react";

function useFetch(url){
    const [donnees,setDonnees]= useState(null);
    const [chargement,setChargement]= useState(true);

    useEffect(()=>{
        async function recupererDonnees() {
            const reponse = await fetch(url);
            const resultat = await reponse.json();
            setDonnees(resultat);
            setChargement(false)
        }
        recupererDonnees()
    },[url]);

    return {donnees,chargement}

}

export default useFetch;
