const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const survivor = new Discord.MessageEmbed()
                .setTitle('Survivor')
                .setURL('https://jojo.fandom.com/wiki/Survivor')
                .setColor(0xEFEC07)
                .setDescription('User: Guccio; Unnamed Lodge Owner')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/d1/Guccio.PNG/revision/latest/top-crop/width/360/height/450?cb=20161013091817')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic; Colony',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: C, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Survivor (Band)'
                }, {
                    name: '**Appearance:**',
                    value: 'Survivor appears as a colony of small flat creatures with 2 eyes, mouth, and tentacles.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'DIO calls Survivor the "weakest" stand. Survivor is an automatic stand in which it dramatically increases the aggressiveness of a person. The aggressiveness is there anger or fighting spirit.'
                }, )
                .setImage('https://rogervstheworld.files.wordpress.com/2015/11/survivorp.png?w=660')
                .setTimestamp()
                .setFooter('Survivor')
            message.channel.send(survivor)
}

module.exports.config = {
    name: "survivor",
    description: "",
    usage: "s?survivor",
    accessableby: "Members",
    aliases: ['guccio']
}
