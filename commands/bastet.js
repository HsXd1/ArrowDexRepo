const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const bastet = new Discord.MessageEmbed()
                .setTitle('Bastet')
                .setURL('https://jojo.fandom.com/wiki/Bastet')
                .setColor(0xB2A329)
                .setDescription('User: Mariah')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/36/Mariah_in_the_anime.png/revision/latest?cb=20150216072304')
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
                    value: 'Destructive Power: E, Speed: E, Range: B, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Localized Name:**',
                    value: 'Bast'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Bastet'
                }, {
                    name: '**Appearence:**',
                    value: "Bastet appears as an outlet, specifically an American one. It is portrayed as white with yellow borders in the manga, and appears yellow with green borders in the Anime.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Bastet is able to turn someone magnetic when someone touches the outlet. "
                }, )
                .setImage('https://i.ytimg.com/vi/px0ddVv4zW0/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Bastet')
            message.channel.send(bastet)
}

module.exports.config = {
    name: "bastet",
    description: "gives info on bastet",
    usage: "s?bastet",
    accessableby: "Members",
    aliases: ['Bastet', 'mariah', 'Mariah']
}
