const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Awaking III Leaves')
                .setURL('https://jojo.fandom.com/wiki/Awaking_III_Leaves')
                .setColor(0x8E8E8E)
                .setDescription('User: Mitsuba Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/67/MitsubaPerf.png/revision/latest?cb=20191014214253')
                .addFields({
                    name: '**Part(s):**',
                    value: '9',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Appearance:**',
                    value: 'Awaking III Leaves appears as a hooded figure, and its legs and both its eyes are bisible. On each knee, there are three leaves on them. It also has some leaves and an arrow on its ankles.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Awaking III Leaves ability is manipulating vector space. It uses arrows to move energy in the direction that they are facing. It can multiply that force my stacking the arrows too.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/90/Awaking_III_Leaves.png/revision/latest/scale-to-width-down/337?cb=20190601191930')
                .setTimestamp()
                .setFooter('Awaking III Leaves')
            message.channel.send(stand)
}

module.exports.config = {
    name: "awakingIIILeaves",
    description: "",
    usage: "s?awakingIIILeaves",
    accessableby: "Members",
    aliases: ['アウェイキング・Ⅲリーブス', 'awaking3Leaves', 'mitusbaHigashikata']
}