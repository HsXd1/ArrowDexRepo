const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const sheerheartAttack = new Discord.MessageEmbed()
                .setTitle('Sheer Heart Attack')
                .setURL('https://jojo.fandom.com/wiki/Killer_Queen')
                .setColor(0x0010FF)
                .setDescription('User: Yoshikage Kira')
                .setThumbnail('https://i.kym-cdn.com/entries/icons/facebook/000/029/929/Kira_decides_to_tail_Shigechi.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic Sub-Stand',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: C, Range: A, Durability: A, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Sheer Heart Attack (Queen song/album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Heart Attack'
                }, {
                    name: '**Appearence:**',
                    value: "Sheer Heart Attack appears as a rollling green tank with a Killer Queen like face that has a sword on top. The stand is portrayed as green, but is blue in the anime. Sheer Heart Attack is connected to Killer Queen's left hand, and allows Killer Queen to use its primary bomb even when active.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Sheer Heart Attack is Killer Queen's second type of bomb. The stand is completely automatic and seeks targets that are warmer than others. Sheer Heart Attack is indestructible, taking multiple hits from Jotaro's Star Platinum. It explodes when it reaches its target."
                }, )
                .setImage('https://i.ytimg.com/vi/6QdpFllKkqU/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Killer Queen: Sheer Heart Attack')
            message.channel.send(sheerheartAttack)
}

module.exports.config = {
    name: "sheerHeartAttack",
    description: "gives info on Sheer Heart Attack, Killer Queen's 2nd bomb",
    usage: "-sheerHeartAttack",
    accessableby: "Members",
    aliases: ['sheerHeartAttack']
}