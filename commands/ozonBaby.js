const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Ozon Baby')
                .setURL('https://jojo.fandom.com/wiki/Ozon_Baby')
                .setColor(0x8E8E8E)
                .setDescription('User: Poor Tom')
                .setThumbnail('https://static.jojowiki.com/images/thumb/b/bc/latest/20191015215920/Poor_Tom_Infobox_Manga.png/270px-Poor_Tom_Infobox_Manga.png')
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
                    value: 'Ozone Baby (Led Zeppelin song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Before Ozon Baby is activited, it appears as a near-exact replica of the LEGO Architecture White House 21006. Post-activation, it appears as humanoid. Ozon Babys legs are wheels and its top half of its head is covered by a bag-like helmet with several spikes jutting out.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Ozon Baby has the ability to cause atmospheric pressure anomalies. Hollow objects will collapse and living oraginasms begin to experience mild depressurization sickness leading to pain in the ears and nosebleeds. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/2e/OzoneBabyTrueForm.png/revision/latest?cb=20171223043641')
                .setTimestamp()
                .setFooter('Ozon Baby')
            message.channel.send(stand)
}

module.exports.config = {
    name: "ozonBaby",
    description: "",
    usage: "s?ozonBaby",
    accessableby: "Members",
    aliases: ['オゾン・ベイビー', 'poorTom']
}