const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Love Love Deluxe')
                .setURL('https://jojo.fandom.com/wiki/Love_Love_Deluxe')
                .setColor(0xEA8C4C)
                .setDescription('User: Karera Sakunami')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/b6/Karera_infobox.jpeg/revision/latest?cb=20181023131056')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Appearance:**',
                    value: 'Love Love Deluxe appears as a humanoid without many features. It also has a feminine appearance with mechanical joins at the waist, hips, shoulders, elbows, and hands. Most of its body is covered in fur and it has an afro the same color as the fur.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Love Love Deluxe's abilities are controlling people's hair in a 80 meter radius. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/fc/Love_Love_Deluxe.png/revision/latest/scale-to-width-down/265?cb=20180727000930')
                .setTimestamp()
                .setFooter('Love Love Deluxe')
            message.channel.send(stand)
}

module.exports.config = {
    name: "loveLoveDeluxe",
    description: "",
    usage: "s?loveLoveDeluxe",
    accessableby: "Members",
    aliases: ['karera']
}