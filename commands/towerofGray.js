const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const towerofGray = new Discord.MessageEmbed()
                .setTitle('Tower of Gray')
                .setURL('https://jojo.fandom.com/wiki/Tower_of_Gray')
                .setColor(0x52089A)
                .setDescription('User: Gray Fly')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/0f/Grayfly.jpg/revision/latest?cb=20140426012519')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: A, Range: A, Durability: C, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Tower'
                }, {
                    name: '**Appearence:**',
                    value: "Tower of Gray appears as a large, dark stag beetle about the size of one's hand with intricate patterns on its shell.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "A hidden, toothed, secondary jaw can spring out from its mouth, and has enough power to tear apart flesh or pierce it's way through. Its speed can outspeed Hierophant Green's Emerald Splash and even Star Platinum."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/8/80/Tower-of-Gray_AnimeAV.png/revision/latest?cb=20160414185549')
                .setTimestamp()
                .setFooter('Tower of Gray')
            message.channel.send(towerofGray)
}

module.exports.config = {
    name: "towerofGray",
    description: "gives info on towerofGray",
    usage: "s?towerofGray",
    accessableby: "Members",
    aliases: ['towerofGray', 'grayFly']
}