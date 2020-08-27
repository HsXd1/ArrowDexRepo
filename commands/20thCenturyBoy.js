const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const boycentdjfdjfdsf = new Discord.MessageEmbed()
                .setTitle('20th Century Boy')
                .setURL('https://jojo.fandom.com/wiki/20th_Century_Boy')
                .setColor(0x5310EB)
                .setDescription('User: Magent Magent')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/bf/Magenta_Magenta.png/revision/latest/top-crop/width/360/height/450?cb=20181022185824')
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
                    value: 'Destructive Power: Null, Speed: C, Range: Null, Durability: A, Precision: D, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: '20th Century Boy (Song)'
                }, {
                    name: '**Appearance:**',
                    value: '20th Century Boy appears as a hollow piece of armor, with a headpiece and sholder pads which hang from plain straps.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: '20th Century Boy has no offensive abilities, but has a high defensive state in which it kneels to the ground and becomes immobile. It protects the user and is immune to all types of damage, which is reflected back.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/67/MagentDamageTransfer.png/revision/latest?cb=20180217024851')
                .setTimestamp()
                .setFooter('20th Century Boy')
            message.channel.send(boycentdjfdjfdsf)
}

module.exports.config = {
    name: "20thCenturyBoy",
    description: "",
    usage: "s?20thCenturyBoy",
    accessableby: "Members",
    aliases: ['20thcenturyBoy', 'MagentMagent', 'Magent', 'magentMagent', 'magent']
}
