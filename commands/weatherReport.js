const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const weatherReport = new Discord.MessageEmbed()
                .setTitle('Weather Report')
                .setURL('https://jojo.fandom.com/wiki/Weather_Report_(Stand)')
                .setColor(0xB6B0B0)
                .setDescription('User: Weather Report; Emporio Alnino (temporarily)')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/c/c7/Weather_report_profile.png/revision/latest?cb=20181021202557')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: C, Durability: A, Precision: E, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Weather Report (American jazz-fusion band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Weather Forecast'
                }, {
                    name: '**Appearence:**',
                    value: "Weather Report often takes the form of a muscular humanoid mass of clouds with a pair of eyes that have vertical stripes on them. It is always depicted as being surrounded by thick mist or miniature clouds. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Weather Report is able to manipulate the weather to recreate anything in nature, such as creating tornadoes, controlling the waves and water, and making it rain poisonous frogs."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/42/WeatherRP.png/revision/latest/scale-to-width-down/350?cb=20150607144211')
                .setTimestamp()
                .setFooter('Weather Report')
            message.channel.send(weatherReport)
}

module.exports.config = {
    name: "weatherReport",
    description: "gives info on weatherReport",
    usage: "s?weatherReport",
    accessableby: "Members",
    aliases: ['weatherReport', 'weather']
}