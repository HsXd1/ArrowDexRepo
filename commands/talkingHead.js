const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const talkingHead = new Discord.MessageEmbed()
                .setTitle('Talking Head')
                .setURL('https://jojo.fandom.com/wiki/Talking_Head')
                .setColor(0xE01414)
                .setDescription('User: Tiziano')
                .setThumbnail('https://static.jojowiki.com/images/thumb/e/eb/latest/20191016205644/Tiziano_Infobox_Anime.PNG/270px-Tiziano_Infobox_Anime.PNG')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: B, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Talking Heads (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Talking Mouth'
                }, {
                    name: '**Appearance:**',
                    value: 'Talking Head appears as semi-humanoid. It\'s head has 3 tentacles that it uses to attach itself to a victim\'s tongue.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Talking Head first has to latch on to a victim\'s tongue. When attached, the victim is forced to tell lies, through everything. Tiziano can manipulate this by allowing Talking Head to tell the truth, or forcing the victim to remain silent. Tiziano can also control and elongate the tongue.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/6a/Talking_Head_infobox_anime.png/revision/latest?cb=20190315214543')
                .setTimestamp()
                .setFooter('Talking Head')
            message.channel.send(talkingHead)
}

module.exports.config = {
    name: "talkingHead",
    description: "",
    usage: "s?talkingHead",
    accessableby: "Members",
    aliases: ['tiziano']
}
