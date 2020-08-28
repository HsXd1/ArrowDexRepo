const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const greenDay = new Discord.MessageEmbed()
                .setTitle('Green Day')
                .setURL('https://jojo.fandom.com/wiki/Green_Day')
                .setColor(0x29F211)
                .setDescription('User: Cioccolata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/6f/Cioccolata_Anime_Infobox.png/revision/latest?cb=20190517183928')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: C, Range: A, Durability: A, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Green Day (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Green Tea'
                }, {
                    name: '**Appearance:**',
                    value: 'Green Day appears as a humanoid stand with dark lines over its body and cylinders that constantly release smoke.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Green Day\'s main ability is to produce a mold that rots and destroy\'s flesh which is produced from Green Day\'s tubes. The mold is triggered when the victim lowers their altitude. Green Day can implant its mold in to Cioccolata and allow Ciccolata to dismember himself.'
                }, )
                .setImage('https://i.ytimg.com/vi/eF_E12n8F-4/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Green Day')
            message.channel.send(greenDay)
}

module.exports.config = {
    name: "greenDay",
    description: "",
    usage: "s?greenDay",
    accessableby: "Members",
    aliases: ['greenTea', 'greentea', 'cioccolata']
}
