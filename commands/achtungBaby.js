const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const achtungBaby = new Discord.MessageEmbed()
                .setTitle('Achtung Baby')
                .setURL('https://jojo.fandom.com/wiki/Achtung_Baby')
                .setColor(0xFF00AD)
                .setDescription('User: Shizuka Joestar')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/6f/AchtungBaby.png/revision/latest/scale-to-width-down/350?cb=20140808160051')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: Null, Durability: E, Precision: A, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Achtung Baby (Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Invisible Baby'
                }, {
                    name: '**Appearance:**',
                    value: "Achtung Baby is a stand bound to Shizuka herself.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Achtung Baby is able to make Shizuka and things around her turn completely invisibe; in which being a baby, can be very dangerous."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/6f/Achtung_Baby_AV.png/revision/latest/scale-to-width-down/350?cb=20160924071026')
                .setTimestamp()
                .setFooter('Achtung Baby')
            message.channel.send(achtungBaby)
}

module.exports.config = {
    name: "achtungBaby",
    description: "gives info on achtungBaby",
    usage: "s?achtungBaby",
    accessableby: "Members",
    aliases: ['shizukaJoestar', 'invisibleBaby', 'InvisibleBaby']
}