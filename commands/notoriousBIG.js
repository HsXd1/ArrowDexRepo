const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const not = new Discord.MessageEmbed()
                .setTitle('Notorious B.I.G')
                .setURL('https://jojo.fandom.com/wiki/Notorious_B.I.G')
                .setColor(0x145EE0)
                .setDescription('User: Carne')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f7/CarneInfoboxAnime.png/revision/latest?cb=20190330103401')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: ∞, Range: ∞, Durability: ∞, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Notorious B.I.G (Rapper)'
                }, {
                    name: '**Localized name:**',
                    value: 'Notorious Chase'
                }, {
                    name: '**Appearance:**',
                    value: 'Notorious B.I.G appears humanoid in its brief appearence while its user was alive. It wears a striped half-mask on its head, and when its user died it became a body of blobby red flesh.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Notorious B.I.G can only be activated once Carne dies, and creates abody out of eating others\' flesh. It is able to control someone\'s body without them knowing, and detect the fastest moving object to attack. '
                }, )
                .setImage('https://i.ytimg.com/vi/qvk0zrIqm4w/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Notorious B.I.G')
            message.channel.send(not)
}

module.exports.config = {
    name: "notoriousBIG",
    description: "",
    usage: "s?notoriousBIG",
    accessableby: "Members",
    aliases: ['notoriousChase', 'carne']
}
