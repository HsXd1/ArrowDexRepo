const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    
const wheelofFortune = new Discord.MessageEmbed()
                .setTitle('Stand Name')
                .setURL('https://jojo.fandom.com/wiki/Wheel_of_Fortune')
                .setColor(0xFF0000)
                .setDescription('User: ZZ')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/31/ZZ_full_color.png/revision/latest?cb=20140604104009')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound Stand; Close-Range Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: D, Range: D, Durability: A, Precision: E, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Wheel of Fortune'
                }, {
                    name: '**Appearence:**',
                    value: "Wheel of Fortune is bound to a car and, like Strength, is also visible to non-Stand users.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: " Its appearance can change wildly because ZZ can change the features of the car to suit his conscience. ZZ could morph and adapt the car to any situation, and even shoot its gasoline with high pressure."
                }, )
                .setImage('https://i.imgur.com/y63ZOGk.png')
                .setTimestamp()
                .setFooter('Wheel of Fortune')
            }

module.exports.config = {
    name: "wheelOfFortune",
    description: "gives info on wheelofFortune",
    usage: "s?wheelofFortune",
    accessableby: "Members",
    aliases: ['wheelofFortune', 'zz']
}