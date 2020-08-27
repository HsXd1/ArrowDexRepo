const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const clash = new Discord.MessageEmbed()
                .setTitle('Clash')
                .setURL('https://jojo.fandom.com/wiki/Clash')
                .setColor(0xA89CC9)
                .setDescription('User: Squalo')
                .setThumbnail('https://cdn.myanimelist.net/images/characters/7/380288.jpg')
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
                    value: 'Destructive Power: D, Speed: A, Range: B, Durability: A, Precision: A, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Clash (Band and Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Crush'
                }, {
                    name: '**Appearance:**',
                    value: 'Clash appears as a mechanical shark with eyes on the side of his hands; its size depends on what body of water it is in.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Clash is a Long-Distance stand that is controlled by Squalo from afar. It can teleport into any body of liquid, like sea water and Narancia\'s tears. Clash can sink in and out of the liquid, as if the liquid has a high depth, being able to drag Giorno through a puddle of water.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9b/Clash_infobox_anime.png/revision/latest?cb=20190315214746')
                .setTimestamp()
                .setFooter('Clash')
            message.channel.send(clash)
}

module.exports.config = {
    name: "clash",
    description: "",
    usage: "s?clash",
    accessableby: "Members",
    aliases: ['squalo', 'crush']
}
