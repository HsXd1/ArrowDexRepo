const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stickyFingers = new Discord.MessageEmbed()
                .setTitle('Sticky Fingers')
                .setURL('https://jojo.fandom.com/wiki/Sticky_Fingers')
                .setColor(0x232ED8)
                .setDescription('User: Bruno Bucciarati')
                .setThumbnail('https://i.pinimg.com/originals/63/4b/7b/634b7bf221082c5bd19e713b4b8a8586.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stand Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: D, Precision: C, Development Potential: D'
                }, {
                    name: '**Music Reference:**',
                    value: 'Sticky Fingers (The Rolling Stones Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Zipper Man'
                }, {
                    name: '**Appearence:**',
                    value: "Sticky Fingers is a humanoid stand with similarities to Bucciarati himself. It wears a mohawk like helmet that covers it's face and a dark body suit that covers its body. Sticky Fingers is portrayed as white and blue.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Sticky Fingers is a close-range stand that is able to create zippers on any surface it touches. Bucciarati is able to use those zippers to travel through or cut through and open objects. The zippers could also seperate enemies into multiple pieces. "
                }, )
                .setImage('https://i.ytimg.com/vi/fgIIv5EvvvQ/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Sticky Fingers')
            message.channel.send(stickyFingers)
}

module.exports.config = {
    name: "stickyFingers",
    description: "gives info on stickyFingers",
    usage: "s?stickyFingers",
    accessableby: "Members",
    aliases: ['stickyFingers', 'bruno', 'bucciarati', 'zipperMan']
}