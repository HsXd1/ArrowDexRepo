const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const osiris = new Discord.MessageEmbed()
                .setTitle('Osiris')
                .setURL('https://jojo.fandom.com/wiki/Osiris')
                .setColor(0xB2A329)
                .setDescription("User: Daniel J. D'Arby")
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/5f/D%27arby_portrait.png/revision/latest?cb=20150313230018')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: D, Range: D, Durability: C, Precision: D, Development Potential: D'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Osirs'
                }, {
                    name: '**Appearence:**',
                    value: "Osiris appears as a very large, muscular, humanoid stand; as being portrayed as different colors throughout media.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Osiris is an automatic stand in which it can steal people's souls who have lost to D'Arby in a bet or game. The souls are stored in poker chips, and if D'Arby dies, all the souls he's collected die, according to him."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/5d/Screenshot_%28336%29.png/revision/latest?cb=20150313230751 ')
                .setTimestamp()
                .setFooter('Osiris')
            message.channel.send(osiris)
}

module.exports.config = {
    name: "osiris",
    description: "gives info on osiris",
    usage: "s?osiris",
    accessableby: "Members",
    aliases: ['osiris', 'danielJ.D\'Arby']
}