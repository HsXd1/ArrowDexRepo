const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const loveDeluxe = new Discord.MessageEmbed()
                .setTitle('Love Deluxe')
                .setURL('https://jojo.fandom.com/wiki/Love_Deluxe')
                .setColor(0x111010)
                .setDescription('User: Yukako Yamagishi')
                .setThumbnail('https://vignette.wikia.nocookie.net/yandere/images/e/ea/Yukako_AV.png/revision/latest/top-crop/width/360/height/450?cb=20180718062552')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: A, Precision: E, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Love Deluxe (Album by Sade)'
                }, {
                    name: '**Localized name:**',
                    value: 'Love Extra (EOH English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: "Love Deluxe is a stand that is bound to Yukako's hair. If the hair is damaged or cut, Yukako herself won't be damaged, but if damaged significantly, the hair turns completely white.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Love Deluxe can manipulate Yukako's hair, making it precise and a strong weapon."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9b/Love_Deluxe_as_depicted_in_Chase.png/revision/latest?cb=20190408080325')
                .setTimestamp()
                .setFooter('Love Deluxe')
            message.channel.send(loveDeluxe)
}

module.exports.config = {
    name: "loveDeluxe",
    description: "gives info on loveDeluxe",
    usage: "s?loveDeluxe",
    accessableby: "Members",
    aliases: ['yukako', 'loveExtra']
}