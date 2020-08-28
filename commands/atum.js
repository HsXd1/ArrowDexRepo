const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const atum = new Discord.MessageEmbed()
                .setTitle("Atum")
                .setURL('https://jojo.fandom.com/wiki/Atum')
                .setColor(0xEF09DE)
                .setDescription("User: Telance T. D'Arby")
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/77/Ttdarbystandingwithstand.png/revision/latest?cb=20140914090639')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: C, Range: D, Durability: B, Precision: D, Development Potential: D'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Atum'
                }, {
                    name: '**Appearence:**',
                    value: "Atum appears as a humanoid robot with the same build as Telence, with heart motifs on the body similar to The World and Cream. Its face has Telence's initials, and portrayed as white and purple/pink.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Atum can steal souls from people who have recognized defeat, only if the victim pledge their souls. Atum is able to read souls by asking the victim a question and which the soul is obliged to answer yes/no."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/f/ff/Telence_Atum.png/revision/latest?cb=20150425010949')
                .setTimestamp()
                .setFooter('Atum')
            message.channel.send(atum)
}

module.exports.config = {
    name: "atum",
    description: "gives info on atum",
    usage: "s?atum",
    accessableby: "Members",
    aliases: ['TelanceD\'Arby', 'telanceD\'Arby']
}