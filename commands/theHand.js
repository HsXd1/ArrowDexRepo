const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const theHand = new Discord.MessageEmbed()
                .setTitle('The Hand')
                .setURL('https://jojo.fandom.com/wiki/The_Hand')
                .setColor(0x0800FF)
                .setDescription('User: Okuyasu Nijimura')
                .setThumbnail('https://i.pinimg.com/originals/0d/65/f0/0d65f0e3a68199e0ac6fa771af00e750.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: D, Durability: C, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Band (band)'
                }, {
                    name: '**Appearence:**',
                    value: "The Hand is a humanoid stand with a towel-like object that shows symbols of Okuyasu's fashoin design.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "The Hand is powerful in which the stand can erase anything from exsistance using its right hand, but is slow in doing so. This ability makes it one of the most powerful stands in DiU. But due to Okuyasu being very unintelligent and stupid, The Hand's potential is terrible. "
                }, )
                .setImage('https://i.ytimg.com/vi/UgfYYOyhZY4/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('The Hand')
            message.channel.send(theHand)
}

module.exports.config = {
    name: "theHand",
    description: "gives info on theHand",
    usage: "s?theHand",
    accessableby: "Members",
    aliases: ['theHand', 'okuyasu']
}