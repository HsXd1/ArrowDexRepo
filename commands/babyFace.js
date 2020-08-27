const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const babyFace = new Discord.MessageEmbed()
                .setTitle('Baby Face')
                .setURL('https://jojo.fandom.com/wiki/Baby_Face')
                .setColor(0xA89CC9)
                .setDescription('User: Melone')
                .setThumbnail('https://i.ytimg.com/vi/sLuOl9InpIY/maxresdefault.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: A, Durability: B, Precision: Depending on Maturity, Development Potential: Depending on Education '
                }, {
                    name: '**Music Reference:**',
                    value: 'Kenneth "Babyface" Edmonds (Musician)'
                }, {
                    name: '**Localized name:**',
                    value: 'Babyhead'
                }, {
                    name: '**Appearance:**',
                    value: 'Baby Face takes the form of a laptop with a track ball where Melone inserts sampled DNA in. It\'s appearence changed depending on how mature it is.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Baby Face is able to generate a secondary stand by the DNA from a woman. The secondary stand is capable of breaking matter apart into cubes, which the cubes can be extracted from a target, in which Baby face is capable of rearranging them. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/8/82/Babyface_anime_stats.png/revision/latest?cb=20190622115350')
                .setTimestamp()
                .setFooter('Baby Face')
            message.channel.send(babyFace)
}

module.exports.config = {
    name: "babyFace",
    description: "",
    usage: "s?babyFace",
    accessableby: "Members",
    aliases: ['melone', 'Babyhead', 'babyhead']
}
