const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const wired = new Discord.MessageEmbed()
                .setTitle('Wired')
                .setURL('https://jojo.fandom.com/wiki/Wired')
                .setColor(0xC78635)
                .setDescription('User: Pork Pie Hat Kid')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/1d/PPHK.png/revision/latest?cb=20150212165222')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: '',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: , Speed: , Range: , Durability: , Precision: , Development Potential: '
                }, {
                    name: '**Music Reference:**',
                    value: ''
                }, {
                    name: '**Localized name:**',
                    value: ''
                }, {
                    name: '**Appearance:**',
                    value: 'Wired appears as 2 hooked cables inside the Pork Pie Hat Kid\'s Mouth.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Wired has tongue hooks which are strong enough to lift a full-grown man and carry a horse. The hooks are also fast enough to pull anything faster than someone can react.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d5/Wired_snake.png/revision/latest?cb=20190430102018')
                .setTimestamp()
                .setFooter('Wired')
            message.channel.send(wired)
}

module.exports.config = {
    name: "wired",
    description: "",
    usage: "s?wired",
    accessableby: "Members",
    aliases: ['Wired', 'PorkPieHatKid', 'Porkpiehatkid', 'pork']
}
