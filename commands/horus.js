const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const horus = new Discord.MessageEmbed()
                .setTitle('Horus')
                .setURL('https://jojo.fandom.com/wiki/Horus')
                .setColor(0x09DDEF)
                .setDescription('User: Pet Shop')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/49/Horus.png/revision/latest?cb=20140914162950')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: D, Durability: C, Precision: E, Development Potential: C'
                },  {
                    name: '**Egyptian God:**',
                    value: 'Horus'
                }, {
                    name: '**Appearence:**',
                    value: "Horus appears as a large skeletal creature with the head of a pterosaur, with multiple limbs making it resemble as a spider.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Horus uses the cryokinesis to generate ice that can be thrown like missles, create large quantities of ice at a rapid rate, and make temperature drop rapidly."
                }, )
                .setImage('https://i.ytimg.com/vi/He9-2GJEcZM/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Horus')
            message.channel.send(horus)
}

module.exports.config = {
    name: "horus",
    description: "gives info on horus",
    usage: "s?horus",
    accessableby: "Members",
    aliases: ['horus', 'petShop', 'PetShop']
}