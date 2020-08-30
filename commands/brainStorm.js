const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const brainStorm = new Discord.MessageEmbed()
                .setTitle('Brain Storm')
                .setURL('https://jojo.fandom.com/wiki/Brain_Storm')
                .setColor(0x9B33FF)
                .setDescription('User: Urban Guerilla')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/58/Urban_infobox.jpg/revision/latest/scale-to-width-down/293?cb=20200514150635')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Colony',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Brainstorm (Hawkwind Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Brain Storm appears as a colony of pointed block-like creatures',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Brain Storm can melt the flesh of anyone touching the stand. Brain Storm causes Hemolysis inside the body. The stand is impossible to remove when inside the body.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/dc/Brain_Storm.png/revision/latest?cb=20190718161837')
                .setTimestamp()
                .setFooter('Brain Storm')
            message.channel.send(brainStorm)
}

module.exports.config = {
    name: "brainStorm",
    description: "",
    usage: "s?brainStorm",
    accessableby: "Members",
    aliases: ['urban']
}
