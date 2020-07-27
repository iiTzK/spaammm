const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam-d3sss.glitch.me/`);
}, 280000);
 
// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 20 توكانات ف الكود ده
// 
const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json")
const prefix = config.prefix
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite 
client.on("ready", () => { console.log(`[BOT] ${client.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN } })}) 
}, 1000)

client2.on("ready", () => { console.log(`[BOT] ${client2.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN2 } })}) 
}, 2000)

client3.on("ready", () => { console.log(`[BOT] ${client3.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN3 } })}) 
}, 3000)

// ======= [ Console LOG - END   ] ======== //


// ======= [ Say MODE  ] ======== //
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"1") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client2.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"2") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client3.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"3") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});

// ======= [ Say MODE - END   ] ======== //

// ======= [ RANDOM - AVATAR  ] ======== //

const kahAVA = 'Ava';
client.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client2.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client2.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client3.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client3.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});



// ======= [ SPAM - MODE  ] ======== //

client.on('warn', console.warn);
client.on('error', console.error);
const child_process = require("child_process");
client.on('message', message => {
if(message.content === prefix + "spam on") {
      if (!config.kahrbaaid.includes(message.author.id)) return;
          message.channel.send(`**⚠️ | SPAM ON , <@${config.kahrbaaid}>**`);
        child_process.fork(__dirname + "/spam.js");
        console.log("[SYSTEM-SPAM] - تم التفعيل ..");
    }
  
  });
// ======= [ SPAM - MODE end ] ======== //


// ======= [ Credits - INFO ] ======== //

client.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
		setTimeout(async function (){
        message.channel.send('#credit')
}, 1000
)
  }});
client2.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 2000
)
  }});
client3.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 3000
)
  }});
// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //

client.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 1000)
    }});
client2.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 2000)
    }});
client3.on('message', message => {
 	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 3000)
    }});


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"




client.login(process.env.KahTOKEN);
client2.login(process.env.KahTOKEN2);
client3.login(process.env.KahTOKEN3); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
