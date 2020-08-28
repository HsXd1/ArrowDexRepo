const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const moodyBlues = new Discord.MessageEmbed()
                .setTitle('Moody Blues')
                .setURL('https://jojo.fandom.com/wiki/Moody_Blues')
                .setColor(0x52089A)
                .setDescription('User: Leone Abbacchio')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/0e/Leone_Anime-0.png/revision/latest?cb=20190716224830')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: A, Durability: A, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Moody Blues (British rock band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Moody Jazz'
                }, {
                    name: '**Appearence:**',
                    value: "Moody Blues is a humanoid stand with similarities to the body of Abbacchio. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Moody Blues is able to replay past event but needs to be immobile to find out where in time to go back, making it very vulnerable."
                }, )
                .setImage('https://i.ytimg.com/vi/qbx30eqJa1k/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Moody Blues')
            message.channel.send(moodyBlues)
}

module.exports.config = {
    name: "moodyBlues",
    description: "gives info on moodyBlues",
    usage: "s?moodyBlues",
    accessableby: "Members",
    aliases: ['abbacchio','moodyBlues']
}