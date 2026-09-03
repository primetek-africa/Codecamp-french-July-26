import useFetch from "../hooks/useFetch";

function ListUtilisateurs(){
 const {donnees,chargement}=useFetch("https://jsonplaceholder.typicode.com/users")
 if(chargement){
    return <p>Chargement en cours...</p>
 }

 return(
    <>
    {
        donnees.map((utilisateur)=>{
              <li key={utilisateur.id}>{utilisateur.name}</li>
        })
    }
    </>
 )
}

export default ListUtilisateurs;

//https://jsonplaceholder.typicode.com/posts