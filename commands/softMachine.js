const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const softMachine = new Discord.MessageEmbed()
                .setTitle('Soft Machine')
                .setURL('https://jojo.fandom.com/wiki/Soft_Machine')
                .setColor(0x3AB40C)
                .setDescription('User: Mario Zucchero')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/6f/ZuccheroAV.png/revision/latest?cb=20181116013226')
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
                    value: 'Destructive Power: A, Speed: C, Range: E, Durability: A, Precision: D, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Soft Machine (Rock Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Tender Machine'
                }, {
                    name: '**Appearance:**',
                    value: 'Soft Machine appears as a humanoid figure covered in spiked nubs. It has robotic eyes and holds a rapier that is utilized for its ability.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'If anything is hit with the rapier Soft Machine has, then it will deflate, people and objects alike. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d0/Soft_Machine_Stats.png/revision/latest?cb=20190309233231')
                .setTimestamp()
                .setFooter('Soft Machine')
            message.channel.send(softMachine)
}

module.exports.config = {
    name: "softMachine",
    description: "",
    usage: "s?softMachine",
    accessableby: "Members",
    aliases: ['tenderMachine']
}
