const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Schott Key No.1')
                .setURL('https://jojo.fandom.com/wiki/Schott_Key_No.1')
                .setColor(0x545A5C )
                .setDescription('User: Elder A. Phex Brother')
                .setThumbnail('https://cdn.discordapp.com/attachments/437064607304122368/742451604233388080/tumblr_80f43e85bbd7a6d4925c500c72d496eb_0df5107f_500_3.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Song'
                }, {
                    name: '**Appearance:**',
                    value: 'Schott Key No.1 resides in the right hand of the elder A. Phex Brother. It makes his hand into a deformed rocky stump.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Schott Key No.1's allows the user to transfer objects that he touches with his left hand to his right hand."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/94/Schott_Key_No.1.png/revision/latest?cb=20180727024217')
                .setTimestamp()
                .setFooter('Schott Key 1')
            message.channel.send(stand)
}

module.exports.config = {
    name: "schottKey1",
    description: "",
    usage: "s?schottKey1",
    accessableby: "Members",
    aliases: ['elder']
}