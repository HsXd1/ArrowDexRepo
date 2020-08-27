const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const maninthemirror = new Discord.MessageEmbed()
                .setTitle('Man in the Mirror')
                .setURL('https://jojo.fandom.com/wiki/Man_in_the_Mirror')
                .setColor(0x4F5561)
                .setDescription('User: Illuso')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/60/Illuso_infobox_anime.png/revision/latest?cb=20190119230801')
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
                    value: 'Destructive Power: C, Speed: C, Range: B, Durability: D, Precision: C, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Man in the Mirror (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Mirror Man'
                }, {
                    name: '**Appearance:**',
                    value: 'Man in the Mirror appears humanoid with a hood covering its entire head, and an upper chest piece bolted to it with screws. It has brown gloves covering its hands, and large goggles.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Man in the Mirror allows its user to enter a "mirror world", and drag anything into the mirror world, through reflective surfaces.'
                }, )
                .setImage('https://i.ytimg.com/vi/SznOw4Cv9-4/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Man in the Mirror')
            message.channel.send(maninthemirror)
}

module.exports.config = {
    name: "manInTheMirror",
    description: "",
    usage: "s?manintheMirror",
    accessableby: "Members",
    aliases: ['illuso', 'mirrorMan']
}
