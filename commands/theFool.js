const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const theFool = new Discord.MessageEmbed()
                .setTitle('The Fool')
                .setURL('https://jojo.fandom.com/wiki/The_Fool')
                .setColor(0x52089A)
                .setDescription('User: Iggy')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c9/TheFool.png/revision/latest/scale-to-width-down/350?cb=20160416043816')
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
                    value: 'Destructive Power: B, Speed: C, Range: D, Durability: C, Precision: D, Development Potential: C'
                }, {
                    name: '**Namesake:**',
                    value: 'The Fool (tarot card)'
                }, {
                    name: '**Appearence:**',
                    value: "The Fool is a closed range type stand. The stand takes its form by manipulating sand and dust particles in the environment, and is one of the few stands that are visible to everyone. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "The Fool is able to manipulate sand to Iggy's will, and is able to shapeshift to anything Iggy wants."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/2f/TheFool_Anime.png/revision/latest?cb=20150114132110')
                .setTimestamp()
                .setFooter('The Fool')
            message.channel.send(theFool)
}

module.exports.config = {
    name: "theFool",
    description: "gives info on theFool",
    usage: "s?theFool",
    accessableby: "Members",
    aliases: ['iggy']
}