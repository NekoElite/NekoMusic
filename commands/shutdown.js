const { MessageEmbed } = require('discord.js');
const { prefix, adminID } = require('../config.json');

module.exports = {
    name: 'shutdown',
    execute(client, msg, args) {
        if(!msg.member.user.bot && msg.guild) {
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
        }
    }
}