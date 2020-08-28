const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const redhotchiliPepper = new Discord.MessageEmbed()
                .setTitle('Red Hot Chili Pepper')
                .setURL('https://jojo.fandom.com/wiki/Red_Hot_Chili_Pepper')
                .setColor(0xE6D90E)
                .setDescription('User: Akira Otoshi')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/5f/Akira_otoishi_diamond_is_unbreakable_color_v5_086.png/revision/latest?cb=20160408021340')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: A, Durability: A, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Red Hot Chili Peppers (rock band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Chili Pepper'
                }, {
                    name: '**Appearence:**',
                    value: "Red Hot Chili Pepper appears as a Kappa, with a bake and tail. The head resembles a Pachycephalosaurus, with its body covered in a yellow electric glow.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Red Hot Chili Pepper is physically powerful, being able to take on stands like Crazy Diamond. Its main ability is to absorb electricity to increase its base power and heal its wounds; and can even pass through flows of electricity; and quickly travel from one place through another using them."
                }, )
                .setImage('https://i.ytimg.com/vi/mdeo4xmwbM8/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Red Hot Chili Pepper')
            message.channel.send(redhotchiliPepper)
}

module.exports.config = {
    name: "redHotChiliPepper",
    description: "gives info on purpleHaze",
    usage: "s?redhotchiliPepper",
    accessableby: "Members",
    aliases: ['RedHotChiliPepper', 'ChiliPepper', 'akira']
}
