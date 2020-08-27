const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const standNameHere = new Discord.MessageEmbed()
                .setTitle('Crazy Diamond')
                .setURL('https://jojo.fandom.com/wiki/Crazy_Diamond')
                .setColor(0xFF007A)
                .setDescription('User: Josuke Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/2/24/JosukeAnime.PNG/revision/latest?cb=20171212081940')
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
                    value: 'Destructive Power: A, Speed: A, Range: D, Durability: B, Precision: B, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Shine On You Crazy Diamond (Pink Floyd Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Shining Diamond'
                }, {
                    name: '**Appearence:**',
                    value: "Crazy Diamond is a humanoid stand, with headgear and armour plates like The World, with the armor being silver and look",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Crazy Diamond is a close-range stand, like The World, or Star Platinum. It has the same abilities and range, as Star Platinum, with super strength, super speed, and good precision. His main ability is restoration, which could restore objects and organisms through touch, but cannot heal Josuke himself."
                }, )
                .setImage('https://media1.tenor.com/images/59317b031ff48e182c3e54a93b982886/tenor.gif?itemid=6230457')
                .setTimestamp()
                .setFooter('Crazy Diamond')
            message.channel.send(standNameHere)
}

module.exports.config = {
    name: "crazyDiamond",
    description: "gives info on crazyDiamond",
    usage: "s?crazyDiamond",
    accessableby: "Members",
    aliases: ['crazyDiamond', 'josuke']
}
