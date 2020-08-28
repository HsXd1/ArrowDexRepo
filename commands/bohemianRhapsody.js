const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const rhapsody = new Discord.MessageEmbed()
                .setTitle('Bohemian Rhapsody')
                .setURL('https://jojo.fandom.com/wiki/Bohemian_Rhapsody')
                .setColor(0xDFD111)
                .setDescription('User: Ungalo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/47/UngaroChar.png/revision/latest?cb=20140827153033')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: Null, Range: ∞, Durability: A, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Bohemian Rhapsody (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Bohemian Rhapsody manifests as the fictional character it depicts.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Bohemian Rhapsody is able to bring fictional characters to life in the media containing them. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9f/Bohemian_Rhapsody.png/revision/latest/top-crop/width/360/height/360?cb=20140828032019')
                .setTimestamp()
                .setFooter('Bohemian Rhapsody')
            message.channel.send(rhapsody)
}

module.exports.config = {
    name: "bohemianRhapsody",
    description: "",
    usage: "s?bohemianRhapsody",
    accessableby: "Members",
    aliases: ['rhapsody', 'BohemianRhapsody', 'ungalo', 'Ungalo']
}
