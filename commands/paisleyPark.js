const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const paisleyPark = new Discord.MessageEmbed()
                .setTitle('Paisley Park')
                .setURL('https://jojo.fandom.com/wiki/Paisley_Park')
                .setColor(0xE20FCE)
                .setDescription('User: Yasuho Hirose')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/bb/Yasuho_Hirose-1.png/revision/latest?cb=20200112051254')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: Null, Range: A, Durability: A, Precision: D, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Paisley Park (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Flower Park (Bandai Namco English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Paisley Park appears as a humanoid stand, with a build similar to Yasuho, except much taller and appears two-dimensional.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Paisley Park is able to help Yasuho in many different ways. Paisley Park guides Yasuho and helps her find locations and people that is crucial to her task. Paisley Park always protects Yasuho and does everything it can to protect her.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/23/PaisleyParkGlobe.png/revision/latest?cb=20171020064805')
                .setTimestamp()
                .setFooter('Paisley Park')
            message.channel.send(paisleyPark)
}

module.exports.config = {
    name: "paisleyPark",
    description: "",
    usage: "s?paisleyPark",
    accessableby: "Members",
    aliases: ['yasuho', 'flowerPark']
}
