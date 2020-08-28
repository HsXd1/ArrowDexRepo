const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Fun Fun Fun')
                .setURL('https://jojo.fandom.com/wiki/Fun_Fun_Fun')
                .setColor(0xDDC8E7 )
                .setDescription('User: Ohiro Sasame')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/7b/NewOjiro.png/revision/latest/scale-to-width-down/350?cb=20190619102837')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'Fun, Fun, Fun, The Beach Boys song'
                }, {
                    name: '**Appearance:**',
                    value: 'Fun Fun Fun appears as humanoid with a bell-like head, humanoid torso, and four small leg-lik vestiges under its tiny waist. It stands on four disc-like feet ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Fun Fun Fun's ability is to control a target's movement through their wounds."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/ab/FunFunFun.PNG/revision/latest?cb=20191031133009')
                .setTimestamp()
                .setFooter('Fun Fun Fun')
            message.channel.send(stand)
}

module.exports.config = {
    name: "funFunFun",
    description: "",
    usage: "s?funFunFun",
    accessableby: "Members",
    aliases: ['ohiro']
}