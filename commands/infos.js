const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'infos',
    execute(client, msg, args) {
        if(!msg.member.user.bot && msg.guild) {
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
}