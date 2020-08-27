const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const house = new Discord.MessageEmbed()
                .setTitle('Burning Down the House')
                .setURL('https://jojo.fandom.com/wiki/Burning_Down_the_House')
                .setColor(0xFF0000)
                .setDescription('User: Emporio Alniño')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/0f/Emporio_Alnino.png/revision/latest/top-crop/width/360/height/450?cb=20150614052617')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: Null, Range: Null, Durability: Null, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Burning Down the House (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Burning Down (ASB)'
                }, {
                    name: '**Appearance:**',
                    value: 'Burning Down the House doesn\'t have any real appearence. It mostly takes the appearence of a special location and several items.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Burning Down the House allows Emporio to see, touch, and use the ghosts of objects and rooms. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/6/61/BDtHP.png/revision/latest/top-crop/width/360/height/450?cb=20150607141943')
                .setTimestamp()
                .setFooter('House')
            message.channel.send(house)
}

module.exports.config = {
    name: "burningDownTheHouse",
    description: "",
    usage: "s?burningdowntheHouse",
    accessableby: "Members",
    aliases: ['house', 'burning', 'emporio']
}
