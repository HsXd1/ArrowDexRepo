const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const kingCrimson = new Discord.MessageEmbed()
                .setTitle('King Crimson')
                .setURL('https://jojo.fandom.com/wiki/King_Crimson')
                .setColor(0xAA2020)
                .setDescription('User: Diavolo; Vinegar Doppio')
                .setThumbnail('https://vignette.wikia.nocookie.net/deathbattlefanon/images/1/14/Diavolo_anime.jpg/revision/latest?cb=20191029030633')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Range-Irrelevant; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: E, Durability: E, Precision: ?, Development Potential: ?'
                }, {
                    name: '**Music Reference:**',
                    value: 'King Crimson (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Emperor Crimson'
                }, {
                    name: '**Appearance:**',
                    value: "King Crimson appears as a red humanoid stand with a build similar to Diavolo. Its arms and legs have a diagonal grid, and the face on its forehead is Epitaph; the substand for King Crimson.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "King Crimson is able to erase time for up to 10 seconds, in which only Diavolo is able to move. Nobody else will have any memory of the time skip happening, and will move to where they would be after the time erasure happens. King Crimson also has a substand named Epitaph, which can view up to 10 seconds into the future."
                }, )
                .setImage('https://i.redd.it/1d8vlxc7ifi31.png')
                .setTimestamp()
                .setFooter('King Crimson')
            message.channel.send(kingCrimson)
}

module.exports.config = {
    name: "kingCrimson",
    description: "gives info on kingCrimson",
    usage: "s?kingCrimson",
    accessableby: "Members",
    aliases: ['emperorCrimson', 'diavolo', 'doppio']
}
