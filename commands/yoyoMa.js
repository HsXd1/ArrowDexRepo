const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const yoyoma = new Discord.MessageEmbed()
                .setTitle('Yo-Yo Ma')
                .setURL('https://jojo.fandom.com/wiki/Yo-Yo_Ma')
                .setColor(0x20DF11)
                .setDescription('User: D an G')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/85/D%26G.PNG/revision/latest/scale-to-width-down/350?cb=20181021202958')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: D, Range: A, Durability: A, Precision: D, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Yo-Yo Ma (Musician)'
                }, {
                    name: '**Appearance:**',
                    value: 'Yo-Yo Ma has a somewhat humanoid stand, that has scales all over its body, and wears blue overalls. It has a steel harpoon impaled on its head and tubes impaled on the sides of its head.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Yo-Yo Ma is indestructible, taking bullets and getting punched by Stone Free and having its user killed. It has a high amount of intellect, and produces acid saliva which sprays everywhere from drooling. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/b/b5/YoYoP.png/revision/latest/top-crop/width/360/height/450?cb=20150607132426')
                .setTimestamp()
                .setFooter('Yo-Yo Ma')
            message.channel.send(yoyoma)
}

module.exports.config = {
    name: "yoyoMa",
    description: "",
    usage: "s?yoyoMa",
    accessableby: "Members",
    aliases: ['yo-yoMa', 'dang']
}

