const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const oasis = new Discord.MessageEmbed()
                .setTitle('Oasis')
                .setURL('https://jojo.fandom.com/wiki/Oasis')
                .setColor(0xAB6E17)
                .setDescription('User: Secco')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/a9/Oasis_Anime_Infobox.png/revision/latest/scale-to-width-down/350?cb=20190524171928')
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
                    value: 'Destructive Power: A, Speed: A, Range: B, Durability: A, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Oasis (Band);'
                }, {
                    name: '**Localized name:**',
                    value: 'Sanctuary'
                }, {
                    name: '**Appearance:**',
                    value: 'Oasis takes the form of a wearable suit, like White Album. Oasis covers Secco\'s whole body, except for his face.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Oasis allows Secco to make solid ground turn in to mud, but Secco has to touch the rock to make it mud. Secco uses this to travel underground and boost the power of his punches. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/0c/Oasis%27_skin.jpg/revision/latest?cb=20190523140244')
                .setTimestamp()
                .setFooter('Oasis')
            message.channel.send(oasis)
}

module.exports.config = {
    name: "oasis",
    description: "",
    usage: "s?oasis",
    accessableby: "Members",
    aliases: ['secco', 'sanctuary']
}
