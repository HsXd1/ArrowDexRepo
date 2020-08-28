const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const discoamirite = new Discord.MessageEmbed()
                .setTitle('Chocolate Disco')
                .setURL('https://jojo.fandom.com/wiki/Chocolate_Disco')
                .setColor(0xEBB910)
                .setDescription('User: D-I-S-C-O')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/61/Disco.png/revision/latest/top-crop/width/360/height/450?cb=20181022185943')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: C, Range: C, Durability: B, Precision: A, Development Potential: D'
                }, {
                    name: '**Music Reference:**',
                    value: 'Chocolate Disco (Song)'
                }, {
                    name: '**Appearance:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: ''
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/08/ChocolateDiscocolor.png/revision/latest/top-crop/width/360/height/450?cb=20140813212119')
                .setTimestamp()
                .setFooter('Chocolate Disco')
            message.channel.send(discoamirite)
}

module.exports.config = {
    name: "chocolateDisco",
    description: "",
    usage: "s?chocolateDisco",
    accessableby: "Members",
    aliases: ['ChocolateDisco', 'D-I-S-C-O']
}
