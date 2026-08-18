console.log("1 debut");//1

setTimeout(function(){
  console.log("2 ceci s'affiche apres 2 secondes");
},
  2000);//3

  console.log("3. fin");//2

  //callback hell
  // faireEtap1(function{
  //   faireEtape2(function(){
  //     faireEtape3(function(){

  //     })
  //   })
  // })


  //API
  //promise
  //pending (en attente)
  //fulFilled (tenue) , la valeur est dispo
  //rejected(rompue)

  //utiliser une promise avec .then() et catch


function commenderPlat(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve("Votre plat est pret");
    },2000);
  })
}
commenderPlat().then(function(message){
  console.log(message);
})
.catch(function(erreur){
  console.log("Erreur:",erreur)
})


//async et await

async function commender() {
  const message = await commenderPlat();
  console.log(message);
}
commender();
//try : potentiellement echoue

async function commender() {
  try{
    const message = await commenderPlat();
    console.log(message)
  }catch(erreur){
    console.log("Erreur",erreur)
  }
  
}



