/// API
//inserer les informations dans le localStorage
localStorage.setItem("nom tresor","Tresor");//enregistrer les information
localStorage.setItem("nom de shammah","Shammah");
localStorage.setItem("nom de julien","Julien");
localStorage.getItem("nom de julien"); // lire Julien
localStorage.removeItem("nom tresor");// suprimer un element 
// localStorage.clear();//tout supprimer 


let etudiant = {nom:"Resia", age: 20};

//la variable etudiant = string
//errure

//localStorage.setItem("etudiant",etudiant);
localStorage.setItem("etudiant", JSON.stringify(etudiant));

//une methode pour lire les objet parse
let etudiantRecuperer =  JSON.parse(localStorage.getItem("etudiant"));

console.log(etudiantRecuperer.nom)

let paragraphe = document.querySelector(".para");//<p><p/>
// p.innerHTML= etudiantRecuperer.nom;

//ES6(ecma script 2015)
// function addition (a,b){
//      return a+b;
     
// }
// addition(12,4);

const additionner = (a,b,c) => a+b*c;

paragraphe.innerHTML= additionner(20,10,3); // <p> 30<p/>


//differentes formes selon le nombre de paramaitres



const direBjour =()=>"Bonjour" //fonction avec 0 paramaitre


// const carre = n => n*n; //1 paramaitre retour implicite 

// const carre2 = n=>{
//     return n*n;
// }

let nombres = [0,1,2,3,4];

let doubles = nombres.map(n=>n*2);

let pairs = nombres.filter(n=>n%2 === 0);

//concatenation
let nom = "Julien";
let age = 20;

console.log("Bonjour"+ nom + "ton age est :"+age + "ans");//classique

console.log(`Bonjour  ${nom} ton age est ${age} ans dans 5 a l'age sera ${age+5}`)  //moderne ECMAScript


let carteHML = `
   <div>
   <h1>nom :${nom}</h1>
   <h2>age :${age}</h2>
   <p>Dans 5ans julien aura ${age+5}</p>
   </div>
`

document.body.innerHTML += carteHML;


//IIFE
(function(nom){
  console.log("BONJOUR");
})("Eray");



