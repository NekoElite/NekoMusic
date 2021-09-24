const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Der Bot ist nun bereit.');
    console.log(' ');
    console.log('Bot-Tag: ' + client.user.tag);
    console.log('Server: ' + client.guilds.cache.size);

    client.user.setActivity(`${prefix}help für mehr infos`, { type: 'WATCHING' });
});

client.on('messageCreate', async msg => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content === `${prefix}help`) {
            const helpEmbed = new MessageEmbed()
                .setColor('#eea5cd')
                .setTitle('Help')
                .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                .setDescription('NekoMusic Hilfe')
                .setThumbnail(client.user.displayAvatarURL())
                .addFields(
                    { name: 'Liste der Commands', value: `${prefix}commands` },
                    { name: 'Informationen zum Bot', value: `${prefix}infos` },
                )
                .setTimestamp()
                .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

            msg.channel.send({ embeds: [helpEmbed] });
        }
    }
});

client.login(token);
