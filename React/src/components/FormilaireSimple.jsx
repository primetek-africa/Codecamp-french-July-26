import { useState } from "react"

function FormulaireSimple(){

// const [nom,setNom] = useState("");
// const [message,setMessage]=useState("");
// const [niveau,setNiveau]= useState("");
// const [AccepteCondition,setAccepteCondition] = useState("")
// const [modalite,setModalite] = useState("");
const [formulaire,setFormulaire]=useState({
    nom:"",
    message:"",
    niveau:"",
    AccepteCondition:"",
    modalite:""
})

const gererChangement = (e)=>{
    const {name,value,type,cheched}= e.target;
    setFormulaire({
        ...formulaire,
        [name]:type ==="checkbox"? cheched:value
    })
}
  

const gererSoumission = (e)=>{
    e.preventDefault(); //on annule le rechargement de la page
    console.log("Non soumis:", nom) // API
    console.log("message:",message)
    console.log("niveau:",niveau)
    console.log("selected",AccepteCondition)

} 

return(
<>
 

    <form onSubmit={gererSoumission}>
        <input
        type="text"
        value={formulaire.nom}
        onChange={gererChangement}
        />


        <textarea value={formulaire.message} onChange={gererChangement}/>

         <select value={formulaire.niveau} onChange={gererChangement}>
            <option value="Debutant">Debutant</option>
            <option value="intermediaire">intermediaire</option>
            <option value="avance">avance</option>
         </select>

         <input
         type="checkbox"
         checked={formulaire.AccepteCondition}
         onChange={gererChangement}

         />

         <label>
            <input
             type="radio"
             name="modalite"
             value="presentiel"
             checked={modalite === "presentiel"}
             onChange={gererChangement}
            />
            Presentiel
         </label>
         <label>
            <input
            type="radio"
            name="modalite"
            value="enligne"
            checked={modalite==="enligne"}
            onChange={(e)=>setModalite(e.target.value)}
            />
            en ligne
         </label>

        <button type="submit">Envoyer</button>
    </form>
    </>
)


}
export default FormulaireSimple


//les evenements 
//onChange,onClick,onSubmit,onFocus,onKeyDown
//e.preventDefault()