const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tatooYou = new Discord.MessageEmbed()
                .setTitle('Tatoo You!')
                .setURL('https://jojo.fandom.com/wiki/Tatoo_You!')
                .setColor(0xEBEBEB)
                .setDescription('User: Eleven Men')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/00/TXYJ8.png/revision/latest?cb=20150212170942')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: E, Range: C, Durability: B, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tatto You (Album)'
                }, {
                    name: '**Appearance:**',
                    value: 'Tatoo You! is appears as a tattoo that is shared between the Eleven Men. It appears as a small mask with closed eyes and tribal tattoos on the backs and arms of each Men.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Tatoo You! is a Stand shared by the ELeven Men, in which each could use the ability. The ability allows the Eleven Men to phase in to each other\'s bodies as portals. The portal is used to avoid attacks, and multiple men can be in the same spot all at once.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/a3/TatooYoucolor.png/revision/latest/scale-to-width-down/350?cb=20140813211814')
                .setTimestamp()
                .setFooter('Tatoo You!')
            message.channel.send(tatooYou)
}

module.exports.config = {
    name: "tatooYou!",
    description: "",
    usage: "s?tatooYou!",
    accessableby: "Members",
    aliases: ['elevenMen']
}
