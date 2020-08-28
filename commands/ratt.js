const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const ratt = new Discord.MessageEmbed()
                .setTitle('Ratt')
                .setURL('https://jojo.fandom.com/wiki/Ratt')
                .setColor(0x4DCB63)
                .setDescription('User: Bug-Eaten; Not Bug-Eaten')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/1f/BugEatenAnime.png/revision/latest?cb=20160715204447')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: C, Range: D, Durability: B, Precision: C, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Ratt (band)'
                }, {
                    name: '**Appearance:**',
                    value: "Ratt appears as a machine with camera lens in the middle and 2 supporting legs with a cannon in its back.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Ratt can shoot melting darts which can melt anything on impact. The melting dart will melt a part of the body in to an organic material, which is nearly impossible to heal unless healed by Crazy Diamond."
                }, )
                .setImage('https://theglorioblog.files.wordpress.com/2016/07/jojodu16rat.jpg')
                .setTimestamp()
                .setFooter('Ratt')
            message.channel.send(ratt)
}

module.exports.config = {
    name: "ratt",
    description: "gives info on ratt",
    usage: "s?ratt",
    accessableby: "Members",
    aliases: ['ratt', 'bug-eaten']
}