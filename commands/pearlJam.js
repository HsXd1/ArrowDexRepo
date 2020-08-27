const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const pearlJam = new Discord.MessageEmbed()
                .setTitle('Pearl Jam')
                .setURL('https://jojo.fandom.com/wiki/Pearl_Jam')
                .setColor(0xFF8600)
                .setDescription('User: Tonio Trussardi')
                .setThumbnail('https://vignette.wikia.nocookie.net/p__/images/b/b1/Tonio_AV.png/revision/latest/scale-to-width-down/340?cb=20181209184954&path-prefix=protagonist')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Colony',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: C, Range: B, Durability: A, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Pearl Jam (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Pole Jam (Anime); Opal Jam (ASB)'
                }, {
                    name: '**Appearance:**',
                    value: "Pearl Jam appears as a tomato crossed with a pearl onion, with arms and a face.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Pearl Jam is able to cure illnesses through a specific type of dish. Tonio first reads their palm, then creates a dish and infuses Pearl Jam in it. Once inside the body, Pearl Jam then triggers physiological processes to cure them."
                }, )
                .setImage('https://i.ytimg.com/vi/HiMPvcg4wVM/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Pearl Jam')
            message.channel.send(pearlJam)
}

module.exports.config = {
    name: "pearlJam",
    description: "gives info on pearlJam",
    usage: "s?pearlJam",
    accessableby: "Members",
    aliases: ['tonio', 'poleJam']
}