const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const echoesAct2 = new Discord.MessageEmbed()
                .setTitle('Echoes Act 2')
                .setURL('https://jojo.fandom.com/wiki/Echoes')
                .setColor(0x27FF00)
                .setDescription('User: Koichi Hirose')
                .setThumbnail('https://i.kym-cdn.com/entries/icons/facebook/000/020/274/tumblr_o5bwsfIVeZ1qzzsolo1_400.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4'
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Ranged; Evolved'
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: D, Range: B, Durability: B, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Echoes by Pink Floyd'
                }, {
                    name: '**Localized name:**',
                    value: 'Reverb Act 2'
                }, {
                    name: '**Appearence:**',
                    value: 'ACT2 is now humanoid, though smaller than ACT1. It is fully clad in a shell-like armor decorated with metallic striped protrusions at the crotch and other places, the most prominent piece being a large high collar fused with shoulder weights with "S2" written on the back which covers the back of the head and the shoulders. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "ACT2 is still as weak as act 1, but has increased sound abilities of ACT1.  "
                }, )
                .setImage('https://i.ytimg.com/vi/iBd7htu_g0g/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Echoes Act 2')
            message.channel.send(echoesAct2)
}

module.exports.config = {
    name: "echoesAct2",
    description: "gives info on echoesAct2",
    usage: "s?echoesAct2",
    accessableby: "Members",
    aliases: ['EchoesAct2']
}