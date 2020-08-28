const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const theLock = new Discord.MessageEmbed()
                .setTitle('The Lock')
                .setURL('https://jojo.fandom.com/wiki/The_Lock')
                .setColor(0xB0AE8F)
                .setDescription('User: Tamami Kobayashi')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/72/Tamami_AV.png/revision/latest/scale-to-width-down/335?cb=20160506181245')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: A, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Rock (The Who Song)'
                }, {
                    name: '**Appearance:**',
                    value: "The Lock appears as a giant U-Shaped Lock with the character Zeni written on the front written on it.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Tamami can make someone guilty, then summon The Lock. The Lock appears in someone's chest, and gets heavier after the guilt is multiplied. The Lock can detect dishonesty in a person, and will give a sign if the person appears either."
                }, )
                .setImage('https://i.ytimg.com/vi/oneT6zWUlg4/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('The Lock')
            message.channel.send(theLock)
}

module.exports.config = {
    name: "theLock",
    description: "gives info on theLock",
    usage: "s?theLock",
    accessableby: "Members",
    aliases: ['theLock', 'tamami']
}