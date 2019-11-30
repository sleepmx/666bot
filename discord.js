// необходимые переменные
const discord = require('discord.js'); // discord.js
const client = new discord.Client();
//переменные для подключения
const token = require('./config.json').token; //токен
const prefix = "!"; //префикс для команд
//переменные для других модулей
const tempChannel = require("discord.js-temporary-channel"); //переменная для временных каналов


tempChannel.autoCreateChannel(client); //для временного канала

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret


//счетчик пользователей
client.on('ready', () => {
    let myGuild = client.guilds.get('645057877471657984');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('646580891711176714');
    memberCountChannel.setName('Участников: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    //статус бота
    client.user.setStatus('dnd') //статус не беспокоить. На выбор (Online, dnd, invisible, idle)
    client.user.setGame('bruh moments', 'http://www.twitch.tv/sleep_mo')
    
});
    
client.on('guildMemberAdd', member => {
    let myGuild = client.guilds.get('645057877471657984');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('646580891711176714');
    memberCountChannel.setName('Участников: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});

client.on('guildMemberRemove', member => {
    let myGuild = client.guilds.get('645057877471657984');
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('646580891711176714');
    memberCountChannel.setName('Участников: ' + memberCount)
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
    
client.on('message', message => {
    
    let args = message.content.substring(prefix.length).split(" ");
    
    switch(args[0]){
       case 'hug' :
            var hug = ["https://media.giphy.com/media/143v0Z4767T15e/giphy.gif","https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif","https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif","https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif", "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif", "https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif", "https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif", "https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif", "https://media.giphy.com/media/QpAkCCGu2saR2/giphy.gif", "https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif"]
            var pic = Math.floor((Math.random() * hug.length))
            let xuser = message.mentions.users.first()
            var hcolor = ["0xFF3762","0xFF7A37","37FF9B"] //переменная отвечающая за цвета
            var col = Math.floor((Math.random() * hcolor.length)) //переменная отвечающая за рандом
            if (!xuser) return message.channel.send("Укажи, кого хочешь обнять :heart:")
            const HugEmbed = new discord.RichEmbed()
            .setDescription(xuser + ", " + message.author + " обнял тебя :heart_eyes:")
            .setColor(hcolor[col]) // рандомный цвет
            .setImage(hug[pic])
            .setFooter("NOT FROM PARIS MADAME", "https://media.giphy.com/media/zqIW9ievcWOQg/giphy.gif")
            message.channel.send(HugEmbed)
        break;
    }
})
