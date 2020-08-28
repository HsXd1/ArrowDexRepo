const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const justice = new Discord.MessageEmbed()
                .setTitle('Justice')
                .setURL('https://jojo.fandom.com/wiki/Justice')
                .setColor(0x5D5E67)
                .setDescription('User: Enya the Hag')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/6b/Enyaba.png/revision/latest/scale-to-width-down/340?cb=20170316071638')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance ',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: E, Range: A, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Justice'
                }, {
                    name: '**Appearence:**',
                    value: "Justice primarily takes the appearance of a massive cloud of fog, being large enough to envelop a small cemetery.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Justice can control bodies through open wounds, and create illusions. Enya was able to manifest an entire city using this."
                }, )
                .setImage('https://i.imgur.com/iqd9wvG.png')
                .setTimestamp()
                .setFooter('Justice')
            message.channel.send(justice)
}

module.exports.config = {
    name: "justice",
    description: "gives info on justice",
    usage: "s?justice",
    accessableby: "Members",
    aliases: ['justice', 'enya', 'enyaba']
}