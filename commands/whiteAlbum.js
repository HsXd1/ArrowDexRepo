const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const whiteAlbum = new Discord.MessageEmbed()
                .setTitle('White Album')
                .setURL('https://jojo.fandom.com/wiki/White_Album')
                .setColor(0xACD7D2)
                .setDescription('User: Ghiaccio')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/a6/Ghiaccio_infobox_anime.png/revision/latest?cb=20190210101934')
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
                    value: 'Destructive Power: A, Speed: C, Range: C, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'White Album (Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'White Ice'
                }, {
                    name: '**Appearance:**',
                    value: 'White Album takes the form of a light colored suit, and fully covers Ghiaccio\'s body. There is an air hole at a small opening near his back, and ice skates at its feet.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'White Album\'s main ability is to decrease the temperature of anythonk Ghiaccio touches. The ability is very powerful, in which temperatures can reach -100°C easily. White Album can even use the mositure around it and turn it in to armor. Its second ability allows it to decrease the temperature in which the air surrounding him freezes solid.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/21/White_Album_Stats.png/revision/latest?cb=20190622115724')
                .setTimestamp()
                .setFooter('White Album')
            message.channel.send(whiteAlbum)
}

module.exports.config = {
    name: "whiteAlbum",
    description: "",
    usage: "s?whiteAlbum",
    accessableby: "Members",
    aliases: ['whiteIce', 'Ghiaccio']
}
