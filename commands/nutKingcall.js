const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Nut King Call')
                .setURL('https://jojo.fandom.com/wiki/Nut_King_Call')
                .setColor(0xE052FF)
                .setDescription('User: Joshu Higashikata')
                .setThumbnail('https://i.kym-cdn.com/photos/images/original/001/323/541/c23.png')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: D, Range: C, Durability: A, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Nat King Call (singer)'
                }, {
                    name: '**Localized name:**',
                    value: 'Nuts N. Bolts (Eyes of Heaven)'
                }, {
                    name: '**Appearance:**',
                    value: 'Nut King Call is similar in height to Joshu. It has screws in its head and arms. Its eyes are shield-shaped and it has a collar made of nuts and bolts. It appears purple in different media. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Nut King Call has the ability to plant nuts and bolts in targets creating artificial joints. When the nut is removed from the bolt, it dismantles or fastens objects together. ' 
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/47/NutKingCall.png/revision/latest?cb=20160820124221')
                .setTimestamp()
                .setFooter('Nut King Call')
            message.channel.send(stand)
}

module.exports.config = {
    name: "nutKingCall",
    description: "",
    usage: "s?nutKingCall",
    accessableby: "Members",
    aliases: ['ナット・キング・コール', 'joshu']
}
