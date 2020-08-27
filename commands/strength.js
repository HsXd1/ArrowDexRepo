const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const strength = new Discord.MessageEmbed()
                .setTitle('Strength')
                .setURL('https://jojo.fandom.com/wiki/Strength')
                .setColor(0xC37F39)
                .setDescription('User: Forever')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/38/ForeverAnime.png/revision/latest?cb=20140817060016')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound Stand'
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: D, Range: D, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Strength'
                }, {
                    name: '**Appearence:**',
                    value: "Strength is a stand that is bound to a small yacht, which is then transformed into a gigantic derelict freighter.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Strength is capable of having psychic control of the entirety of the boat, and almost killed the Crusaders at once."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/ec/Strength_AnimeAV.png/revision/latest/scale-to-width-down/350?cb=20160414095727')
                .setTimestamp()
                .setFooter('strength')
            message.channel.send(strength)
}

module.exports.config = {
    name: "strength",
    description: "gives info on strength",
    usage: "s?strength",
    accessableby: "Members",
    aliases: ['strength', 'forever']
}