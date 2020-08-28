const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const atomheartFather = new Discord.MessageEmbed()
                .setTitle('Atom Heart Father')
                .setURL('https://jojo.fandom.com/wiki/Atom_Heart_Father')
                .setColor(0xB3B324)
                .setDescription('User: Yoshihiro Kira')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/7/7a/Yoshihiro_AV.png/revision/latest?cb=20160916181439')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: Null, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Atom Heart Mother (Song/Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Heart Father'
                }, {
                    name: '**Appearance:**',
                    value: "Atom Heart Father is a stand bound to a camera and its pictures it produces.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Atom Heart Father uses its camera attribute to take pictures that allow people to see the ghost of Yoshihiro Kira, and store items and interact with objects in the photograph."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/3c/AHF_AV.png/revision/latest?cb=20160916171054')
                .setTimestamp()
                .setFooter('Atom Heart Father')
            message.channel.send(atomheartFather)
}

module.exports.config = {
    name: "atomHeartFather",
    description: "gives info on atom heart father",
    usage: "s?atomHeartFather",
    accessableby: "Members",
    aliases: ['atomheartFather', 'YoshihiroKira', 'yoshihrioKira', 'heartFather', 'HeartFather']
}