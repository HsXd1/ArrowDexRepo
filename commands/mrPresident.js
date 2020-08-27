const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const mrPresident = new Discord.MessageEmbed()
                .setTitle('Mr.President')
                .setURL('https://jojo.fandom.com/wiki/Mr.President')
                .setColor(0x93AF43)
                .setDescription('User: Coco Jumbo; Copy of Coco Jumbo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/dc/Coco_Jumbo_key.png/revision/latest?cb=20190807044645')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Mr.President (Band)'
                }, {
                    name: '**Appearance:**',
                    value: 'Mr. President creates a room that resembles a fashionable room that is equipped with comfortable furniture, a television set, and a refrigerator with drinks. But it doesn\'t come with a bathroom. haha so use the closet lol.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Mr.President has no combat ability, but if one places a special key in the slot where a key is supposed to be, a room can be accessed within Coco Jumbo.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/59/Mr._President_Stats.png/revision/latest?cb=20190622114846')
                .setTimestamp()
                .setFooter('Mr.President')
            message.channel.send(mrPresident)
}

module.exports.config = {
    name: "mrPresident",
    description: "",
    usage: "s?mrPresident",
    accessableby: "Members",
    aliases: ['mr.President', 'cocoLarge', 'cocoJumbo']
}
