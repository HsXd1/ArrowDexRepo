const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const metallica = new Discord.MessageEmbed()
                .setTitle('Metallica')
                .setURL('https://jojo.fandom.com/wiki/Metallica')
                .setColor(0x788377)
                .setDescription('User: Risotto Nero')
                .setThumbnail('https://vignette.wikia.nocookie.net/villains/images/9/9f/Anime_Risotto_Nero.png/revision/latest/top-crop/width/360/height/450?cb=20191220203018')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Colony',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: C, Durability: A, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Metallica (Band and Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Metallic'
                }, {
                    name: '**Appearance:**',
                    value: 'Metallica appears as small silver metallic beings with stiches across their bodies.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Metallica has the ability of Iron Manipulation, in which it can manipulate the iron in the air and ground. Risotto can use this to turn the iron of someone\'s blood info sharp objects. Risotto can also use this to turn invisible.'
                }, )
                .setImage('https://i.ytimg.com/vi/cY2abDNAyto/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Metallica')
            message.channel.send(metallica)
}

module.exports.config = {
    name: "metallica",
    description: "",
    usage: "s?metallica",
    accessableby: "Members",
    aliases: ['risotto']
}
