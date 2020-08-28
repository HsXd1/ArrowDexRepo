const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('')
                .setURL('')
                .setColor()
                .setDescription('User: ')
                .setThumbnail('')
                .addFields({
                    name: '**Part(s):**',
                    value: '',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: , Speed: , Range: , Durability: , Precision: , Development Potential: '
                }, {
                    name: '**Music Reference:**',
                    value: ''
                }, {
                    name: '**Localized name:**',
                    value: ''
                }, {
                    name: '**Appearance:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: ''
                }, )
                .setImage('')
                .setTimestamp()
                .setFooter('')
            message.channel.send(stand)
}

module.exports.config = {
    name: "",
    description: "",
    usage: "s?",
    accessableby: "Members",
    aliases: ['']
}
