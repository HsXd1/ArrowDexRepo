const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const hangedMan = new Discord.MessageEmbed()
                .setTitle('Hanged Man')
                .setURL('https://jojo.fandom.com/wiki/Hanged_Man')
                .setColor(0x9D9C85)
                .setDescription('User: J. Geil')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/b7/Jgailanime.png/revision/latest?cb=20140618133246')
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
                    value: 'Destructive Power: C, Speed: A, Range: A, Durability: B, Precision: D, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Hanged Man'
                }, {
                    name: '**Appearence:**',
                    value: "Hanged man reflects a mummy with mechanical elements, making it seem less human. Its body is covered in bandages, with half its brain exposed, along with having two right hands as its master does. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Hanged Man is a stand that is able to produce knives out of its wrists. Hanged Man appears in a reflective surface and attacks their reflection."
                }, )
                .setImage('https://i.ytimg.com/vi/y6yM0xIw2xQ/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Hanged Man')
            message.channel.send(hangedMan)
}

module.exports.config = {
    name: "hangedMan",
    description: "gives info on hangedMan",
    usage: "s?hangedMan",
    accessableby: "Members",
    aliases: ['hangedMan', 'J.Geil', 'jGeil']
}