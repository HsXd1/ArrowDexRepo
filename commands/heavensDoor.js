const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const heavensDoor = new Discord.MessageEmbed()
                .setTitle("Heaven's Door")
                .setURL('https://jojo.fandom.com/wiki/Heaven%27s_Door')
                .setColor(0xEAE0E6)
                .setDescription('User: Name for Stand User')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/4f/Rohan_anime_AV.png/revision/latest/scale-to-width-down/340?cb=20171212082327')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: B, Range: B, Durability: B, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: "Knockin' on Heaven's Door (Song by Bob Dylan)"
                }, {
                    name: '**Appearence:**',
                    value: "Heaven's Door appears as a similar small boy to Pink Dark Boy, wearing a long overcoat and a bowtie. Heaven's Door is usually portrayed as white with golden outlines.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Heaven's Door's basic ability is to turn people in to books, in which Rohan is able to read the person's thoughts, alter/remove their memories and write hypnotic-like commands."
                }, )
                .setImage('https://i.ytimg.com/vi/pbCnOrNETxM/maxresdefault.jpg')
                .setTimestamp()
                .setFooter("Heaven's Door")
            message.channel.send(heavensDoor)
}

module.exports.config = {
    name: "heavensDoor",
    description: "gives info on heavensDoor",
    usage: "S?heavensDoor",
    accessableby: "Members",
    aliases: ['heavensDoor', 'rohan']
}