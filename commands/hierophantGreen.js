const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const hierophantGreen = new Discord.MessageEmbed()
                .setTitle('Hierophant Green')
                .setURL('https://jojo.fandom.com/wiki/Hierophant_Green')
                .setColor(0x089A1D)
                .setDescription('User: Noriaki Kakyoin')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/75/NoriakiKakyoin.png/revision/latest?cb=20170316072208')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: A, Durability: B, Precision: C, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Hierophant'
                }, {
                    name: '**Appearence:**',
                    value: "Hierophant Green is an athletic humanoid with robotic features, such as the eyes and legs, but its true form is that of a long web of tentacles. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Hierophant Green has many abilities, such as controlling people, uncoil itself and could make a web of tentacles, and the emerald splash, which nobody could just deflect."
                }, )
                .setImage('https://i.imgur.com/GEOwePh.png')
                .setTimestamp()
                .setFooter('Hierophant Green')
            message.channel.send(hierophantGreen)
}

module.exports.config = {
    name: "hierophantGreen",
    description: "gives info on hierophantGreen",
    usage: "-hierophantGreen",
    accessableby: "Members",
    aliases: ['HierophantGreen', 'kakyoin', 'noriaki']
}