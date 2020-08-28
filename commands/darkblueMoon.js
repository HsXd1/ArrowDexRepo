const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const darkblueMoon = new Discord.MessageEmbed()
                .setTitle('Dark Blue Moon')
                .setURL('https://jojo.fandom.com/wiki/Dark_Blue_Moon')
                .setColor(0x33A6FF)
                .setDescription('User: Imposter Captain Tennille')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c0/CaptainDragonPic.png/revision/latest?cb=20190830190317')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: C, Durability: B, Precision: C, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Moon'
                }, {
                    name: '**Appearence:**',
                    value: "Dark Blue Moon is a humanoid Stand with aquatic features. It manifests itself as some sort of merfolk-like entity with a flat head, four eyes, a large dorsal fin lining most of its back, additional fins on its legs, and webbed hands and feet. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Dark Blue Moon is able to use its scales as projectiles and is capable to create barnacles that latch on to people and can use those barnacles to control whatever they are attached to."
                }, )
                .setImage('https://i.imgur.com/fcIOkUl.jpg')
                .setTimestamp()
                .setFooter('Dark Blue Moon')
            message.channel.send(darkblueMoon)
}

module.exports.config = {
    name: "darkBlueMoon",
    description: "gives info on darkblueMoon",
    usage: "-darkblueMoon",
    accessableby: "Members",
    aliases: ['DarkblueMoon', 'Tennile']
}