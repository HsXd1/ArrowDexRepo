const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sound = new Discord.MessageEmbed()
                .setTitle('In a Silent Way')
                .setURL('https://jojo.fandom.com/wiki/In_a_Silent_Way')
                .setColor(0xF76A00)
                .setDescription('User: Sandman')
                .setThumbnail('https://pm1.narvii.com/6859/fa761e739d3dc191664ffeafc76d2af9b1337a50v2_00.jpg')
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
                    value: 'Destructive Power: C, Speed: C, Range: D, Durability: A, Precision: D, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'In a Silent Way (Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Silent Ways (Eyes of Heaven)'
                }, {
                    name: '**Appearance:**',
                    value: 'In a Silent Way',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'In a Silent Way is '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c5/InASilentWaycolor.png/revision/latest/top-crop/width/360/height/360?cb=20140813211634')
                .setTimestamp()
                .setFooter('In a Silent Way')
            message.channel.send(sound)
}

module.exports.config = {
    name: "inASilentWay",
    description: "",
    usage: "s?inASilentWay",
    accessableby: "Members",
    aliases: ['InASilentWay', 'SilentWays', 'Sandman']
}
