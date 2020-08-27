const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const planetWaves = new Discord.MessageEmbed()
                .setTitle('Planet Waves')
                .setURL('https://jojo.fandom.com/wiki/Planet_Waves')
                .setColor(0xEF9007)
                .setDescription('User: Viviano Westwood')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/d9/Westwood.PNG/revision/latest?cb=20190317035416')
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
                    value: 'Destructive Power: A, Speed: B, Range: A, Durability: A, Precision: A, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Planet Waves (Album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Planet Waves appears humanoid, with skin that appears as muscle fiber, and is red in the manga.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Planet Waves attracts meteoroids toward the user, which heat up to 3000° C when crashing down. The meteors crash at a speed enough to rip out chunks of the a person\'s body. If the user is near the meteor, the meteor will disintegrate. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/90/PlanetP.png/revision/latest/top-crop/width/360/height/450?cb=20150607133118')
                .setTimestamp()
                .setFooter('Planet Waves')
            message.channel.send(planetWaves)
}

module.exports.config = {
    name: "planetWaves",
    description: "",
    usage: "s?planetWaves",
    accessableby: "Members",
    aliases: ['viviano']
}
