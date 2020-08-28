const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const googooDolls = new Discord.MessageEmbed()
                .setTitle('Goo Goo Dolls')
                .setURL('https://jojo.fandom.com/wiki/Goo_Goo_Dolls')
                .setColor(0x9207EF)
                .setDescription('User: Gwess')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/ba/Guess.png/revision/latest/top-crop/width/720/height/900?cb=20190318012833')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: C, Range: B, Durability: D, Precision: B, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Goo Goo Dolls (Rock Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Cry Cry Dolls (Eyes of Heaven English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Goo Goo Dolls appears as a purple humanoid stand that is very small. It has a cylindrical head, with mechanical joints and a pair of robot arms.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Goo Goo Dolls doesn\'t have any physical strength, but is able to shrink anyone within its range.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/48/GooGooP.png/revision/latest/top-crop/width/360/height/450?cb=20150607130232')
                .setTimestamp()
                .setFooter('Goo Goo Dolls')
            message.channel.send(googooDolls)
}

module.exports.config = {
    name: "gooGooDolls",
    description: "",
    usage: "s?googooDolls",
    accessableby: "Members",
    aliases: ['crycryDolls', 'gewss']
}
