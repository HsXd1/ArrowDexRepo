const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stoneFree = new Discord.MessageEmbed()
                .setTitle('Stone Free')
                .setURL('https://jojo.fandom.com/wiki/Stone_Free')
                .setColor(0x4BC8B1)
                .setDescription('User: Jolyne Kujo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/96/Spur2.jpg/revision/latest?cb=20180808195745')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: C (1-2 m), Durability: A, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Stone Free (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Stone Ocean (Bandai Namco English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Stone Free appears as a humanoid stand with a build and height similar to Jolyne. Stone Free wears a pair of sunglasses on its head, and is portrayed as cyan in media.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Like her father (Jotaro Kujo), Stone Free is powerful and fast, and provides Jolyne with integrated abilities. Stone Free is able to unravel Jolyne\'s body to string, making Jolyne more versatile in battle. Stone Free is able to manipulate the string to a large extent, making her manipulate things to do thinks like: turning Jolyne\'s body inside out, swing from place to place, and slice people with the sharpness of the string.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/75/StonefreeP.png/revision/latest/scale-to-width-down/317?cb=20160417073326')
                .setTimestamp()
                .setFooter('Stone Free')
            message.channel.send(stoneFree)
}

module.exports.config = {
    name: "stoneFree",
    description: "",
    usage: "s?stoneFree",
    accessableby: "Members",
    aliases: ['stoneFree', 'jolyneKujo', 'jolyne', 'stoneOcean']
}
