const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const anubis = new Discord.MessageEmbed()
                .setTitle('Anubis')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setColor(0x8D95A2)
                .setDescription('User: Caravan Serai (Original User)')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/04/AnubisBounded.png/revision/latest/scale-to-width-down/194?cb=20150202091154')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic; Bound; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: E, Durability: A, Precision: E, Development Potential: C'
                },  {
                    name: '**Egyptian God:**',
                    value: 'Anubis'
                }, {
                    name: '**Appearence:**',
                    value: "Anubis appears similar to the Mytholgical Egyptian God it was named after; which is bound to a sword.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Anubis is able to mind control whoever draws the sword and whoever Anubis chooses will draw the sword from its sheath. Anubis can manipulate the slices of the blade. During a battle the sword's speed and strength will become more powerful as the battle goes on."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/c/c3/Anubishexagon.jpg/revision/latest?cb=20170323020405')
                .setTimestamp()
                .setFooter('Anubis')
            message.channel.send(anubis)
}

module.exports.config = {
    name: "anubis",
    description: "gives info on anubis",
    usage: "s?anubis",
    accessableby: "Members",
    aliases: ['anubis', 'caravanSerai', 'CaravanSerai']
}