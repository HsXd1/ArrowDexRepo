const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const thegratefulDead = new Discord.MessageEmbed()
                .setTitle('The Grateful Dead')
                .setURL('https://jojo.fandom.com/wiki/The_Grateful_Dead')
                .setColor(0x6850AA)
                .setDescription('User: Prosciutto')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/b8/Prosciutto_Anime.png/revision/latest?cb=20191017175807')
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
                    value: 'Destructive Power: B, Speed: E, Range: B, Durability: A, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Grateful Dead (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'The Thankful Death'
                }, {
                    name: '**Appearance:**',
                    value: 'The Grateful Dead appears humanoid with no legs, and uses its arms to stand and move around. It\'s whole body is covered with eyes, and emits a light mist.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'The Grateful Dead has the ability to cause organisms to have accelerated aging physically. Prosciutto is immune to this ability, but can use it on himself as he chooses. '
                }, )
                .setImage('https://i.ytimg.com/vi/X-ikDrpwK9k/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('The Grateful Dead')
            message.channel.send(thegratefulDead)
}

module.exports.config = {
    name: "theGratefulDead",
    description: "",
    usage: "s?thegratefulDead",
    accessableby: "Members",
    aliases: ['prosciutto']
}
