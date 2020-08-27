const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const blackSabbath = new Discord.MessageEmbed()
                .setTitle('Black Sabbath')
                .setURL('https://jojo.fandom.com/wiki/Black_Sabbath')
                .setColor(0x938c12)
                .setDescription('User: Polpo')
                .setThumbnail('https://pbs.twimg.com/profile_images/1054936197821153281/1RX9z7tW_400x400.jpg')
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
                    value: 'Destructive Power: E (A - when grabbing someone), Speed: A, Range: A, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Black Sabbath (Band, Album, and Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Shadow Sabbath'
                }, {
                    name: '**Appearance:**',
                    value: 'Black Sabbath appears as large and humanoid with a dark cloak and Venetian hat.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Black Sabbath is able to draw power from the shadows, which increases its strength and agility. Black Sabbath hides a Stand Arrow inside its mouth, which it uses to awaken a Stand inside a human.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/4f/Black_sabbath_light.png/revision/latest?cb=20181027033312')
                .setTimestamp()
                .setFooter('Black Sabbath')
            message.channel.send(blackSabbath)
}

module.exports.config = {
    name: "blackSabbath",
    description: "Gives info on Black Sabbath",
    usage: "s?blackSabbath",
    accessableby: "Members",
    aliases: ['shadowSabbath', 'Polpo', 'polpo', 'BlackSabbath']
}
