const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const bitestheDust = new Discord.MessageEmbed()
                .setTitle('Killer Queen: Bites The Dust')
                .setURL('https://jojo.fandom.com/wiki/Killer_Queen')
                .setColor(0xF086DD)
                .setDescription('User: Kosaku Kawajiri')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/7d/Kosaku-Kira_AV.png/revision/latest/scale-to-width-down/340?cb=20170620231745')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic; Evolved',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: A, Durability: A, Precision: D, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Another One Bites the Dust (Queen Song)'
                },  {
                    name: '**Abilities:**',
                    value: "Bites the Dust is Killer Queen's third type of bomb, which was granted through Kira being pierced by the arrow a second time. Bites the Dust loops time an hour whenever Kira's identity is revealed, by entering a person and causing an explosion."
                }, )
                .setImage('https://i.ytimg.com/vi/rpNsfipCOzo/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Killer Queen: Bites The Dust')
            message.channel.send(bitestheDust)
}

module.exports.config = {
    name: "bitesTheDust",
    description: "gives info on Killer Queen's 3rd bomb, Bites the Dust",
    usage: "s?bitesTheDust",
    accessableby: "Members",
    aliases: ['BitesTheDust', 'killerQueenbitestheDust', 'kosakuKawajiri', 'KosakuKawajiri', 'kosaku']
}