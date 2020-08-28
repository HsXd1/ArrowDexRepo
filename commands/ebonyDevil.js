const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const ebonyDevil = new Discord.MessageEmbed()
                .setTitle('Ebony Devil')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setColor(0xC37F39)
                .setDescription('User: Devo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f3/Anime_Devo.png/revision/latest?cb=20181231213028')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance'
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: D, Range: A, Durability: B, Precision: D, Development Potential: B'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Devil'
                }, {
                    name: '**Description:**',
                    value: "Ebony Devil's base design is based on the ancient Sardinian bronze statuettes known as 'brunzeddos'. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Ebony Devil is operated remotely, relying on its user's sadistic personality to kill its target."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/fa/Ebony_Devil-A08.png/revision/latest?cb=20150217155236')
                .setTimestamp()
                .setFooter('Ebony Devil')
            message.channel.send(ebonyDevil)
}

module.exports.config = {
    name: "ebonyDevil",
    description: "gives info on ebonyDevil",
    usage: "s?ebonyDevil",
    accessableby: "Members",
    aliases: ['EbonyDevil', 'Devo', 'devo']
}