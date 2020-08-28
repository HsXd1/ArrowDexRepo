const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const beachBoy = new Discord.MessageEmbed()
                .setTitle('Beach Boy')
                .setURL('https://jojo.fandom.com/wiki/Beach_Boy')
                .setColor(0x717469)
                .setDescription('User: Pesci')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/a6/Pesci_Anime.png/revision/latest?cb=20190125201225')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: B, Durability: C, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Beach Boys (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Fisher Man'
                }, {
                    name: '**Appearance:**',
                    value: 'Beach Boy appears as a fishing pole with a monsterous skull as the reel.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Beach Boy can phase its line and hook through any objects, and tear through the objects. The string can reflect the damage and is very sensative.' 
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c5/Beach_Boy_Stats.png/revision/latest?cb=20190622115134')
                .setTimestamp()
                .setFooter('Beach Boy')
            message.channel.send(beachBoy)
}

module.exports.config = {
    name: "beachBoy",
    description: "",
    usage: "beachBoy",
    accessableby: "Members",
    aliases: ['BeachBoy', 'FisherMan', 'fisherMan', 'pesci', 'Pesci']
}
