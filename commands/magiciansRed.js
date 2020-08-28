const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const magiciansRed = new Discord.MessageEmbed()
                .setTitle("Magician's Red")
                .setURL('https://jojo.fandom.com/wiki/Magician%27s_Red')
                .setColor(0xF30C0C)
                .setDescription('User: Muhammad Avdol')
                .setThumbnail('https://m.media-amazon.com/images/M/MV5BNTUzN2FlNGQtOWZjYy00MDdlLTk1MDctYTljOGRkMjY2ZWRkXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_UY268_CR147,0,182,268_AL_.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: B, Precision: C, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Magician'
                }, {
                    name: '**Appearence:**',
                    value: "Magician's Red appears as a humanoid figure with a bird-like head. It has a heavily muscular upper body and its feathered legs are sometimes covered in burning flames. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Magician's Red's uses several techniques with the flames, such as Cross Fire Hurricane, which can be used to manipulate the direction the flames, Red Bind, which can bind enemies with flames."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/8/83/Magician%27s_Red.png/revision/latest?cb=20150217160036')
                .setTimestamp()
                .setFooter("Magician's Red")
            message.channel.send(magiciansRed)
}

module.exports.config = {
    name: "magiciansRed",
    description: "gives info on magiciansRed",
    usage: "s?magiciansRed",
    accessableby: "Members",
    aliases: ['magiciansRed', 'avdol']
}