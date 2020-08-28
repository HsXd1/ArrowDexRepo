const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Milagro Man')
                .setURL('https://jojo.fandom.com/wiki/Milagro_Man')
                .setColor(0xCBBDAB)
                .setDescription('User: n/a')
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
                    value: 'Song'
                }, {
                    name: '**Appearance:**',
                    value: 'Milagro man appears as a humanoid. His body is patterned with upside down triangles. His arms, palms, head, and thighs have holes.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Milagro Man's abilities are creating and duplicating money."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/b/be/Milagro_Man.png/revision/latest/scale-to-width-down/308?cb=20180728031918')
                .setTimestamp()
                .setFooter('Milagro Man')
            message.channel.send(stand)
}

module.exports.config = {
    name: "milagroMan",
    description: "",
    usage: "s?milagroMan",
    accessableby: "Members",
    aliases: ['money']
}