
/**
 * Programme pour démontrer le fonctionnement de Express et Mongoose
 * dans le cadre du labo1 du cours de programmation de service web
 */
const express= require('express')
const mongoose = require('mongoose')
const app = express();
const PORT=8000;
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://jostin:jostin@pfi.fj7b4h0.mongodb.net/');
const db = mongoose.connection;
db.on('error',(err)=>{
    console.error('erreur de BD',err);
})
db.once('open',()=>{
    console.log('Connexion à la BD OK');
})
app.get('/',(requete,reponse)=>{
    reponse.send('Allo tout le monde!')
})
app.listen(8000);
console.log(`Serveur Web connecté sur le port ${PORT}`);
