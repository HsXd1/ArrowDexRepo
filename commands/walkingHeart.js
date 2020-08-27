const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Walking Heart')
                .setURL('https://jojo.fandom.com/wiki/Walking_Heart')
                .setColor(0xDF8812 )
                .setDescription('User: Hato Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e0/Hato_Higashikata.png/revision/latest/top-crop/width/360/height/450?cb=20180727032024')
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
                    value: "Walking Heart appears as a female humanoid. Made mostly of thin, rigid strands, it lacks a nose and mouth. It has hearts around it's chest and neck.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Walking Heart's abilities are speed and power, and uses its feet to stab people."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/01/Walking_Heart.png/revision/latest/scale-to-width-down/350?cb=20180727030342')
                .setTimestamp()
                .setFooter('Walking Heart')
            message.channel.send(stand)
}

module.exports.config = {
    name: "walkingHeart",
    description: "",
    usage: "s?walkingHeart",
    accessableby: "Members",
    aliases: ['hatoHigashikata', 'hato', ]
}