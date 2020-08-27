const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const khnum = new Discord.MessageEmbed()
                .setTitle('Khunm')
                .setURL('https://jojo.fandom.com/wiki/Khnum')
                .setColor(0x32FF74)
                .setDescription('User: Oingo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/45/Oingoat1.PNG/revision/latest/scale-to-width-down/340?cb=20141221102626')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Khnum'
                }, {
                    name: '**Abilities:**',
                    value: "Khnum is able to transfigure Oingo's appearence and body, even able to change his hair."
                }, )
                .setImage('https://static.jojowiki.com/images/thumb/8/89/latest/20191015213636/Khnum_Anime.png/400px-Khnum_Anime.png')
                .setTimestamp()
                .setFooter('Khnum')
            message.channel.send(khnum)
}

module.exports.config = {
    name: "khnum",
    description: "gives info on khnum",
    usage: "s?khnum",
    accessableby: "Members",
    aliases: ['khnum']
}