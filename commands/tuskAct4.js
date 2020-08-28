const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tuskAct4 = new Discord.MessageEmbed()
                .setTitle('Tusk Act 4')
                .setURL('https://jojo.fandom.com/wiki/Tusk')
                .setColor(0xFF00D3)
                .setDescription('User: Johnny Joestar')
                .setThumbnail('https://pm1.narvii.com/6486/fb979f6bc602e5d5aad8164958d15d1df98686d5_00.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '7, 8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Evolved; Close-Range; Range Irrelevant',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: A, Durability: A, Precision: B, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tusk (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tusk ACT4 appears as a humanoid stand with a huge build. It\'s shoulders have large shoulder pads with a star over them and knee pads with stars over them. It\'s body has a curtian draped over it, being connected by string.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tusk ACT4 is the highest evolution of Tusk, and embodies the infinite energy and rotation of the Golden Spin. Tusk ACT4 has many uses with infinite rotation, such as breaking through the dimensional barrier of Love Train. If ACT4 hits or touches someone with its punches, all the individual cells in their body spin forever, making the body distorted and send to another dimension.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/11/TuskAct4color.png/revision/latest?cb=20140813210059')
                .setTimestamp()
                .setFooter('Tusk ACT4')
            message.channel.send(tuskAct4)
}

module.exports.config = {
    name: "tuskAct4",
    description: "",
    usage: "s?tuskAct4",
    accessableby: "Members",
    aliases: ['johnnyJoestar']
}
