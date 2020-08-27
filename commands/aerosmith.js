const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const aerosmith = new Discord.MessageEmbed()
                .setTitle('Aerosmith')
                .setURL('https://jojo.fandom.com/wiki/Aerosmith')
                .setColor(0xC21007)
                .setDescription('User: Narancia Ghirga')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/3b/Narancia_Ghirga_Anime.png/revision/latest?cb=20181116030838')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: B, Durability: C, Precision: E, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Aerosmith (American Rock Band)'
                }, {
                    name: '**Localized name:**',
                    value: "Li'l Bomber"
                }, {
                    name: '**Appearence:**',
                    value: "Aerosmith appears as a small toy plane with a pilot inside; the plane appears red and yellow in the anime, and blue and purple in the manga.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Aerosmith is equipped with a machine gun with an infinite arsenal of bullets. The bullets can set gasoline on fire and shoot through a human body; with a grenade powered missle. Aerosmith is equipped with a Carbon Dioxide Radar, making it a very good scouting tool."
                }, )
                .setImage('https://i.ytimg.com/vi/W8tnmqXi7Sw/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Aerosmith')
            message.channel.send(aerosmith)
}

module.exports.config = {
    name: "aerosmith",
    description: "gives info on aerosmith",
    usage: "-aerosmith",
    accessableby: "Members",
    aliases: ['Aerosmith', 'Lil\'Bomber', 'narancia', 'Narancia', 'lil\'Bomber']
}
