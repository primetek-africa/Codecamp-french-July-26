// const http = require('http')

// //creation du serveur
// const server = http.createServer((req, res)=>{

//     res.writeHead(200,{
//         'Content-Type':'text/plain'
//     });
//     res.end('Bonjour !! Bienvenu sur mon serveur Node.js')

// })

// //Demarrage du serveur
// server.listen(3000,()=>{
//     console.log('le serveur demarre sur http://localhost:3000');
// })
// const express = require('express')
// const app = express()
// app.use(express.json())

// //nom, adress-mail,
// app.post('/etudiants',(req, res)=>{
//     const etudiant = req.body;
//     //post dans la bd
//     res.status(201).json({
//         message:"Ajouter avec succes",
//         data:etudiant
//     })

// })

// post
// {
//     "nom":"poulet",
//     "prix":"20",
//     "devise":"usd"
// }
//












// app.get('/',(req, res)=>{
   
//     res.status(200).send('Bienvenue sur notre appli express');
// })

// app.get('/contact',(req,res)=>{
//     res.send('contactez-nous...')
// })

// app.get('/etudiants/:id',(req,res)=>{
//     const id = req.params.id;
//     res.send(`vous consultez l'etudiant numero ${id}`)
// })
// app.get('/etudiants/:nom',(req,res)=>{
//     const id = req.params.nom;
//     res.send(`vous consultez l'etudiant numero ${nom}`)
// })

// const express =require('express')
// const app = express();

// app.get('/etudiants/:id/:nom',(req,res)=>{
//     const id = req.params.id;
//     const nom = req.params.nom
//     //tirer des informations dans la bd

//     //.........................

//     res.json({
//         id: id,
//         nom:nom
//     })
// })

// app.get('/recherche', (req, res) => {

//     const nom = req.query.nom;
//     const age = req.query.age;

//     res.json({
//         nom: nom,
//         age: age
//     });

// });


// app.listen(3000,()=>{
//     console.log('serveur demarre sur http://localhost:3000')
// })
// //http://localhost:3000/1
// //trois facon de transmetrre des donnees
// //req.body
// //req.params
// //req.query

////////////////////////////////////validation des donnees manuellement///////////////////////////////////
// app.get('/produits',(req,res)=>{
//     res.status(200).json({
//         message:"liste des produits"
//     })
// })

// const express = require('express');
// const app = express();

// app.use(express.json())
// app.post('/utilisateurs',(req, res)=>{

//     const {nom, email, age}=req.body;

//     if(!nom || !email || age === undefined ){
//         return res.status(400).json({
//             message:'Tous les champs sont obligatoire'
//         });
//     }

//     res.status(201).json({
//        message:'utilisateur cree avec succes',
//        utilisateur:{nom, email,age}
//     })
// })

/////////////////////////////////validation avec joi///////////////////////////////////
//joi
// const joi = require('joi')
// const schemaUtilisateur = joi.object({
//     nom: joi.string().min(3).required(),
//     email: joi.string().email().required(),
//     age: joi.number().integer().min(18).max(100).required()
// })

// app.post('/utilisateurs',(req,res)=>{
//     const {error,value}=schemaUtilisateur.validate(req.body);
     
//     if(error){
//         return res.status(400).json({
//             message:"donnees invalides"
//         })
//     }
//     res.status(201).json({
//         message:"utilisateur cree avec success",
//         utilisateur:value
//     })
// })

// ////////////////////////demarrage du serveur se fait a la fin////////////////////

// app.listen(3000,()=>{
//     console.log('serveur demarre sur http://localhost:3000')
// })

//npm install express jsonwebtoken bcryptjs dotenv
//pasword: 12615176 =>incorrect

const express = require('express');
require('dotenv').config()
const authRoutes =require('./routes/authRoutes.cjs');

const app = express();

app.use(express.json());
app.use('/auth',authRoutes)

const verifierToken = require('./middleware/authMiddleware.cjs')
app.get('/profil',verifierToken,(req , res)=>{
    res.json({
        message:"Bienvenue dans votre espace",
        utilisateur:req.utilisateur
    })
})

app.listen(process.env.PORT || 3000,()=>{
    console.log('serveur demarre sur le port 3000')
})