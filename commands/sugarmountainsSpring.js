const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sugar = new Discord.MessageEmbed()
                .setTitle('Sugar Mountain')
                .setURL('https://jojo.fandom.com/wiki/Sugar_Mountain_(Stand)')
                .setColor(0xC77B35)
                .setDescription('User: Large Tree')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/ff/SugarMountaincolor.png/revision/latest/top-crop/width/360/height/450?cb=20140813211910')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Sugar Mountain (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Snow Mountain (All-Star Battle)'
                }, {
                    name: '**Appearance:**',
                    value: 'Sugar Mountain is a Stand bound to a large tree with a spring between its roots. The tree has fused human victims at its trunk and has a wooden chest in the middle for the guardian to present gifts.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Sugar Mountain appoints one of its victim as its guardian, which it uses to '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/cf/Sugar_Mountain2.PNG/revision/latest/top-crop/width/220/height/220?cb=20150423175347')
                .setTimestamp()
                .setFooter('Sugar Mountain')
            message.channel.send(sugar)
}

module.exports.config = {
    name: "sugarMountain",
    description: "",
    usage: "s?sugarMountain",
    accessableby: "Members",
    aliases: ['SugarMountain', 'largetree']
}
