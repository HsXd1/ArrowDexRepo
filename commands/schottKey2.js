const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Schott Key No.2')
                .setURL('https://jojo.fandom.com/wiki/Schott_Key_No.2')
                .setColor(0x55B560)
                .setDescription('User: Younger A. Phex Brother')
                .setThumbnail('https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/d/d8/Younger_A_Phex_Brother.png/revision/latest/scale-to-width-down/340?cb=20190821152729')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Song'
                }, {
                    name: '**Appearance:**',
                    value: 'Schott Key No.2 appears as a small doll looking substance. It is kind of a humanoid with a morphous body. It is kept in the users soccer ball.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Schott Key No.2's ability is a deadly poison. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/0b/Schott_Key_No.2.png/revision/latest?cb=20180727024218')
                .setTimestamp()
                .setFooter('Schott Key 2')
            message.channel.send(stand)
}

module.exports.config = {
    name: "schottKey2",
    description: "",
    usage: "s?schottKey2",
    accessableby: "Members",
    aliases: ['younger']
}