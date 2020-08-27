const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sexPistols = new Discord.MessageEmbed()
                .setTitle('Sex Pistols')
                .setURL('https://jojo.fandom.com/wiki/Sex_Pistols')
                .setColor(0xFFA100)
                .setDescription('User: Guido Mista')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/11/Mista_Anime.png/revision/latest?cb=20191227010238')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Colony',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: C, Range: B, Durability: A, Precision: A, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Sex Pistols (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Six Bullets'
                }, {
                    name: '**Appearance:**',
                    value: "Sex Pistols is made up of 6 tiny bullet-like entities, which live inside a revolver. Each bullet has a number on its forehead, numbered from 1-7, skipping the number 4.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Sex Pistols' main ability is to ride the bullets that Mista fires, and which they can kick the bullets to change the path of it, or split the bullet in to multiple pieces. The bullets are able to reload the gun quickly, without Mista doing it himself, making the bullets very useful."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/cd/Sex_Pistols.jpg/revision/latest?cb=20180901164914')
                .setTimestamp()
                .setFooter('Sex Pistols')
            message.channel.send(sexPistols)
}

module.exports.config = {
    name: "sexPistols",
    description: "gives info on sexPistols",
    usage: "s?sexPistols",
    accessableby: "Members",
    aliases: ['sixBullets', 'mista']
}