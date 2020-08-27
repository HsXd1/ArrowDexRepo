const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('bornThisWay')
                .setURL('https://jojo.fandom.com/wiki/Born_This_Way')
                .setColor(0x3F3837)
                .setDescription('User: Kyo Ninimura')
                .setThumbnail('https://i.pinimg.com/originals/ac/2c/cc/ac2ccc936ee950d0694202bb3c737b0b.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Born This Way (Lady Gaga song/album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Born This Way appears as a humanoid rider and motorcycle. It is covered in black motorcycle clothing and a visored helmet. Without its helmet, it has a robotic head and face and a hunched back.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Born This Way has constant power and his bike is quite durable which he uses to ram into people."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/50/Bornthisway.png/revision/latest/scale-to-width-down/350?cb=20160821082800')
                .setTimestamp()
                .setFooter('Born This Way')
            message.channel.send(stand)
}

module.exports.config = {
    name: "bornThisWay",
    description: "",
    usage: "s?bornThisWay",
    accessableby: "Members",
    aliases: ['kyo']
}