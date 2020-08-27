const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const littleFeet = new Discord.MessageEmbed()
                .setTitle('Little Feet')
                .setURL('https://jojo.fandom.com/wiki/Little_Feet')
                .setColor(0x527C96)
                .setDescription('User: Formaggio')
                .setThumbnail('https://i.pinimg.com/originals/02/01/02/0201029509649dbaab12f161316c0177.png')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: B, Range: E, Durability: A, Precision: D, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Little Feet (Rock Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Tiny Feet'
                }, {
                    name: '**Appearance:**',
                    value: 'Little Feet appears humanoid with robotic features. It\'s teeth are always showing, and is portrayed as silver in media.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: ':Little Feet is able to shrink any person and any object by cutting them with its index finger. The cut will shrink everything that is connected to the target, but the shrinking is slow.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/03/Little_Feet_Stats.png/revision/latest?cb=20190622114236')
                .setTimestamp()
                .setFooter('Little Feet')
            message.channel.send(littleFeet)
}

module.exports.config = {
    name: "littleFeet",
    description: "",
    usage: "s?littleFeet",
    accessableby: "Members",
    aliases: ['tinyFeet']
}
