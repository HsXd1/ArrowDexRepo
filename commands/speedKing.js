const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('speedKing')
                .setURL('https://jojo.fandom.com/wiki/Speed_King')
                .setColor(0xD86724)
                .setDescription('User: Jobin Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/4b/JobinClean.png/revision/latest/scale-to-width-down/336?cb=20170804171139')
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
                    value: 'Deep Purple in Rock, a Deep Purple song.'
                }, {
                    name: '**Appearance:**',
                    value: 'Speed King appears as a bright orange and red humanoid with a mannequin-like body and human-like face. It has holes for its eyes and a fishermans cap. It aso has two horns on each side of its head and robotic joints across its arms. It looks very skeletal.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Speed King's abilities are punching rapidly and heat powers. The heat is used in various ways, such as heating up peoples' blood vessels, and store heat in objects."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/af/Speedking.png/revision/latest/scale-to-width-down/330?cb=20190718160330')
                .setTimestamp()
                .setFooter('Speed King')
            message.channel.send(stand)
}

module.exports.config = {
    name: "speedKing",
    description: "",
    usage: "s?speedKing",
    accessableby: "Members",
    aliases: ['jobin']
}