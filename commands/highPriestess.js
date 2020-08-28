const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const highPriestess = new Discord.MessageEmbed()
                .setTitle('High Priestess')
                .setURL('https://jojo.fandom.com/wiki/High_Priestess')
                .setColor(0x52089A)
                .setDescription('User: Midler')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e4/MidlerFull.png/revision/latest/scale-to-width-down/270?cb=20161010052900')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: A, Durability: A, Precision: D, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The High Priestess'
                }, {
                    name: '**Appearence:**',
                    value: "High Priestess appears as a small creature with a tribal mask and vicious eyes, with muscular arms coming out of a mush or inorganic matter.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "High Priestess is able to shapeshift and possess minerals, and even replicate complex structures. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/8/87/HighPriestess_first.jpg/revision/latest?cb=20140906091602')
                .setTimestamp()
                .setFooter('High Priestess')
            message.channel.send(highPriestess)
}

module.exports.config = {
    name: "highPriestess",
    description: "gives info on highPriestess",
    usage: "-highPriestess",
    accessableby: "Members",
    aliases: ['highPriestess']
}