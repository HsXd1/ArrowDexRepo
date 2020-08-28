const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const lovers = new Discord.MessageEmbed()
                .setTitle('Lovers')
                .setURL('https://jojo.fandom.com/wiki/Lovers')
                .setColor(0xD8B787)
                .setDescription('User: Steely Dan')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/59/Steely_Dan_profile.png/revision/latest?cb=20190404160642')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: D, Range: A, Durability: A, Precision: D, Development Potential: E'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Lovers'
                }, {
                    name: '**Appearence:**',
                    value: "Lovers resembles a robotic humanoid creature with an insectoid head and with crab pincers for hands. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Lovers is able to enter anyone's brain and manipulate the pain that Steely Dan takes and inflicts the pain on it's victim. Lovers uses DIO's spores to kill it's victim, and can make organic waste clones.The stand just works."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/f7/Loversstats.png/revision/latest?cb=20140718230615')
                .setTimestamp()
                .setFooter('Lovers')
            message.channel.send(lovers)
}

module.exports.config = {
    name: "lovers",
    description: "gives info on lovers",
    usage: "s?lovers",
    accessableby: "Members",
    aliases: ['lovers', 'danOfSteel', 'steelyDan']
}