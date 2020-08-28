const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const surface = new Discord.MessageEmbed()
                .setTitle('Surface')
                .setURL('https://jojo.fandom.com/wiki/Surface')
                .setColor(0x52089A)
                .setDescription('User: Toshikazu Hazmada')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c6/Toshikazu_AV.png/revision/latest/scale-to-width-down/350?cb=20160513192354')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound; Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: B, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Surface (US Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Show Off'
                }, {
                    name: '**Appearance:**',
                    value: "Surface appears as a brown mannequin, but can change appearence to match whatever victim it chooses to impersonate.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Surface can change its appearance based on whatever it is facing. It changes its voice, appearance, and mannerism. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/5e/Surface_Stats.png/revision/latest?cb=20160513170150')
                .setTimestamp()
                .setFooter('Surface')
            message.channel.send(surface)
}

module.exports.config = {
    name: "surface",
    description: "gives info on surface",
    usage: "s?surface",
    accessableby: "Members",
    aliases: ['surface', 'toshikazu']
}
