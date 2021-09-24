const { Client, Intents } = require('discord.js');
const config = require('./config.json');

var token = config.token;
var prefix = config.prefix;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log("Der Bot ist nun bereit.");
    console.log(" ");
    console.log("Bot-Tag: " + client.user.tag);
    console.log("Server: " + client.guilds.cache.size);

    client.user.setActivity(`${prefix}help für mehr infos`, { type: 'WATCHING' });
});

client.on('ready', () => {
});

client.login(token);
const { Client, Intents } = require('discord.js');
const config = require('./config.json');

var token = config.token;
var prefix = config.prefix;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log("Der Bot ist nun bereit.");
    console.log(" ");
    console.log("Bot-Tag: " + client.user.tag);
    console.log("Server: " + client.guilds.cache.size);

    client.user.setActivity(`${prefix}help für mehr infos`, { type: 'WATCHING' });
});

client.on('message', (msg) => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content === `${prefix}help`) {

        }
    }
});

client.login(token);
