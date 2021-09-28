const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { token, prefix, adminID } = require('./config.json');

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
            if(msg.member.user.id === adminID) {
                const helpEmbed = new MessageEmbed()
                    .setColor('#eea5cd')
                    .setTitle('Help (Admin)')
                    .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                    .setDescription('NekoMusic Hilfe (Admin):')
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: 'Liste der Commands', value: `${prefix}commands`, inline: true },
                        { name: 'Informationen zum Bot', value: `${prefix}infos`, inline: true },
                        { name: 'Bot herunterfahren', value: `${prefix}shutdown`, inline: true },
                    )
                    .setTimestamp()
                    .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                msg.channel.send({ embeds: [helpEmbed] });
            }
            else {
                const helpEmbed = new MessageEmbed()
                    .setColor('#eea5cd')
                    .setTitle('Help')
                    .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                    .setDescription('NekoMusic Hilfe:')
                    .setThumbnail(client.user.displayAvatarURL())
                    .addFields(
                        { name: 'Liste der Commands', value: `${prefix}commands`, inline: true },
                        { name: 'Informationen zum Bot', value: `${prefix}infos`, inline: true },
                    )
                    .setTimestamp()
                    .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                msg.channel.send({ embeds: [helpEmbed] });
            }
        }
    }
});

//Info Command
// Wird später in eine andere Datei verlegt

client.on('messageCreate', async msg => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content === `${prefix}infos`) {
            const infosEmbed = new MessageEmbed()
                .setColor('#eea5cd')
                .setTitle('Infos')
                .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                .setDescription('Infos zum Bot:')
                .setThumbnail(client.user.displayAvatarURL())
                .addFields(
                    { name: 'Version', value: '1.0.0', inline: true },
                    { name: 'Ersteller', value: 'NekoElite', inline: true },
                )
                .setTimestamp()
                .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

            msg.channel.send({ embeds: [infosEmbed] });
        }
    }
})


// Shutdown Command
// Wird später in eine andere Datei verlegt

client.on('messageCreate', async msg => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content === `${prefix}shutdown`) {
            if(msg.member.user.id === adminID) {
                const shutdownEmbed = new MessageEmbed()
                    .setColor('#eea5cd')
                    .setTitle('Shutdown')
                    .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                    .setDescription('Der Bot fährt nun runter.')
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTimestamp()
                    .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());
            
                msg.channel.send({ embeds: [shutdownEmbed] });

                setTimeout(function(){ 
                    client.destroy(); 
                }, 1000);
            }
            else {
                const denyshutdown = new MessageEmbed()
                    .setColor('#ff3232')
                    .setTitle(':name_badge: Fehlgeschlagen')
                    .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                    .setDescription('Du darfst diesen Command nicht benutzt.')
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTimestamp()
                    .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                msg.channel.send({ embeds: [denyshutdown] });
            }
        }
    }
});

// Join Command
// Wird später in eine andere Datei verlegt

client.on('messageCreate', async msg => {
    if(!msg.member.user.bot && msg.guild) {
        if(msg.content === `${prefix}join`) {
            if(msg.member.voice.channel) {
                if(!client.voice.channel) {
                    const joinEmbed = new MessageEmbed()
                        .setColor('#eea5cd')
                        .setTitle('Join')
                        .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                        .setDescription('Ich joine in den Voice Channel **' + msg.member.voice.channel.name + '**.')
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                    msg.channel.send({ embeds: [joinEmbed] });

                    joinVoiceChannel({
                        channelId: msg.member.voice.channel.id,
                        guildId: msg.guild.id,
                        adapterCreator: msg.guild.voiceAdapterCreator
                    });
                }
                else {
                    const joinE2Embed = new MessageEmbed()
                        .setColor('#ff3232')
                        .setTitle(':name_badge: Fehlgeschlagen')
                        .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                        .setDescription('Ich befinde mich derzeit in ein anderen Voice Channel.')
                        .setThumbnail(client.user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                msg.channel.send({ embeds: [joinE2Embed] });
                }
            }
            else {
                const joinE1Embed = new MessageEmbed()
                    .setColor('#ff3232')
                    .setTitle(':name_badge: Fehlgeschlagen')
                    .setAuthor('NekoMusic', client.user.displayAvatarURL(), 'https://github.com/NekoElite/NekoMusic')
                    .setDescription('Du befindest dich in keinen Voice Channel.')
                    .setThumbnail(client.user.displayAvatarURL())
                    .setTimestamp()
                    .setFooter('Bot erstellt von NekoElite', client.user.displayAvatarURL());

                msg.channel.send({ embeds: [joinE1Embed] });
            }
        }
    }
});

client.login(token);
