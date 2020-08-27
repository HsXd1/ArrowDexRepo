const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const rollingStones = new Discord.MessageEmbed()
                .setTitle('Rolling Stones')
                .setURL('https://jojo.fandom.com/wiki/Rolling_Stones')
                .setColor(0x423E4A)
                .setDescription('User: Scolippi')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/0/00/ScolippiAnimeInfobox.png/revision/latest?cb=20190728224748')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: B, Range: A, Durability: A, Precision: E, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Rolling Stones (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Prophecy Stones'
                }, {
                    name: '**Appearance:**',
                    value: 'Rolling Stones appears as a normal round rock, but changes shape to look similar to the victim\'s death it will foretell.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Rolling Stones spots are targes fated to die soon then procede to follow and stalk that person.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/2/20/Rolling_Stones_Bruno.png/revision/latest?cb=20190728123119')
                .setTimestamp()
                .setFooter('Rolling Stones')
            message.channel.send(rollingStones)
}

module.exports.config = {
    name: "rollingStones",
    description: "",
    usage: "s?rollingStones",
    accessableby: "Members",
    aliases: ['scolippi', 'prophecyStones', 'prophecystones']
}
