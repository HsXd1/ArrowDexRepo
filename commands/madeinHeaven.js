const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const madeinHeaven = new Discord.MessageEmbed()
                .setTitle('Made In Heaven')
                .setURL('https://jojo.fandom.com/wiki/Made_in_Heaven')
                .setColor(0xF0F0E5)
                .setDescription('User: Enrico Pucci')
                .setThumbnail('https://vignette.wikia.nocookie.net/dcix/images/a/aa/Pucci_original.png/revision/latest/top-crop/width/360/height/450?cb=20170819222949')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Closed-Range Stand; Evolved Stand; Range Irrelevant Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: ∞, Range: C, Durability: A, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Made in Heaven (Freddie Mercury song and Queen Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Maiden Heaven'
                }, {
                    name: '**Appearence:**',
                    value: "Made in Heaven takes the appearance of a thin, masculine humanoid fused at its waist to the front end of a horse (resembling a two-headed, two-legged centaur). ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Made In Heven's ability is to speed up the flow of time. When activated, time flows faster and faster in the whole universe, with nothing being able to catch up with the acceleration. As time continues to accelerate, the unvierse will completely reset, to a time chosen by Pucci. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/fb/Made_in_Heaven_2.png/revision/latest?cb=20191205005203')
                .setTimestamp()
                .setFooter('Made In Heaven')
            message.channel.send(madeinHeaven)
}

module.exports.config = {
    name: "madeInHeaven",
    description: "gives info on madeinHeaven",
    usage: "s?madeinHeaven",
    accessableby: "Members",
    aliases: ['madeinHeaven', 'heavenPucci']
}