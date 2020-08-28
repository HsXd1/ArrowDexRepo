const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const silverChariot = new Discord.MessageEmbed()
                .setTitle('Silver Chariot')
                .setURL('https://jojo.fandom.com/wiki/Silver_Chariot')
                .setColor(0x9da8ab)
                .setDescription('User: Jean Pierre')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/7c/SilverChariot.png/revision/latest?cb=20180609123743')
                .addFields({
                    name: '**Part(s):**',
                    value: '3, 5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C , Speed: A, Range: C, Durability: B, Precision: B, Development Potential: C'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Chariot'
                }, {
                    name: '**Appearence:**',
                    value: "Silver Chariot looks like a thin, robotic humanoid clad in silver, medieval armor, armed with a cup-hilted rapier. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Silver Chariot's abilities include having high precision with it's rapier and is very agile. If chariot takes off its armor, then its speed will increase. "
                }, )
                .setImage('https://i.kym-cdn.com/photos/images/original/001/506/315/5cc.png')
                .setTimestamp()
                .setFooter('Chariot Requiem')
            message.channel.send(silverChariot)
}

module.exports.config = {
    name: "silverChariot",
    description: "gives info on silverChariot",
    usage: "s?silverChariot",
    accessableby: "Members",
    aliases: ['silverChariot', 'polnareff', 'jean']
}