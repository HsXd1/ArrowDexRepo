const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tuskAct3 = new Discord.MessageEmbed()
                .setTitle('Tusk ACT3')
                .setURL('https://jojo.fandom.com/wiki/Tusk')
                .setColor(0xFF00D3)
                .setDescription('User: Johnny Joestar')
                .setThumbnail('https://static.jojowiki.com/images/thumb/f/ff/latest/20191015215943/Johnny_Joestar_Infobox_Manga.jpg/270px-Johnny_Joestar_Infobox_Manga.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Evolved; Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: D, Range: B, Durability: A, Precision: B, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tusk (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tusk ACT3 appears as more humanoid than the other 2 ACTs before it. It has sharp spikes coming out of its body, and stars on it\'s shoulders.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tusk ACT3 possesses the abilities of ACT2. but now allows Johnny to suck his body in to the hole it creates with its fingernails. Johnny can use this to reposition himself and attack from unexpected angles.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/aa/TuskAct3color.png/revision/latest?cb=20140813205954')
                .setTimestamp()
                .setFooter('Tusk ACT3')
            message.channel.send(tuskAct3)
}

module.exports.config = {
    name: "tuskAct3",
    description: "",
    usage: "s?tuskAct3",
    accessableby: "Members",
    aliases: ['tuskAct3']
}
