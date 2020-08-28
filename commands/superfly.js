const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const superFly = new Discord.MessageEmbed()
                .setTitle('Super Fly')
                .setURL('https://jojo.fandom.com/wiki/Super_Fly')
                .setColor(0x52089A)
                .setDescription('User: Toyohiro Kanedaichi')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/52/Toyohiro_AV.png/revision/latest?cb=20161028190434')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound; Automatic',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: N/A, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Superfly (Album)'
                }, {
                    name: '**Appearance:**',
                    value: "Super Fly appears as an electrical pylon, which acan be viewed by non-Stand users.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Super Fly imprisons anyone inside the pylon, because the energy of the prisoner sustains itself. To defend itself Super Fly absorbs all damage it takes and reflects all of it back.'
                }, )
                .setImage('https://i.kym-cdn.com/photos/images/original/001/185/604/8f1.png')
                .setTimestamp()
                .setFooter('Super Fly')
            message.channel.send(superFly)
}

module.exports.config = {
    name: "superFly",
    description: "gives ifno on superfly",
    usage: "s?superFly",
    accessableby: "Members",
    aliases: ['toyohiro']
}