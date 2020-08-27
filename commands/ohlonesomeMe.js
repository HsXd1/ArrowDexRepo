const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const lone = new Discord.MessageEmbed()
                .setTitle('Oh! Lonesome Me')
                .setURL('https://jojo.fandom.com/wiki/Oh!_Lonesome_Me')
                .setColor(0xDD973F)
                .setDescription('User: Mountain Tim')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/66/MountainTim.png/revision/latest?cb=20150212154904')
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
                    value: 'Destructive Power: E, Speed: C, Range: C, Durability: B, Precision: C, Development Potential: D'
                }, {
                    name: '**Music Reference:**',
                    value: 'Oh, Lonesome Me (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Oh! Lonesome Me is integrated within Mountain Tim, allowing Mountain Tim to seperate himself along a rope.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Oh! Lonesome Me allows Mountain Tim to separate himself and others\' bodies in to segments in which Mountain Tim can slide along a rope and grab small objects from a far.  '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/e6/OhLonesomeMecolor.png/revision/latest?cb=20140813210700')
                .setTimestamp()
                .setFooter('Oh! Lonesome Me')
            message.channel.send(lone)
}

module.exports.config = {
    name: "oh!LonesomeMe",
    description: "",
    usage: "s?ohlonesomeMe",
    accessableby: "Members",
    aliases: ['OhLonesomeMe', 'ohLonesomeMe', 'Oh!lonesomeMe', 'mountainTim']
}
