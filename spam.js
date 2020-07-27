const Discord = require('discord.js');
const fs = require("fs");
const cmd = require("node-cmd");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const config = require("./config.json")
const prefix = config.prefix
const tstop = config.timestop * 1000 * 60 * 60 // العملية الحسابية بـ الساعات عشان البوت يوقف اسبام
const nstop = config.timestop * 1000 * 60 * 60  - 10000 // العملية الحسابية بـ الساعات ناقصة 10 ثواني لارسال رسالة كم جمع البوت

const filename = 'spam';
client.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n');
  setInterval(() => {
client.guilds.get(config.serverid).channels.get(config.channelid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},config.timespam *1000);
})});
client2.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n'); // كههربا (حسن ياسر)
  setInterval(() => {
client2.guilds.get(config.serverid).channels.get(config.channelid2).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},config.timespam *1000);
})});
client3.on('ready', async () => {
        fs.readFile(`./${filename}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var Kahrbaa = data.split('\n'); // كههربا (حسن ياسر)
  setInterval(() => {
client3.guilds.get(config.serverid).channels.get(config.channelid3).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},config.timespam *1000);
})});






// ======= [ Refresh MODE] ======== //

client.on('ready', async () => {
  setInterval(() => {
client.guilds.get(config.serverid).channels.get(config.notice).send(`** تم أعادة تشغيل البوتات .. **`);
client.guilds.get(config.serverid).channels.get(config.notice).send(`<@${config.kahrbaaid}>`);
cmd.run("refresh")
},tstop);
});
// ======= [ Refresh MODE end] ======== //


// ======= [ Spam MODE OFF ] ======== //
client.on('message', message => {
if(message.content === prefix + "spam off") {
      if (!config.owner.includes(message.author.id)) return;
          message.channel.send(`**⚠️ SPAM OFF , <@${config.owner}>**`);
        console.log(`⚠️ SPAM OFFING ..`);
        client.destroy();
        client2.destroy();
        client3.destroy();
        console.log(`SPAM OFF By : ${config.owner}`);
    }});
// ======= [ Refresh MODE end] ======== //



client.login(process.env.KahTOKEN);
client2.login(process.env.KahTOKEN2);
client3.login(process.env.KahTOKEN3);
