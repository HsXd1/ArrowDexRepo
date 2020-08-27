const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Doggy Style')
                .setURL('https://jojo.fandom.com/wiki/Doggy_Style')
                .setColor(0x67CEEA)
                .setDescription('User: Rai Mamezuku')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/31/Rai_infobox.jpg/revision/latest?cb=20200514150713')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Doggy Style (Snoop Dog Album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Doggy Stle appears as a cyan, silver, and pink humanoid with an elongated and featureless face. He has six tiny eyes and a heart-shaped torso. His legs are also very skinny.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Doggy Style's ability is to unravel and reveal appendages into 'wire rope' which he can control. His full capabilities are still unknown."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9a/Doggy_Style.png/revision/latest?cb=20190718171753')
                .setTimestamp()
                .setFooter('Doggy Style')
            message.channel.send(stand)
}

module.exports.config = {
    name: "doggyStyle",
    description: "",
    usage: "s?doggyStyle",
    accessableby: "Members",
    aliases: ['rai', 'plantappraiser']
}