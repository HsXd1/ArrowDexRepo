const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const skyHigh = new Discord.MessageEmbed()
                .setTitle('Sky High')
                .setURL('https://jojo.fandom.com/wiki/Sky_High')
                .setColor(0xFFFFFF)
                .setDescription('User: Rikiel')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/81/Rikiel.png/revision/latest/top-crop/width/720/height/900?cb=20190324034227')
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
                    value: 'Destructive Power: Null, Speed: Null, Range: B, Durability: C, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Sky High (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Sky High appears as a small beetle that is attached to its user\'s right wrist.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Sky High is an ability that is linked to the confidence of Rikiel. Sy High produces Rods that are transparent and float in the air and move at quick speeds.  Sky High can manipulate the rods to force things on its victims.'
                }, )
                .setImage('https://i.imgur.com/uiEmztC.jpg')
                .setTimestamp()
                .setFooter('Sky High')
            message.channel.send(skyHigh)
}

module.exports.config = {
    name: "skyHigh",
    description: "",
    usage: "s?skyHigh",
    accessableby: "Members",
    aliases: ['skyHigh']
}
