
//variable

let age = 25;
age = 16;
console.log(age);
const PI = 3.14;
//


//types des donnees

let phrase = "Bonjour tout le monde";
let unNombre = 20;
let nombreDecimal = 3.14;
let unBooleen = true;
let nonDefini;
let valeurNulle = null;


console.log(typeof phrase);
console.log(typeof unNombre);
console.log(typeof nombreDecimal);
console.log(typeof unBooleen);
console.log(typeof nonDefini);
console.log(typeof valeurNulle);

//conversion des type 
let  newAge = "25";
console.log(typeof Number(newAge));



// operateur atithmetiques
let a = 10;
let b = 3;

console.log(a + b);
console.log(a -b);
console.log(a/b);
console.log(a % b);
console.log(a ** b);
console.log(a * b);



// comparaison

console.log(5 == "5"); // vrai
console.log(5 === "5"); // faux
console.log(5 !== "5"); //vrai
console.log(5 != "5"); //faux 

//operateurs logiques
let estMajeur = age >= 18;
let aPermis = true;

console.log(estMajeur && aPermis);// deux sont vrai vrai
console.log(estMajeur || aPermis); //vrai 
console.log(!estMajeur);


//conditions
if(age >= 18){
   console.log("Majeur");
}else{
    console.log("Mineur");
}


let note_jean = 0;

if(note_jean >= 10){
    console.log("Tres bien")
}
else if(note_jean >= 5){
  console.log("Bien")
}
else if (note_jean >= 3){
    console.log("courage");
} else{
    console.log("insuffisant");
}


// operateur ternaire
let statut = age >= 18 ? "Majeur" : "Mineur";
console.log(statut);


//switch
let jour = "samedi";

switch(jour){
    case "lundi":
    console.log("le debut de la semaine");
    break;
    case "mardi":
    case  "mercredi":
    case "jeudi":
        console.log("milieu de la semaine")
        break;
        case "vendredi":
            console.log("fin de la semaine");
            break
         default:
            console.log("week-end")
}


//boucle
for( let i = 0;i<5;i++){
  console.log(i);
}

//while
let compteur = 0;
while(compteur < 3){
    console.log("compteur:" +compteur);
    compteur++
}
