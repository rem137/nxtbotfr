const Discord = require('discord.js');
const client = new Discord.Client();
const monnaie = require('./money.json');
const fs = require('fs')
var dates = new Date();
var conteur = dates.getMinutes();
var msg;
var ok = false;
var okd = 1;
var entier = -100;
var number = 0;
var question = ["hey","comment va tu?"];
var reponse = ["salut"];
var age = "3 jours";
var msgCompt = 0;
var lastmsg = "";
var permission = false;
msgSup = entierAleatoire(0,58);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10

setInterval (function(){
var date = new Date();
var jour = date.getDay();
var heure = date.getHours();
var minutes = date.getMinutes();
if (permission === true)
{
  question[question.length] = lastmsg;
  reponse[reponse.length] = lastmsg;
  permission = false;
}
if (minutes === msgSup + 1)
 {
  okd = 1;
  msgSup = entierAleatoire(0, 58);
}
if (conteur >= 60)
{
conteur = conteur - 60;
}
if (conteur === 59)
{
  conteur = conteur + 1;
}
if (minutes === conteur + 1)
{
//client.channels.cache.get('691691656986099845').send(minutes);
conteur = conteur + 1;
number = number + 1;
}
if (minutes === msgSup)
{
  if (okd === 1)
  {
//client.channels.cache.get('691691656986099845').send(question[entierAleatoire(0,question.length - 1)]);
okd = okd + 1;
}}})
client.on("guildMemberAdd", member =>{
  let name = member.user.tag;
  client.channels.cache.get('693492708441980948').send(name + " a rejoin le serveur" + "👋")
})
client.on("guildMemberRemove", member =>{
  let name = member.user.tag;
  client.channels.cache.get('693492708441980948').send(name + " a quitter le serveur" + "😭")
})
client.on('message', msg => {
 if (!monnaie[msg.author.id])
  {
    monnaie[msg.author.id] = {
      monnaie: 0
    }
  }
  if (msg.content.includes("monnaie")) {
    monnaie[msg.author.id] = {
      monnaie: monnaie[msg.author.id].monnaie + 2
    };
  }
  fs.writeFile('./money.json', JSON.stringify(monnaie), err =>{
    if (err) console.log(err);
  })
  if (msg.author != 633709403937308673)
  {
  msgCompt++;
  lastmsg = msg.content;
  }
var int = 0;
  for (let N = 0; N < question.length;N++)
  {
    if (lastmsg != question[N])
    {
      int++;
    }
    if (int === (question.length))
      {
        permission = true;
      }
    if (msg.author != 633709403937308673)
    {
  if (msg.content === question[N])
  {
    //msg.reply(reponse[N])
  }}}
  if (msg.content.includes("_")) {
    question[question.length] = msg.content.substring(msg.content.length - (msg.content.length - msg.content.indexOf("¿")),msg.content.length);
    question[question.length - 1] = msg.content.replace(question[question.length - 1],"");
    question[question.length - 1] = question[question.length - 1].replace("_","");
    reponse[reponse.length] = (msg.content.substring(msg.content.indexOf("¿")))
    reponse[reponse.length - 1] = reponse[reponse.length - 1].replace("¿","")
    msg.reply("message added")
  }
  if (msg.content.includes("va")||msg.content.includes("vas")||msg.content.includes("Va")||msg.content.includes("Vas"))
  {
    if (msg.content.includes("foutre"))
    {
      //msg.reply("tg sale mioche")
    }
    if (msg.content.includes("dormir"))
    {
      //msg.reply("je n'ai pas besoin de dormir")
    }
  }
  if (msg.content.includes("tu as")||msg.content.includes("ta")||msg.content.includes("t’a")||msg.content.includes("Ta")||msg.content.includes("T a")||msg.content.includes("t a")||msg.content.includes("T’a"))
  {
    if (msg.content.includes("age")||msg.content.includes("âge"))
    {
      //msg.reply("j'ai environs " + age)
    }
    if (msg.content.includes("faim"))
    {
      //msg.reply("je ne peux pas manger.")
    }
  }
  if (msg.content.includes("random number")) {
    //msg.reply(entierAleatoire(1,10))
  }
  if (msg.content.includes("msgSup")) {
    //msg.reply(msgSup)
  }
   if (msg.content === "!point"||msg.content === "!points") {
     if (client.channels.cache === 693495336416706620)
     {
    let usermonnaie = monnaie[msg.author.id].monnaie;
    client.channels.cache.get('693495336416706620').send(usermonnaie)
     }
  }
  if (msg.content.includes("msgCompt")) {
    //msg.reply(msgCompt)
  }
  if (msg.content.includes("okd")) {
    //msg.reply(okd)
  }
  if (msg.content.includes("N")) {
   // msg.reply(msg.author)
  }
  if (msg.content.includes("Q"))
  {
    if (msg.author != 633709403937308673)
    {
    //msg.reply(question[question.length - 1])
  }}
 
  if (msg.content.includes("initial")) {
    //msg.author.send("ok");
    //msgSup = entierAleatoire(0,58);
  }
});

client.login(process.env.TOKEN);
