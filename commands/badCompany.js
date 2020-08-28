const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const badCompany = new Discord.MessageEmbed()
                .setTitle('Bad Company')
                .setURL('https://jojo.fandom.com/wiki/Bad_Company')
                .setColor(0x47C526)
                .setDescription('Keicho Nijimura')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/a/af/Keicho_AnimeAV.png/revision/latest?cb=20170224041655')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Colony Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: B, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Bad Company (Band, Song, and Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Worse Company'
                }, {
                    name: '**Appearence:**',
                    value: "Bad Company is a group of small toy soldiers, with helicopters and fighter tanks. The soldiers are portrayed as green with metallic skin.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "As a colony stand, killing one soldier won't kill the user itself, but killing all will kill the user. Bad Company's soldiers each have a M16 Assault Rifle with bullets that can puncture human skin; parachutes, knives and ropes to climb objects. The helicopters have machine guns and missles, and equipped with land mines. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/5b/Bad_Company_stats.png/revision/latest?cb=20160423060456')
                .setTimestamp()
                .setFooter('Bad Company')
            message.channel.send(badCompany)
}

module.exports.config = {
    name: "badCompany",
    description: "gives info on badCompany",
    usage: "s?badCompany",
    accessableby: "Members",
    aliases: ['BadCompany', 'keicho']
}