const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const heyYa = new Discord.MessageEmbed()
                .setTitle('Hey Ya!')
                .setURL('https://jojo.fandom.com/wiki/Hey_Ya!')
                .setColor(0xA66839)
                .setDescription('User: Pocoloco')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/af/Pocoloco.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/268/window-height/268?cb=20150212161118')
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
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: B, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Hey Ya! (Song)'
                }, {
                    name: '**Appearance:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Hey Ya! has no actual combat ability, aside from cheering Pocoloco on. Hey Ya!\'s motivation was so powerful that Pocoloco won the Steel Ball Run in the end.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/59/HeyYacolor.png/revision/latest/top-crop/width/360/height/450?cb=20171023172341')
                .setTimestamp()
                .setFooter('Hey Ya!')
            message.channel.send(heyYa)
}

module.exports.config = {
    name: "heyYa!",
    description: "",
    usage: "s?heyYa!",
    accessableby: "Members",
    aliases: ['HeyYa!', 'Pocoloco', 'pocoloco']
}
