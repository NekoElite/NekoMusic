const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
let fs = require('fs');
const { token, prefix } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.on('ready', () => {
    console.log('Der Bot ist nun bereit.');
    console.log(' ');
    console.log('Bot-Tag: ' + client.user.tag);
    console.log('Server: ' + client.guilds.cache.size);

    client.user.setActivity('/help für mehr infos', { type: 'WATCHING' });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('messageCreate', async msg => {
    if(msg.content.startsWith(`${prefix}`)) {
        let file_name = `${msg.content.split(' ')[0].replace(prefix, '')}.js`;
        if(!fs.existsSync('./commands/' + file_name)) {
            return undefined;
        }
        if(fs.existsSync('./commands/' + file_name)) {
            client.commands.get(file_name.replace('.js', '')).execute(client, msg);
        }
    }
});

client.login(token);
