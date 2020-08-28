const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const yellowTemperance = new Discord.MessageEmbed()
                .setTitle('Yellow Temperance')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setColor(0xC3BB39)
                .setDescription('User: Rubber Soul')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/46/YellowTemperance.png/revision/latest?cb=20150614131542')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: C, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Temperance'
                }, {
                    name: '**Appearence:**',
                    value: "Yellow Temperance appears as an amorphous, with no facial features, bound to its user. The stand itself is portrayed as a yellow blob.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Yellow Temperance's primary power is to assimilate organic matter, using the matter to grow larger and stronger. Yellow Temperance is able to replicate Rubber Soul's apperance and physical Imperviousness. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/68/YellowTemperance_A09.png/revision/latest?cb=20140817054803')
                .setTimestamp()
                .setFooter('Yellow Temperance')
            message.channel.send(yellowTemperance)
}

module.exports.config = {
    name: "yellowTemperance",
    description: "gives info on yellowTemperance",
    usage: "-yellowTemperance",
    accessableby: "Members",
    aliases: ['yellowTemperance', 'rubberSoul', 'rubber']
}