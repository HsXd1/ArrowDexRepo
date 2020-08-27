const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const newYork = new Discord.MessageEmbed()
                .setTitle('Manhattan Transfer')
                .setURL('https://jojo.fandom.com/wiki/Manhattan_Transfer')
                .setColor(0xEF9007)
                .setDescription('User: Johngalli A')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/93/Jongalli_a_prof.png/revision/latest/top-crop/width/720/height/900?cb=20190324013518')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: A, Durability: A, Precision: A, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Manhattan Transfer (Vocal Group)'
                }, {
                    name: '**Appearance:**',
                    value: 'Manhattan Transfer appears as a small satellite with a round metallic core and 4 rectangular plates on its sides.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Manhattan Transfer\'s primary ability is to direct the velocity and direction of the bullets shot by Johngalli, and is also able to read the air currents around it and react to them.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/67/ManhattanP.png/revision/latest?cb=20170302043811')
                .setTimestamp()
                .setFooter('Manhatten Transfer')
            message.channel.send(newYork)
}

module.exports.config = {
    name: "manhattanTransfer",
    description: "",
    usage: "s?manhattanTransfer",
    accessableby: "Members",
    aliases: ['johngalli']
}
