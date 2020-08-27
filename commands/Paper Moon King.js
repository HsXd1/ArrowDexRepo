const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Paper Moon King')
                .setURL('https://jojo.fandom.com/wiki/Paper_Moon_King')
                .setColor(0xAFABA7)
                .setDescription('User: Tsurugi Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/ae/Tsurugi_Higashikata.png/revision/latest/scale-to-width-down/344?cb=20170306033350')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: C, Durability: C, Precision: B, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: "It's Only a Paper Moon (Song by Nat King Cole)"
                }, {
                    name: '**Appearance:**',
                    value: 'Paper Moon King appears as origami, but is usually folded into a frog.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Paper Moon King's ability is to remove the ability to differentiate faces, objects, voices, and texts if someone is touched by the origami models created."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/75/Paper_Moon_King.png/revision/latest/scale-to-width-down/350?cb=20170321052033')
                .setTimestamp()
                .setFooter('Paper Moon King')
            message.channel.send(stand)
}

module.exports.config = {
    name: "paperMoonKing",
    description: "",
    usage: "s?paperMoonKing",
    accessableby: "Members",
    aliases: ['tsurugi']
}