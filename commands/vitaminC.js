const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Vitamin C')
                .setURL('https://jojo.fandom.com/wiki/Vitamin_C')
                .setColor(0x47DE2A)
                .setDescription('User: Tamaki Damo')
                .setThumbnail('https://vignette.wikia.nocookie.net/vsbattles/images/4/41/JJL_Chapter_52_Coloured.png/revision/latest/scale-to-width-down/340?cb=20191122181319')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Song'
                }, {
                    name: '**Appearance:**',
                    value: 'Vitamin C appears as a green and yellow humanoid with many watery hands that leave fingerprints wherever it touches. It spreads bacteria onto others.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Vitamin C's abilites are being able to 'soften' living oragnism tissues, thus melting them into a liquid state."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d1/Vitamin_C.png/revision/latest/scale-to-width-down/347?cb=20180728050643')
                .setTimestamp()
                .setFooter('Vitamin C')
            message.channel.send(stand)
}

module.exports.config = {
    name: "vitaminC",
    description: "",
    usage: "s?vitaminC",
    accessableby: "Members",
    aliases: ['tamaki']
}