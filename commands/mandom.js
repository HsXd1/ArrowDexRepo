const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const mandom = new Discord.MessageEmbed()
                .setTitle('Mandom')
                .setURL('https://jojo.fandom.com/wiki/Mandom')
                .setColor(0xC735C7)
                .setDescription('User: Ringo Roadagain')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/9/96/Ringo_portrait_c33_pg40.png/revision/latest/top-crop/width/360/height/450?cb=20140816183019')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: Null, Speed: A, Range: Null, Durability: E, Precision: Null, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Lovers of the World (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Mando (All-Star Battle)'
                }, {
                    name: '**Appearance:**',
                    value: 'Mandom appears as a head with lines on its phace and long tendrils on its ends. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Mandom will rewind time for 6 sconds with a turn of a hand on Ringo\'s wristwatch. Everything will rewind back to how it was 6 seconds a go and is used psychologically by Ringo.'
                }, )
                .setImage('https://static.jojowiki.com/images/thumb/e/e0/latest/20191015214706/Mandom3.png/365px-Mandom3.png')
                .setTimestamp()
                .setFooter('Mandom')
            message.channel.send(mandom)
}

module.exports.config = {
    name: "mandom",
    description: "",
    usage: "s?mandom",
    accessableby: "Members",
    aliases: ['Mandom']
}
