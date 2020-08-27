const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const echoesAct1 = new Discord.MessageEmbed()
                .setTitle('Echoes Act 1')
                .setURL('https://jojo.fandom.com/wiki/Echoes')
                .setColor(0x27FF00)
                .setDescription('User: Koichi Hirose')
                .setThumbnail('https://i.kym-cdn.com/entries/icons/facebook/000/020/274/tumblr_o5bwsfIVeZ1qzzsolo1_400.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4, 5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-ranged; Evolved',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: B, Durability: B, Precision: c, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Echoes by Pink Floyd'
                }, {
                    name: '**Localized name:**',
                    value: 'Reverb Act 1'
                }, {
                    name: '**Appearence:**',
                    value: 'ACT1 takes the appearance of a three-section larvae-like creature. Its oversized first section serves as a head and two small shelled arms are attached to it. The head is covered with a shell on top of which a spike is visible, and the face is nearly entirely covered by metallic blinkers, only leaving a small beak visible.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Echoes Act 1 is a very slow and weak stand, but has the longest range of all ACTs. ACT1 is able to generate sound through writing words on anything, which the sound is being transmitted through the person."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/13/EchoesAct1_Key_Art.png/revision/latest/top-crop/width/220/height/220?cb=20190712192937')
                .setTimestamp()
                .setFooter('Echoes Act 1')
            message.channel.send(echoesAct1)
}

module.exports.config = {
    name: "echoesAct1",
    description: "gives info on echoesAct1",
    usage: "s?echoesAct1",
    accessableby: "Members",
    aliases: ['EchoesAct1']
}