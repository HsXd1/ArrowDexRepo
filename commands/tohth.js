const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const tohth = new Discord.MessageEmbed()
                .setTitle('Tohth')
                .setURL('https://jojo.fandom.com/wiki/Tohth')
                .setColor(0xB2A329)
                .setDescription('User: Boingo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/54/Boingoat1.PNG/revision/latest?cb=20150119120225')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound; Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Thoth'
                }, {
                    name: '**Appearence:**',
                    value: "Thoth appears as a comic book, which everyone can see (stand uers and non-stand users alike). ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Thoth's ability is perdiction, being able to perdict the future. The book is filled with blank pages, and over time, the pages will fill up, predicting events very accurate but come with misleading information."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/66/Tohth_stats.png/revision/latest?cb=20160405101944')
                .setTimestamp()
                .setFooter('Tohth')
            message.channel.send(tohth)
}

module.exports.config = {
    name: "tohth",
    description: "gives info on tohth",
    usage: "s?tohth",
    accessableby: "Members",
    aliases: ['tohth', 'boingo']
}