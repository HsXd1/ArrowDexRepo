const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const chariotRequiem = new Discord.MessageEmbed()
                .setTitle('Chariot Requiem')
                .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                .setColor(0x52089A)
                .setDescription('User: Jean Pierre Polnareff')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/bb/Polnareffpart5.png/revision/latest/scale-to-width-down/340?cb=20190815064837')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: A, Durability: A, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Requiem (Mozart composition)'
                }, {
                    name: '**Appearence:**',
                    value: "Chariot Requiem is an automated Stand that follows its late user's final wish to protect the Arrow at all costs. It doesn't show any combat ability, yet can be considered one of the most dangerous Stands. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Chariot Requiem was able to put everyone in Rome to sleep. During that time Requiem switched every soul and switched their souls with the people around them. Requiem protected the arrow at all costs from anybody that tried to take the Arrow away, even turning the stands against their own user."
                }, )
                .setImage('https://i.ytimg.com/vi/nDptdrRsYZs/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Chariot Requiem')
            message.channel.send(chariotRequiem)
}

module.exports.config = {
    name: "chariotRequiem",
    description: "gives info on chariotRequiem",
    usage: "-chariotRequiem",
    accessableby: "Members",
    aliases: ['ChariotRequiem', 'jean']
}