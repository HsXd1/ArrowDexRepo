const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const heavyWeather = new Discord.MessageEmbed()
                .setTitle('Heavy Weather')
                .setURL('https://jojo.fandom.com/wiki/Weather_Report_(Stand)#Heavy_Weather')
                .setColor(0xB6B0B0)
                .setDescription('User: Weather Report')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c7/Weather_report_profile.png/revision/latest?cb=20181021202557')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: ?, Speed: ?, Range: ?, Durability: ?, Precision: ?, Development Potential: ?'
                }, {
                    name: '**Music Reference:**',
                    value: 'Heavy Weather Album, by Weather Report'
                }, {
                    name: '**Appearence:**',
                    value: 'Heavy Weather is the unleashed and most capable form of Weather Report. The stand is automatic and is incredibly dangerous and nearly impossible to protect against. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Heavy Weather is able to generate rainbows that if seen, turns the person who sees the rainbow in to a snail. "
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/99/Heaveyweather.PNG/revision/latest/scale-to-width-down/350?cb=20150607152340')
                .setTimestamp()
                .setFooter('Heavy Weather')
            message.channel.send(heavyWeather)
}

module.exports.config = {
    name: "heavyWeather",
    description: "gives info on heavyWeather",
    usage: "s?heavyWeather",
    accessableby: "Members",
    aliases: ['heavyWeather', 'weather']
}