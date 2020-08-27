const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const deathThirteen = new Discord.MessageEmbed()
                .setTitle('Death Thirteen')
                .setURL('https://jojo.fandom.com/wiki/Death_Thirteen')
                .setColor(0x581845)
                .setDescription('User: Mannish Boy')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/4/4e/Mannishboy.png/revision/latest/scale-to-width-down/350?cb=20140809015258')
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
                    value: 'Destructive Power: C, Speed: C, Range: E, Durability: B, Precision: D, Potential: B'
                }, {
                    name: '**Tarot Card:**',
                    value: 'Death'
                }, {
                    name: '**Appearence:**',
                    value: "Death Thirteen appears as a humanoid cloaked in a dark robe. It wears a smiling jester mask with downwards curved eyes and an eerie smile, as well as metallic gauntlets, shoulder pads, a collar, and a high hat",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Death Thirteen is able to control the Dream World. If anything alive falls asleep next to the user, they go in to the dream world which Death 13 controls and manipulated. They can't get out of the dream world unless someone wakes them up."
                }, )
                .setImage('https://i.ytimg.com/vi/uzOP8UXsSx0/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Death Thirteen')
            message.channel.send(deathThirteen)
}

module.exports.config = {
    name: "deathThirteen",
    description: "gives info on deathThirteen",
    usage: "s?deathThirteen",
    accessableby: "Members",
    aliases: ['DeathThirteen', 'mannishBoy']
}

