const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const dragonsDream = new Discord.MessageEmbed()
                .setTitle('Dragon\'s Dream')
                .setURL('https://jojo.fandom.com/wiki/Dragon%27s_Dream')
                .setColor(0x21BE5C)
                .setDescription('User: Kenzou')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f3/Kenzo.PNG/revision/latest/scale-to-width-down/350?cb=20190120095622')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic; Sentient',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: Null, Range: A, Durability: Null, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Namesake:**',
                    value: 'Dragon\'s Dream (Artbook)'
                }, {
                    name: '**Appearance:**',
                    value: 'Dragon\'s Dream appears as a metallic dragon, surrounded by a floating ring.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Dragon\'s Dream acts neutral in a fight, using Feng Shui to guide its user using its arrow compass to find the lucky spot to attack. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/34/DragonP.png/revision/latest/smart/width/400/height/225?cb=20150607132841')
                .setTimestamp()
                .setFooter('Dragon\'s Dream')
            message.channel.send(dragonsDream)
}

module.exports.config = {
    name: "dragonsDream",
    description: "",
    usage: "s?dragonsDream",
    accessableby: "Members",
    aliases: ['dragon\'sDream', 'DragonsDream', 'Dragon\'sDream', 'Kenzou']
}
