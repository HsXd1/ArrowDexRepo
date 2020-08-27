const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const harvest = new Discord.MessageEmbed()
                .setTitle('Harvest')
                .setURL('https://jojo.fandom.com/wiki/Harvest')
                .setColor(0xDFD91B)
                .setDescription('User: Shigekiyo "Shigechi" Yangu')
                .setThumbnail('https://vignette.wikia.nocookie.net/p__/images/4/47/9689536bdbe4dc606c38fe4e1f733bede2e2c068_hq.jpg/revision/latest/top-crop/width/360/height/450?cb=20190131092308&path-prefix=protagonist')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Colony; Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: B, Range: A, Durability: A, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Harvest (Song/Album)'
                }, {
                    name: '**Appearance:**',
                    value: "Harvest is made up of 500 small oval-shaped, insect-like creatures.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Harvest is able to utilize its long range by being able to move through an entire city and harvesting a particular item that Shigechi wants. Each Harvest is equipped with a needle that Shigechi can use to inject liquid into someone's blood stream."
                }, )
                .setImage('https://i.ytimg.com/vi/j4XlAWw-pOM/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Harvest')
            message.channel.send(harvest)
}

module.exports.config = {
    name: "harvest",
    description: "gives info on harvest",
    usage: "s?harvest",
    accessableby: "Members",
    aliases: ['harvest', 'shigechi']
}