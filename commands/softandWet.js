const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const softandWet = new Discord.MessageEmbed()
                .setTitle('Soft & Wet')
                .setURL('https://jojo.fandom.com/wiki/Soft_%26_Wet')
                .setColor(0x13F2F0)
                .setDescription('User: Josuke Higashikata; Josefumi Kujo (original user)')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/d2/Jo2uke.png/revision/latest?cb=20200105132036')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: D, Durability: B, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Soft and Wet by Prince'
                }, {
                    name: '**Appearence:**',
                    value: "Soft & Wet is a humanoid Stand that is a streamlined, robotic form, light in color, and similar in height to Josuke(8). ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Soft and Wet is able to use bubbles to steal something from an object and take it. A bubble once stole Joshu's eyesight, stole water from a body, and could steal friction from the floor."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/3a/S%26W_Executes_Damo.png/revision/latest?cb=20190112125316')
                .setTimestamp()
                .setFooter('Soft & Wet')
            message.channel.send(softandWet)
}

module.exports.config = {
    name: "softAndWet",
    description: "gives info on softandWet",
    usage: "s?softandWet",
    accessableby: "Members",
    aliases: ['soft&Wet', 'gappy', 'josefumiKujo']
}