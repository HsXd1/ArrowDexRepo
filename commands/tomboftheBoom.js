const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const boom = new Discord.MessageEmbed()
                .setTitle('Tomb of the Boom')
                .setURL('https://jojo.fandom.com/wiki/Tomb_of_the_Boom')
                .setColor(0x9012E4)
                .setDescription('User: Boom Boom Family')
                .setThumbnail('')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: , Speed: , Range: , Durability: , Precision: , Development Potential: '
                }, {
                    name: '**Music Reference:**',
                    value: 'Tomb of the Boom (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Tomb of the Noise (Eyes of Heaven)'
                }, {
                    name: '**Appearance:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tomb of the Boom is a shared stand between the Boom family.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c8/SBR_C19_P12-13_Tomb_of_the_Boom_1.png/revision/latest?cb=20160209011537')
                .setTimestamp()
                .setFooter('Tomb of the Boom')
            message.channel.send(boom)
}

module.exports.config = {
    name: "tombOfTheBoom",
    description: "",
    usage: "s?tomboftheBoom",
    accessableby: "Members",
    aliases: ['TombOfTheBoom', 'tombOfTheBoom', 'TomboftheBoom']
}
