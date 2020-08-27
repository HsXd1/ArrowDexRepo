const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const limpBizkit = new Discord.MessageEmbed()
                .setTitle('Limp Bizkit')
                .setURL('https://jojo.fandom.com/wiki/Limp_Bizkit')
                .setColor(0x9D4444)
                .setDescription('User: Sports Maxx')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/8e/Sportsmax.jpg/revision/latest/top-crop/width/360/height/450?cb=20150112073331')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: B, Range: B, Durability: A, Precision: C, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Limp Bizkit (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Flaccid Pancake (Eyes of Heaven)'
                }, {
                    name: '**Appearance:**',
                    value: 'Limp Bizkit does not have a physical appearence.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Limp Bizkit can be controlled while Sports Maxx is dead. It\'s main ability is to bring back the dead, which manifest as  invisible wraiths, which Maxx can control.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/07/Limp_Bizkit.png/revision/latest/top-crop/width/360/height/450?cb=20150607133538')
                .setTimestamp()
                .setFooter('Limp Bizkit')
            message.channel.send(limpBizkit)
}

module.exports.config = {
    name: "limpBizkit",
    description: "",
    usage: "s?limpBizkit",
    accessableby: "Members",
    aliases: ['flaccidPancake', 'sportsMaxx']
}
