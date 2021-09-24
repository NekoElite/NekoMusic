const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log("Der Bot ist nun bereit.");
    console.log(" ");
    console.log("Bot-Tag: " + client.user.tag);
    console.log("Server: " + client.guilds.cache.size);
});

client.login(token);
