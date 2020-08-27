const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const diver = new Discord.MessageEmbed()
                .setTitle('Diver Down')
                .setURL('https://jojo.fandom.com/wiki/Diver_Down')
                .setColor(0x00FFE4)
                .setDescription('User: Narciso Anasui')
                .setThumbnail('https://static.jojowiki.com/images/thumb/9/9a/latest/20191015213314/Narciso_Anasui_Infobox_Manga.jpg/270px-Narciso_Anasui_Infobox_Manga.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: E, Durability: C, Precision: B, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Diver Down (Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Diver Drive (Bandai Namco English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Diver Down appears as a humanoid person wearing scuba gear, being portrayed as blue and green.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Diver Down is able to store its strikes on surfaces. When the strike hits a surface, the impact is stored in the object, and when Anasui wills it, the energy is released outside of the object. Diver Down\'s signature ability is to "dive" inside an object or stand, and manipulate their internal structure.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/ee/DiveP.png/revision/latest/top-crop/width/360/height/450?cb=20170629083510')
                .setTimestamp()
                .setFooter('Diver Down')
            message.channel.send(diver)
}

module.exports.config = {
    name: "diverDown",
    description: "",
    usage: "?diverDown",
    accessableby: "Members",
    aliases: ['anasui', 'DiverDown']
}
