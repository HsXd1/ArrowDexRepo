const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const highwayStar = new Discord.MessageEmbed()
                .setTitle('Highway Star')
                .setURL('https://jojo.fandom.com/wiki/Highway_Star')
                .setColor(0x52089A)
                .setDescription('User: Yuya Fungami')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/0e/Yuya_AV.png/revision/latest?cb=20170223100737')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: A, Durability: A, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Highway Star (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Highway Go Go'
                }, {
                    name: '**Appearance:**',
                    value: "Highway Star appears as a dark humanoid stand with a checkered body.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Highway star can create rooms and lure victims in to it. Highway Star has an enhanced sense of smell, and uses body dismantlement to steal the victim's nutrients."
                }, )
                .setImage('https://i.ytimg.com/vi/TodGy33QcD0/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Highway Star')
            message.channel.send(highwayStar)
}

module.exports.config = {
    name: "highwayStar",
    description: "gives template",
    usage: "s?highwayStar",
    accessableby: "Members",
    aliases: ['highwaygogo']
}