const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const creamStarter = new Discord.MessageEmbed()
                .setTitle('Cream Starter')
                .setURL('https://jojo.fandom.com/wiki/Cream_Starter')
                .setColor(0xE4D012)
                .setDescription('User: Hot Pants')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f9/Hot_Pants.png/revision/latest?cb=20150212160734')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: C, Range: C, Durability: A, Precision: E, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Firestarter (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Cream Starter takes the form of a hand-held spray can.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Cream Starter is mainly used by Hot Pants to manipulate flesh in vaious ways. Hot Pants can use this to heal wounds, transform someone\'s face, and make the flesh in to a solid state. Hot Pants can also use this to turn her body in to a liquid-like state and creep through narrow Spaces.'  
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/10/CreamStartercolor.png/revision/latest?cb=20140813210548')
                .setTimestamp()
                .setFooter('Hot Pants')
            message.channel.send(creamStarter)
}

module.exports.config = {
    name: "creamStarter",
    description: "",
    usage: "s?creamStarter",
    accessableby: "Members",
    aliases: ['hotPants', 'HotPants', 'CreamStarter']
}
