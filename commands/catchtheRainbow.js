const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const rainbow = new Discord.MessageEmbed()
                .setTitle('Catch the Rainbow')
                .setURL('https://jojo.fandom.com/wiki/Catch_the_Rainbow')
                .setColor(0x3539C7)
                .setDescription('User: Blackmore')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/8b/BlackmoreProfile.png/revision/latest/top-crop/width/360/height/450?cb=20181022185717')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: B, Durability: B, Precision: D, Development Potential: D'
                }, {
                    name: '**Music Reference:**',
                    value: 'Catch the Rainbow (Song/Album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Catch the Rainbow appears as a mask that is worn by its user; Blackmore. The mask appears with no nose, angles over its eyeholes and is marked with 3 stripes over his mouth.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Catch the Rainbow\'s ability is to allow Blackmore to manipulate rain in various ways. The rain is used as healing for Blackmore, or travelling.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/96/CatchtheRainbowcolor.png/revision/latest?cb=20140813211237')
                .setTimestamp()
                .setFooter('Catch the Rainbow')
            message.channel.send(rainbow)
}

module.exports.config = {
    name: "catchTheRainbow",
    description: "",
    usage: "s?catchTheRainbow",
    accessableby: "Members",
    aliases: ['catchtheRainbow', 'catchTherainbow', 'Blackmore', 'blackmore']
}
