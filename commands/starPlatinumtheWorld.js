const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const starPlatinum2 = new Discord.MessageEmbed()
                .setTitle('Star Platinum: The World')
                .setURL('https://jojo.fandom.com/wiki/Star_Platinum#Anime')
                .setColor(0x52089A)
                .setDescription('User: Jotaro Kujo')
                .setThumbnail('https://static.jojowiki.com/images/thumb/d/db/latest/20200115170552/Jotaro_SO_Infobox_Manga.jpeg/270px-Jotaro_SO_Infobox_Manga.jpeg')
                .setTimestamp()
                .addFields({
                    name: '**Part(s):**',
                    value: '4, 6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: A, Development Potential: C'
                }, {
                    name: '**Appearence:**',
                    value: 'Star Platinum is a humanoid Stand, resembling a tall, well-built man of similar proportions to Jotaro, with wavy hair. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Star Platinum is closed range, fast, and very strong. Star Platinum has super strength, speed and precision, and mainly uses its fists for fighting. At one point it even used its finger. The stand later on gains the power to stop time for 5 seconds during the battle with DIO. Because of this Star Platinum is now called 'Star Platinum: The World.'"
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/06/Star_Platinum_The_World.png/revision/latest?cb=20150610162343')
                .setTimestamp()
                .setFooter('Star Platinum: The World')
            message.channel.send(starPlatinum2)
}

module.exports.config = {
    name: "starPlatinumTheWorld",
    description: "gives info on starPlatinumtheWorld",
    usage: "s?starPlatinumtheWorld",
    accessableby: "Members",
    aliases: ['starPlatinumtheWorld']
}