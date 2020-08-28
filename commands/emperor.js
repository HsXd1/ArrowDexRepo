const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const emperor = new Discord.MessageEmbed()
                .setTitle('Stand Name')
                .setURL('https://jojo.fandom.com/wiki/Emperor')
                .setColor(0x9B9D85)
                .setDescription('User: Hol Horse')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/7b/Holhorseanime.png/revision/latest?cb=20170316071609')
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
                    value: 'Destructive Power: B, Speed: B, Range: B, Durability: C, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Emperor'
                }, {
                    name: '**Appearence:**',
                    value: "Emperor is a Stand in the form of an elaborate, impractical-looking revolver with some futuristic elements. It's just a gun. The stand is a damn gun.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Emperor can be summoned in Hol Horse's hand. Hol Horse is able to manipulate and control the trajectory and direction the bullets are heading that are being shot out of the gun."
                }, )
                .setImage('https://i.imgur.com/1o8k44C.jpg')
                .setTimestamp()
                .setFooter('Emperor')
            message.channel.send(emperor)
}

module.exports.config = {
    name: "emperor",
    description: "gives info on emperor",
    usage: "s?emperor",
    accessableby: "Members",
    aliases: ['emperor', 'holHorse', 'HolHorse']
}