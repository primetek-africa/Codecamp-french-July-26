import { useState } from "react"

function FormulaireSimple(){

const [nom,setNom] = useState("");
const [message,setMessage]=useState("");
const [niveau,setNiveau]= useState("");
const [AccepteCondition,setAccepteCondition] = useState("")




const gererSoumission = (e)=>{
    e.preventDefault(); //on annule le rechargement de la page
    console.log("Non soumis:", nom) // API
    console.log("message:",message)
    console.log("niveau:",niveau)

}

return(

    <form onSubmit={gererSoumission}>
        <input
        type="text"
        value={nom}
        onChange={(e)=>setNom(e.target.value)}
        />
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)}/>

         <select value={niveau} onChange={(e)=>setNiveau(e.target.value)}>
            <option value="Debutant">Debutant</option>
            <option value="intermediaire">intermediaire</option>
            <option value="avance">avance</option>
         </select>

         <input
         type="checkbox"
         checked={AccepteCondition}
         onChange={(e)=>setAccepteCondition(e.target.checked)}

         />



        <button type="submit">Envoyer</button>
    </form>
)


}
export default FormulaireSimple


//les evenements 
//onChange,onClick,onSubmit,onFocus,onKeyDown
//e.preventDefault()