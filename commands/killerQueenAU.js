const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const killerQueenAU = new Discord.MessageEmbed()
                .setTitle('Killer Queen (Alternate Universe)')
                .setURL('https://jojo.fandom.com/wiki/Killer_Queen')
                .setColor(0xFF00FF)
                .setDescription('User: Yoshikage Kira')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c2/Yoshikage_kira_jojolion.PNG/revision/latest?cb=20200514152755')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: D, Durability: B, Precision: B, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Killer Queen (Queen Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Deadly Queen'
                }, {
                    name: '**Appearence:**',
                    value: "Killer Queen appears similar to its counterpart, but with small differences.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Killer Queen is not very different from the original Killer Queen. The primary ability is to use explosive bubble that explode on contact. Its secondary ability is Sheer Heart Attack, which unlike the original, can be controlled by Kira. Kira is able to shrink them, and is even able to control how powerful they are."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/1f/JJL_ch050_12.png/revision/latest?cb=20180727045600')
                .setTimestamp()
                .setFooter('Killer Queen (Alternate Universe)')
            message.channel.send(killerQueenAU)
}

module.exports.config = {
    name: "killerQueenAU",
    description: "gives info on alternate universe Killer Queen",
    usage: "-killerQueenAU",
    accessableby: "Members",
    aliases: ['killerQueenAU', 'yoshikageKiraAU']
}
