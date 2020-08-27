const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('I Am a Rock')
                .setURL('https://jojo.fandom.com/wiki/I_Am_a_Rock')
                .setColor(0xD33B1C)
                .setDescription('User: Yotsuyu Yagiyama')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c6/YotsuyuPic.png/revision/latest/scale-to-width-down/304?cb=20140325052130')
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
                    value: 'I Am a Rock, a Simon and Garfunkel song'
                }, {
                    name: '**Appearance:**',
                    value: 'I Am a Rock appears as a humanoid with spikes covering a lot of its body. It has long shoulder pades, a thin waist, and thin upper arms. Its head is a transparent dome and so is the back of its hands.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "I Am a Rock's ability is overpowering their enemies with speed and power. It is only useful in close-range fights."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/e5/I_Am_A_Rock.jpg/revision/latest/scale-to-width-down/350?cb=20170109212546')
                .setTimestamp()
                .setFooter('I Am A Rock')
            message.channel.send(stand)
}

module.exports.config = {
    name: "iAmARock",
    description: "",
    usage: "s?iAmaRock",
    accessableby: "Members",
    aliases: ['rockman', 'yotsuyu']
}