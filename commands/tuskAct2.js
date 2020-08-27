const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const tuskAct2 = new Discord.MessageEmbed()
                .setTitle('Tusk ACT2')
                .setURL('https://jojo.fandom.com/wiki/Tusk')
                .setColor(0xFF00D3)
                .setDescription('User: Johnny Joestar')
                .setThumbnail('https://i.pinimg.com/originals/b9/a4/34/b9a434db7fefee96c1417e33e1f7ec88.png')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Evolved; Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: D, Range: B, Durability: C, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tusk (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tusk ACT2 is the evolved form of ACT1. The Stand has a small body, and has a mechanical appearence.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tusk ACT2 enhances the nail shooting ability with the Golden Rectangle. The nails now rotate around Johnny\'s finger like axes, in which power of the nails are greatly increased. The nails recharge much slower; however, Johnny can drink herbal tea or much herbs to accelerate the growing process.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/7a/TuskAct2color.png/revision/latest?cb=20160325172005')
                .setTimestamp()
                .setFooter('Tusk ACT2')
            message.channel.send(tuskAct2)
}

module.exports.config = {
    name: "tuskAct2",
    description: "",
    usage: "s?tuskAct2",
    accessableby: "Members",
    aliases: ['tuskACT2']
}
