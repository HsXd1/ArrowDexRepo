const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const theWorld = new Discord.MessageEmbed()
                .setTitle('The World')
                .setURL('https://jojo.fandom.com/wiki/The_World')
                .setColor(0xFFEB00)
                .setDescription('User: DIO')
                .setThumbnail('https://vignette.wikia.nocookie.net/unanything/images/9/9a/638771CC-8977-4AA9-96BE-741D96CDF3E1.jpeg/revision/latest/scale-to-width-down/340?cb=20190825143621')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: B, Development Potential: B'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The World'
                }, {
                    name: '**Appearence:**',
                    value: 'The World is a humanoid, closed-range stand and is tall and has a very muscular build. It bears a resemblance to DIO in terms of appearance. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "The World can stop time for a maximum of 9 seconds, and has the same abilities as Star Platinum, making them the same type of stand."
                }, )
                .setImage('https://media1.tenor.com/images/5062fb0fce350747a3020ecc14a30d81/tenor.gif?itemid=5464738')
                .setTimestamp()
                .setFooter('The World')
            message.channel.send(theWorld)
}

module.exports.config = {
    name: "theWorld",
    description: "gives info on theWorld",
    usage: "s?theWorld",
    accessableby: "Members",
    aliases: ['theWorld', 'DIO', 'theworld']
}