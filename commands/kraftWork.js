const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const kraftWork = new Discord.MessageEmbed()
                .setTitle('Kraft Work')
                .setURL('https://jojo.fandom.com/wiki/Kraft_Work')
                .setColor(0x46D90E)
                .setDescription('User: Sale')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/80/Sale_Anime.png/revision/latest?cb=20181124003716')
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
                    value: 'Destructive Power: A, Speed: A, Range: E, Durability: C, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Kraftwerk (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Arts & Crafts'
                }, {
                    name: '**Appearance:**',
                    value: 'Kraft Work appears as a humanoid robotic stand with streamlined armor, and being protrayed as blue and white in the manga, and green and red in the anime.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Kraft Work can manipulate Kinetic energy, which it can use to lock something in place by taking away its kinetic energy. Kraft Work can add kinetic energy to objects, by tapping a locked object repeatedly. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/19/Kraft_Work_Stats.png/revision/latest?cb=20190401024450')
                .setTimestamp()
                .setFooter('Kraft Work')
            message.channel.send(kraftWork)
}

module.exports.config = {
    name: "kraftWork",
    description: "gives info on kraftwork",
    usage: "s?kraftWork",
    accessableby: "Members",
    aliases: ['sale', 'arts&crafts']
}
