const { MessageEmbed } = require('discord.js');
const { prefix, adminID } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, msg, args) {
        if(!msg.member.user.bot && msg.guild) {
            if(msg.member.user.id === adminID) {
                const ahelpEmbed = new MessageEmbed()
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

                msg.channel.send({ embeds: [ahelpEmbed] });
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
}
