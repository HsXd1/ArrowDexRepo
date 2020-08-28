const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const cream = new Discord.MessageEmbed()
                .setTitle('Cream')
                .setURL('https://jojo.fandom.com/wiki/Cream')
                .setColor(0xA0BAE0)
                .setDescription('User: Vanilla Ice')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/cf/V-Ice_Anime.png/revision/latest/scale-to-width-down/350?cb=20170316071914')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: D, Durability: C, Precision: C, Development Potential: D'
                }, {
                    name: '**Music Reference:**',
                    value: 'Cream (band)'
                },  {
                    name: '**Appearence:**',
                    value: "Cream appears as a tall humanoid monster with an excutioners cowl. Portrayed as having a white body and blue cowl, it also has a second form in which Cream could become a sphere of emptieness and devour everything in its path.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Cream is a very dangerous stand, in which Cream could devour itself and become a ball-shaped floating portal, which can erase anything and everything in its path."
                }, )
                .setImage('https://i.ytimg.com/vi/ZyrtnKQnszM/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Cream')
            message.channel.send(cream)
}

module.exports.config = {
    name: "cream",
    description: "gives info on cream",
    usage: "s?cream",
    accessableby: "Members",
    aliases: ['Cream', 'vanillaIce', 'VanillaIce']
}
