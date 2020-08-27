const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const cMoon = new Discord.MessageEmbed()
                .setTitle('C-Moon')
                .setURL('https://jojo.fandom.com/wiki/C-Moon')
                .setColor(0x6BBD3D)
                .setDescription('User: Enrico Pucci')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e6/ENdQb70XUAApqp1.jpeg/revision/latest?cb=20200105042531')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance; Evolved',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Ø, Speed: B, Range: B, Durability: ?, Precision: ?, Development Potential: ?'
                }, {
                    name: '**Music Reference:**',
                    value: 'C-Moon (Song by Wings)'
                }, {
                    name: '**Localized name:**',
                    value: 'Full-Moon'
                }, {
                    name: '**Appearence**',
                    value: "C-Moon is a humanoid stand that is the result of the Green Baby and Whitesnake, fusing. The stand has elements from both stands, red eyes with thick, spiked eyelashes, and Whitesnake's striped Guanine/Δdenine/Cytosine/Thymine pattern on its skin. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "C-Moon possesses the power of gravity, and has a fraction of Made In Heaven's Power."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/e6/C-Moon.png/revision/latest?cb=20190914150927')
                .setTimestamp()
                .setFooter('C-Moon')
            message.channel.send(cMoon)
}

module.exports.config = {
    name: "cMoon",
    description: "gives info on cMoon",
    usage: "s?cMoon",
    accessableby: "Members",
    aliases: ['c-Moon', 'pucci']
}
