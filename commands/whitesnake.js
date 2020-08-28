const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const whitesnake = new Discord.MessageEmbed()
                .setTitle('Whitesnake')
                .setURL('https://jojo.fandom.com/wiki/Whitesnake')
                .setColor(0xFFFFFF)
                .setDescription('User: Enrico Pucci')
                .setThumbnail('https://vignette.wikia.nocookie.net/ninjajojos-bizarre-adventure/images/1/1a/PUCC.png/revision/latest/top-crop/width/360/height/450?cb=20190805170922')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: ?, Speed: D, Range: ?, Durability: A, Precision: ?, Development Potential: ?'
                }, {
                    name: '**Music Reference:**',
                    value: 'Whitesnape (English rockband); Whitesnake (album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Pale Snake'
                }, {
                    name: '**Appearence:**',
                    value: "Whitesnake is a humanoid Stand of a height and build similar to Pucci's. It is sparsely clothed in black, with a mask covering its face to the bottom of where its nose would be, in a piece that rises above its head by half its height in a row of peaks, like a crown.  Its light skin is marked by horizontal stripes of roughly an inch's height, with 'GΔCT' (after the four nucleobases of DNA) repeatedly written on every other stripe.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Whitesnake can produce a white goo-like acid that slowly digests objects, and can create and extract discs that can either contain a person's memory or stand and use them to its will. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/cd/WhiteSnake.png/revision/latest/top-crop/width/300/height/300?cb=20191203211351')
                .setTimestamp()
                .setFooter('Whitesnake')
            message.channel.send(whitesnake)
}

module.exports.config = {
    name: "whitesnake",
    description: "gives info on whitesnake",
    usage: "s?whitesnake",
    accessableby: "Members",
    aliases: ['whitesnake']
}