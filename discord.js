// необходимые переменные
const discord = require('discord.js'); // discord.js
const client = new discord.Client();
//переменные для подключения
const token = require('./config.json').token; //токен
const prefix = require('./config.json').prefix; //префикс для команд
//переменные для других модулей
const tempChannel = require("discord.js-temporary-channel"); //переменная для временных каналов


tempChannel.autoCreateChannel(client); //для временного канала

client.login(token); //токен сервера
client.login(process.env.token);//BOT_TOKEN is the Client Secret

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
