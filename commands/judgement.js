const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const judgement = new Discord.MessageEmbed()
                .setTitle('Judgement')
                .setURL('https://jojo.fandom.com/wiki/Judgement')
                .setColor(0xF3E8EF)
                .setDescription('User: Cameo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/fd/Cameo_Anime.png/revision/latest?cb=20160405080557')
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
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: B, Precision: D, Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Judgement'
                }, {
                    name: '**Appearence:**',
                    value: "Judgement appears as a large, mechanical humanoid robot. Barrel-chested, it wears massive shoulder pads and has three fingers of a metallic sheen on its hands.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Judgement is a very tanky stand, which can take hits from both Silver Chariot and Magician's Red and it's user didn't have a single scratch from it. Judgement is able to create a clay construct of a human's wish, but turn it against its victim."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/37/Judgment_c174.png/revision/latest?cb=20140717112806')
                .setTimestamp()
                .setFooter('Judgement')
            message.channel.send(judgement)
}

module.exports.config = {
    name: "judgement",
    description: "gives info on judgement",
    usage: "s?judgement",
    accessableby: "Members",
    aliases: ['judgement', 'cameo']
}