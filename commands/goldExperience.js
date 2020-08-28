const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const goldExperience = new Discord.MessageEmbed()
                .setTitle('Gold Experience')
                .setURL('https://jojo.fandom.com/wiki/Gold_Experience')
                .setColor(0xFFA600)
                .setDescription('User: Giorno Giovanna')
                .setThumbnail('https://giantbomb1.cbsistatic.com/uploads/scale_medium/46/462814/3181186-8832722279-af535.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: A, Range: E (2m) C (Anime), Durability: D, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Gold Experience'
                }, {
                    name: '**Localized name:**',
                    value: 'Golden Wind'
                }, {
                    name: '**Description:**',
                    value: "Gold Experience is a humanoid Stand of slender build and average height, like Giorno. The top of its head is similar to that of a typical helmet of a soldier, with curved markings similar to the letter J coming down from the eyes on both sides. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Gold Experience can create life forms with its fists. and convert objects in to living organisms, such as when Giorno used it to turn Koichi's Luggage into a frog. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/8/81/Gold_Experience_Anime.png/revision/latest?cb=20190106204524')
                .setTimestamp()
                .setFooter('Gold Experience')
                message.channel.send(goldExperience)
}

module.exports.config = {
    name: "goldExperience",
    description: "gives info on goldExperience",
    usage: "s?goldExperience",
    accessableby: "Members",
    aliases: ['goldExperience', 'giorno', 'giornoGiovanna', 'GiornoGiovanna', 'goldenWind', 'GoldenWind']
}