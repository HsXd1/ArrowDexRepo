const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sethan = new Discord.MessageEmbed()
                .setTitle('Sethan')
                .setURL('https://vignette.wikia.nocookie.net/jjba/images/1/16/Screenshot_%28298%29.png/revision/latest?cb=20150301232603')
                .setColor(0x21201C)
                .setDescription('User: Alessi')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/16/Screenshot_%28298%29.png/revision/latest?cb=20150301232603')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: D, Range: E, Durability: C, Precision: D, Development Potential: D'
                },  {
                    name: '**Localized name:**',
                    value: 'Set'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Set'
                }, {
                    name: '**Appearence:**',
                    value: "Sethan is bound to Alessi's shadow, with a round head and pointed crest, being portrayed as a black shadow in the Anime, and purple shadow in the manga",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Sethan imitates the fom of Alessi's shadow, allowing it to attack. Sethan's shadow can make people age backward rapidly if they stand in it. The shadow turned Polnareff in to a child when he stood in it for a second, and turned his stand younger."
                }, )
                .setImage('https://i.ytimg.com/vi/Ojq7abhcp4A/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Sethan')
            message.channel.send(sethan)
}

module.exports.config = {
    name: "sethan",
    description: "gives info on sethan",
    usage: "s?sethan",
    accessableby: "Members",
    aliases: ['alessi', 'set']
}