const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('King Nothing')
                .setURL('https://jojo.fandom.com/wiki/King_Nothing')
                .setColor(0xCE8CD8)
                .setDescription('User: Norisuke Higashikata IV')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/dd/Norisuke_Higashikata_IV.png/revision/latest/scale-to-width-down/350?cb=20190319184057')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'King Nothing (Metallica song)'
                }, {
                    name: '**Appearance:**',
                    value: 'King Nothing appears a purple humanoid made completely out of jigsaw puzzle pieces. It has two drooping horns on each side of its head and shild-shaped eyes. It kind of looks like a jester.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "King Nothing's abilities are disassembling itself into jigsaw pieces to slip through narrow spaces, recreating objects by assembling itself a different way, and scent tracking. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/19/King_Nothing.png/revision/latest/scale-to-width-down/345?cb=20170805043534')
                .setTimestamp()
                .setFooter('King Nothing')
            message.channel.send(stand)
}

module.exports.config = {
    name: "kingNothing",
    description: "",
    usage: "s?kingNothing",
    accessableby: "Members",
    aliases: ['norisuke']
}