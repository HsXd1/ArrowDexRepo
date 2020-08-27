const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const purpleHaze = new Discord.MessageEmbed()
                .setTitle('Purple Haze')
                .setURL('https://jojo.fandom.com/wiki/Purple_Haze')
                .setColor(0x8B15EC)
                .setDescription('User: Pannacotta Fugo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/4b/Pannacotta_Fugo_Anime.png/revision/latest?cb=20181104005228')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: C, Durability: E, Precision: E, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Purple Haze by Jimi Hendrix'
                }, {
                    name: '**Localized name:**',
                    value: 'Purple Smoke'
                }, {
                    name: '**Appearence:**',
                    value: "Purple Haze is a humanoid Stand of height and builds similar to Fugo's. Its face and body are patterned by horizontal lozenges of alternating shade, and armor pieces are present on its shoulders, elbows, and knees. In the anime the design is changed to which the stand has a cape and purple mist surrounding it. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Purple Haze has 3 bulbs on both of his hands that will release a virus if they are cracked, usually from punching things. If the virus is released and gets in contact with someone, their flesh will melt into goo in 30 seconds, which makes the virus deadly aound Fugo and everyone else. The stand is only shown in once battle, before Fugo leaves Passione."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/56/PH_Drools_hesdoinghisbestk.png/revision/latest?cb=20190517185203')
                .setTimestamp()
                .setFooter('Purple Haze')
            message.channel.send(purpleHaze)
}

module.exports.config = {
    name: "purpleHaze",
    description: "gives info on purpleHaze",
    usage: "s?purpleHaze",
    accessableby: "Members",
    aliases: ['purpleSmoke', 'fugo', 'panacottaFugo']
}