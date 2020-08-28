const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const tenoreSax = new Discord.MessageEmbed()
                .setTitle('Tenore Sax')
                .setURL('https://jojo.fandom.com/wiki/Tenore_Sax')
                .setColor(0x8D95A2)
                .setDescription('User: Kenny G.')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/2/24/KennyG_Anime.png/revision/latest?cb=20150515175405')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: D, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Tenor Sax (musical instrument)'
                }, {
                    name: '**Appearence:**',
                    value: "Defeated too quickly, and without a fight, appearence is unknown.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Tenore Sax uses illusions to distort the appearence of DIO's mansion by producing large rooms and complex labrinths."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9c/TenoreSax_AnimeAV.png/revision/latest?cb=20160414095710')
                .setTimestamp()
                .setFooter('Tenore Sax')
            message.channel.send(tenoreSax)
}

module.exports.config = {
    name: "tenoreSax",
    description: "gives info on tenoreSax",
    usage: "-tenoreSax",
    accessableby: "Members",
    aliases: ['tenoreSax', 'kenny']
}