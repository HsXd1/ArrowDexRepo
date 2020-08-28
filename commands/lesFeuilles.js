const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('lesFeuilles')
                .setURL('https://jojo.fandom.com/wiki/Les_Feuilles')
                .setColor(0x6FAE63)
                .setDescription('User: Shakedown Road')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/96/Robbing_road.png/revision/latest/scale-to-width-down/350?cb=20160425090224')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Japaense neighborhood/roadside',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Autumn Leaves  (Bill Evans album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Les Feuilles appears as green tiny insect Stands with helmet shaped heads and sucker feet. It is covered in polka-dots and the number 11. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Les Feuilles' ability is instantly moving people or things that step on leaves to the other end of a path of leaves that are connected."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/30/LesFeuilles.png/revision/latest/scale-to-width-down/350?cb=20160823120901')
                .setTimestamp()
                .setFooter('Les Feuilles')
            message.channel.send(stand)
}

module.exports.config = {
    name: "lesFeuilles",
    description: "",
    usage: "s?lesFeuilles",
    accessableby: "Members",
    aliases: ['shakedownRoad']
}