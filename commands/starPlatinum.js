const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const starPlatinum = new Discord.MessageEmbed()
                .setTitle('Star Platinum')
                .setURL('https://jojo.fandom.com/wiki/Star_Platinum#Anime')
                .setColor(0x52089A)
                .setDescription('User: Jotaro Kujo')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/99/KujoAnime.png/revision/latest/scale-to-width-down/340?cb=20161029182608')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: A, Development Potential: A'
                }, {
                    name: '**Tarot Card:**',
                    value: 'The Star'
                }, {
                    name: '**Appearence**',
                    value: 'Star Platinum is a humanoid Stand, resembling a tall, well-built man of similar proportions to Jotaro. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Star Platinum is closed range, fast, and very strong. Star Platinum has super strength, speed and precision, and mainly uses its fists for fighting. At one point it even used its finger. The stand later on gains the power to stop time for 5 seconds during the battle with DIO. Because of this Star Platinum is now called "Star Platinum: The World."'
                }, )
                .setImage('https://media.giphy.com/media/wotxdZNDOmZvW/giphy.gif')
                .setTimestamp()
                .setFooter('Star Platinum')
            message.channel.send(starPlatinum)
}

module.exports.config = {
    name: "starPlatinum",
    description: "gives info on starPlatinum",
    usage: "s?starPlatinum",
    accessableby: "Members",
    aliases: ['starPlatinum', 'jotaro', 'jotaroKujo']
}