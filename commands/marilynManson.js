const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const marman = new Discord.MessageEmbed()
                .setTitle('Marilyn Manson')
                .setURL('https://jojo.fandom.com/wiki/Marilyn_Manson')
                .setColor(0xBEB12)
                .setDescription('User: Miraschon')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/3/35/Miraschon_so_v04_076.png/revision/latest/scale-to-width-down/350?cb=20190316235955')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: A, Range: A, Durability: A, Precision: A, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Marilyn Manson'
                }, {
                    name: '**Appearance:**',
                    value: 'Marilyn Manson appears as a humanoid stand with a digital counter on its face, and has metallic hands.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Marilyn Manson activates when Miraschon makes a bet on someone. If someone loses to Miraschon, it takes anything valuable away from the victim. Marilyn Manson allows its user to cheat to win, but doesn\'t allow the victim to cheat. And if they do cheat, they automatically lose the bet.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/5/50/MarilynP.png/revision/latest/top-crop/width/360/height/450?cb=20170109191624')
                .setTimestamp()
                .setFooter('Marilyn Manson')
            message.channel.send(marman)
}

module.exports.config = {
    name: "marilynManson",
    description: "",
    usage: "s?marilynManson",
    accessableby: "Members",
    aliases: ['MarilynManson', 'Miraschon']
}
