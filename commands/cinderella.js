const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const cinderella = new Discord.MessageEmbed()
                .setTitle('Cinderella')
                .setURL('https://jojo.fandom.com/wiki/Cinderella')
                .setColor(0xFF00DC)
                .setDescription('User: Aya Tsuji')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c8/Aya_AV.png/revision/latest?cb=20161128023416')
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
                    value: 'Destructive Power: D, Speed: C, Range: C, Durability: C, Precision: A, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Cinderella (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Fashonista (EOH)'
                }, {
                    name: '**Appearance:**',
                    value: "Cinderella appears as a pink feminine humanoid robot with mechanical extremities and a spherical lower body.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Cinderella can replace parts of someone's body to make someone appear more attractive for a temporary amount of time. Cinderella can also replace a body part permanently."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/56/Aya_calls_out_Cinderella.png/revision/latest?cb=20160812180844')
                .setTimestamp()
                .setFooter('Cinderella')
            message.channel.send(cinderella)
}

module.exports.config = {
    name: "cinderella",
    description: "gives info on cinderella",
    usage: "s?cinderella",
    accessableby: "Members",
    aliases: ['Cinderella', 'aya', 'fashonista']
}