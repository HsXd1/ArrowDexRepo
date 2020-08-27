const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const spiceGirl = new Discord.MessageEmbed()
                .setTitle('Spice Girl')
                .setURL('https://jojo.fandom.com/wiki/Spice_Girl')
                .setColor(0xD90EBD)
                .setDescription('User: Trish Una')
                .setThumbnail('https://static.wikia.nocookie.net/5dbf10aa-1453-4314-aa09-8a5e36a7e153')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: B, Precision: D, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Spice Girls (Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Spicy Lady'
                }, {
                    name: '**Appearance:**',
                    value: 'Spice Girl has a similar build to Trish\'s proporions, and appears as pink. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Spice Girl is able to soften any object if she hits it, and turns the material in to a rubber-like object. Moving objects can be softened, causing objects like bullets to flatten upon contact.'
                }, )
                .setImage('https://i1.wp.com/thegameofnerds.com/wp-content/uploads/2019/04/SpiceGirlReveal.jpg?fit=1920%2C1080&ssl=1')
                .setTimestamp()
                .setFooter('Spice Girl')
            message.channel.send(spiceGirl)
}

module.exports.config = {
    name: "spiceGirl",
    description: "Gives info on Spice Girl",
    usage: "s?spiceGirl",
    accessableby: "Members",
    aliases: ['trishUna', 'trish', 'spicyLady']
}
