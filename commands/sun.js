const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sun = new Discord.MessageEmbed()
                .setTitle('Sun')
                .setURL('https://jojo.fandom.com/wiki/Sun')
                .setColor(0xFF9700)
                .setDescription('User: Arabia Fats')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/73/ArabiaFats.png/revision/latest?cb=20140330133354')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: E, Range: A, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Sun'
                }, {
                    name: '**Appearence:**',
                    value: "Sun appears as a fiery sphere imitating the sun, though believed to be much smaller. It continuously hovers at around 100 meters from the ground.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Sun is able to shoot lasers that are able to pierce flesh and strike with precision. The stand's foremost power is to emit heat and light to raise the surrounding temperatures to 76ºC."
                }, )
                .setImage('https://static.jojowiki.com/images/thumb/d/d8/latest/20191015220014/Sun_Desert.png/401px-Sun_Desert.png')
                .setTimestamp()
                .setFooter('Sun')
            message.channel.send(sun)
}

module.exports.config = {
    name: "sun",
    description: "gives info on sun",
    usage: "s?sun",
    accessableby: "Members",
    aliases: ['sun', 'arabia']
}