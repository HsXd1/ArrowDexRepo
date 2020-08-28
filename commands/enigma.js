const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const enigma = new Discord.MessageEmbed()
                .setTitle('Enigma')
                .setURL('https://jojo.fandom.com/wiki/Enigma')
                .setColor(0x52089A)
                .setDescription('User: Terunosuke Miyamoto')
                .setThumbnail('https://vignette.wikia.nocookie.net/villains/images/3/32/Miyamoto_AV.png/revision/latest/scale-to-width-down/340?cb=20191220204939')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: C, Durability: A, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Enigma (Electronic Music Project)'
                }, {
                    name: '**Localized name:**',
                    value: 'Misterioso'
                }, {
                    name: '**Appearance:**',
                    value: "Enigma appers as a dark humanoid figure, being colored with dark quesion marks around its body.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Enigma can put anything and fold anything into paper. However, to fold a person in to paper, Enigma needs to see the target's habits when afraid." 
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/68/Terunosuke_trapped_Yuya_in_paper.png/revision/latest?cb=20161113235456')
                .setTimestamp()
                .setFooter('Enigma')
            message.channel.send(enigma)
}

module.exports.config = {
    name: "enigma",
    description: "gives info on enigma",
    usage: "s?enigma",
    accessableby: "Members",
    aliases: ['misterioso', 'terunosuke']
}