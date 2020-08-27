const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const ballBreaker = new Discord.MessageEmbed()
                .setTitle('Ball Breaker')
                .setURL('https://jojo.fandom.com/wiki/Ball_Breaker')
                .setColor(0x2FFF00)
                .setDescription('User: Spin (Steel Ball), Used by Gyro Zeppeli')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/d9/Steel_Ball.png/revision/latest/top-crop/width/360/height/450?cb=20160601083111')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: D, Durability: B, Precision: C, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Ballbreaker (Song/Album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Ball Breaker appears as small as the Steel Ball itself, with several eyes on its head and multiple circles on its body.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Ball Breaker has the power of the Golden Spin when the steel ball is thrown. Ball Breaker was able to bypass the dimensional wall of D4C - Love Train, and if Ball Breaker uses its senescence to greatly age a human and stand.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/52/BallBreakercolor.png/revision/latest?cb=20140813205719')
                .setTimestamp()
                .setFooter('Ball Breaker')
            message.channel.send(ballBreaker)
}

module.exports.config = {
    name: "ballBreaker",
    description: "",
    usage: "s?ballBreaker",
    accessableby: "Members",
    aliases: ['BallBreaker', 'gyro', 'Gyro']
}
