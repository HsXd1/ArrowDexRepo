const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const ewf = new Discord.MessageEmbed()
                .setTitle('Earth Wind and Fire')
                .setURL('https://jojo.fandom.com/wiki/Earth_Wind_and_Fire')
                .setColor(0x4BAE1E)
                .setDescription('User: Mikitaka Hazekura')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/39/Mikitaka_OVA.png/revision/latest?cb=20180724012113')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: N/A, Durability: A, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Earth Wind & Fire (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Terra Ventus'
                }, {
                    name: '**Appearance:**',
                    value: "Description of the Stand",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Earth Wind and Fire allows Mikitaka to transform into any object, but must have a clear picture on what to transform in to. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9d/EW%26F_AV.png/revision/latest?cb=20160930175920')
                .setTimestamp()
                .setFooter('Earth Wind and Fire')
            message.channel.send(ewf)
}

module.exports.config = {
    name: "earthwindandFire",
    description: "gives info on earth wind and fire stand haha mikitaka go burr",
    usage: "-earthwindandFire",
    accessableby: "Members",
    aliases: ['earthwindandFire', 'mikitaka']
}