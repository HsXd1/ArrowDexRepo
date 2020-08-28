const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const civilWar = new Discord.MessageEmbed()
                .setTitle('Civil War')
                .setURL('https://jojo.fandom.com/wiki/Civil_War')
                .setColor(0xEB3110)
                .setDescription('User: Axl RO')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/02/Axl_ro_color_v15_pg055.png/revision/latest/top-crop/width/360/height/450?cb=20140329233932')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: C, Range: C, Durability: B, Precision: C, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Civil War (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Civil War appears as a humanoid figure.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Civil War uses its victim\'s guilt as a weapon againist their victim.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/ef/CivilWarcolor.png/revision/latest/top-crop/width/360/height/450?cb=20140813212002')
                .setTimestamp()
                .setFooter('Civil War')
            message.channel.send(civilWar)
}

module.exports.config = {
    name: "civilWar",
    description: "",
    usage: "s?civilWar",
    accessableby: "Members",
    aliases: ['CivilWar', 'AxlRO']
}
