const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const empress = new Discord.MessageEmbed()
                .setTitle('Empress')
                .setURL('https://jojo.fandom.com/wiki/Empress')
                .setColor(0xFF5733)
                .setDescription('User: Nena')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/86/Nena_Disguised_Anime.png/revision/latest/scale-to-width-down/340?cb=20181005023237')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound Stand; Long-Distance Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: E, Range: A, Durability: A, Precision: D, Development Potential: D'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Empress'
                }, {
                    name: '**Appearence:**',
                    value: "Empress is a Stand bound to its own user's blood, first appearing as a small drop of blood from Nena. Once the blood drop hits a person, the true Stand is revealed.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Empress is a dangerous and powerful stand. It could eat organisms. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/52/Empress_Stats_HD.png/revision/latest?cb=20150217160531')
                .setTimestamp()
                .setFooter('Empress')
            message.channel.send(empress)
}

module.exports.config = {
    name: "empress",
    description: "gives info on empress",
    usage: "s?empress",
    accessableby: "Members",
    aliases: ['empress', 'nena']
}