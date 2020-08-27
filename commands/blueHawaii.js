const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Blue Hawaii')
                .setURL('https://jojo.fandom.com/wiki/Doggy_Style')
                .setColor(0x2496E2)
                .setDescription('User: Dolomite')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/0d/Dolomite_First_Appearance.png/revision/latest?cb=20180727021743')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Album'
                }, {
                    name: '**Appearance:**',
                    value: 'Blue Hawaii appears as a mostly humanoid being. It does not have a head and mechainal arms that are small. It has an oversized heart-shaped torso and is blue and grey.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Blue Hawaii's abilities are controling people through touch."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/21/Blue_Hawaii.png/revision/latest?cb=20180727022021')
                .setTimestamp()
                .setFooter('Blue Hawaii')
            message.channel.send(stand)
}

module.exports.config = {
    name: "blueHawaii",
    description: "",
    usage: "s?blueHawaii",
    accessableby: "Members",
    aliases: ['dolomite']
}