const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tubularbells = new Discord.MessageEmbed()
                .setTitle('Tubular Bells')
                .setURL('https://jojo.fandom.com/wiki/Tubular_Bells')
                .setColor(0xEB5410)
                .setDescription('User: Mike O.')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/b8/Mike_O.png/revision/latest/top-crop/width/360/height/450?cb=20170221013622')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: D, Range: D, Durability: A, Precision: E, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tubular Bells (Song/Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Tubular (All-Star Battle)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tubular Bells appears as any various shape Mike wants it to be, but mostly takes the form of balloon animals',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tubular Bells allows Mike O. to inflate metal objects into ballons and model it to his will. The balloons can be remotely molded and act on Mike O.\'s commands.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/44/TubularBellscolor.png/revision/latest/top-crop/width/360/height/450?cb=20140813211330')
                .setTimestamp()
                .setFooter('Tubular Bells')
            message.channel.send(tubularbells)
}

module.exports.config = {
    name: "tubularBells",
    description: "",
    usage: "s?tubularBells",
    accessableby: "Members",
    aliases: ['TubularBells', 'mike']
}
