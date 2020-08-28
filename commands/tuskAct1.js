const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tuskAct1 = new Discord.MessageEmbed()
                .setTitle('Tusk ACT1')
                .setURL('https://jojo.fandom.com/wiki/Tusk')
                .setColor(0xFF00D3)
                .setDescription('User: Johnny Joestar')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/96/Johny_Joestar_profile.jpg/revision/latest?cb=20191229095703')
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
                    value: 'Destructive Power: E, Speed: E, Range: D, Durability: B, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tusk (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tusk ACT1 appears as a small animal, with a small head that has a gold beak and stars around it. It\'s entire body is coverd with gold stars.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tusk ACT1 grants Johnny to shoot his nails (finger and toe alike) with the power of Spin. The nails are shot at a high velocity and up to 10 meters, but are overall weak (can\'t cut metal) and require a short time to recharge after being fired.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/58/TuskAct1color.png/revision/latest?cb=20140813205839')
                .setTimestamp()
                .setFooter('Tusk ACT1')
            message.channel.send(tuskAct1)
}

module.exports.config = {
    name: "tuskAct1",
    description: "",
    usage: "s?tuskAct1",
    accessableby: "Members",
    aliases: ['tuskACT1']
}
