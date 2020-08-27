const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Doctor Wu')
                .setURL('https://jojo.fandom.com/wiki/Doctor_Wu')
                .setColor(0x8E8E8E)
                .setDescription('User: Wu Tomoki')
                .setThumbnail('https://i.redd.it/23fb7x4vxqy41.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Doctor Wu (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Doctor Wu manifests itself within its user, therefore it has no real appearance.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Doctor Wu has the ability to turn into particles allowing him to bypass the defense of enemies while making himself diffcult to attack. He can also transform into small controllable stones. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d1/Doctor_Wu_Infobox.png/revision/latest/scale-to-width-down/350?cb=20181116023722')
                .setTimestamp()
                .setFooter('Doctor Wu')
            message.channel.send(stand)
}

module.exports.config = {
    name: "doctorWu",
    description: "",
    usage: "s?doctorWu",
    accessableby: "Members",
    aliases: ['ドクター・ウー', 'wu']
}