const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const boy2man = new Discord.MessageEmbed()
                .setTitle('Boy || Man')
                .setURL('https://jojo.fandom.com/wiki/Boy_II_Man')
                .setColor(0xA9CABE)
                .setDescription('User: Ken Oyanagi')
                .setThumbnail('https://www.anime-planet.com/images/characters/ken-oyanagi-46095.jpg')
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
                    value: 'Destructive Power: C, Speed: B, Range: B, Durability: A, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Boyz || Men (Vocal Group)'
                }, {
                    name: '**Localized name:**',
                    value: 'Boys Man Man'
                }, {
                    name: '**Appearance:**',
                    value: "Boys || Man appears as a muscular humanoid spirit in gray armor.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Boy || man has no combat ability, but is able to steal the energy from someone whenever the user wins a game of Rock Paper Scissors."
                }, )
                .setImage('https://i.ytimg.com/vi/iIXoosS_1D8/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Boy || Man')
            message.channel.send(boy2man)
}

module.exports.config = {
    name: "boy2man",
    description: "gives template",
    usage: "s?boy2man",
    accessableby: "Members",
    aliases: ['boy2man', 'ken']
}