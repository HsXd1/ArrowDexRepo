const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const strayCat = new Discord.MessageEmbed()
                .setTitle('Stray Cat')
                .setURL('https://jojo.fandom.com/wiki/Stray_Cat#Anime')
                .setColor(0xBFA9BC)
                .setDescription('User: Tama')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/17/Stray_Cat_AV.png/revision/latest/scale-to-width-down/270?cb=20170223082027')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: , Speed: , Range: , Durability: , Precision: , Development Potential: '
                }, {
                    name: '**Music Reference:**',
                    value: 'Stray Cats (Band and Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Ferel Cat (ASB)'
                }, {
                    name: '**Appearance:**',
                    value: "Stray Cat is bound to a plant, with a stem that it can use to grab objects, and whiskers that curl up when it uses its ability.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Stray Cat's first abiity is to ressurrect its user into a plant, which makes Tama have Cat/Plant properties. Stray Cat's main ability is to use Aerokinesis to control the air around it."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d2/Stray_Cat_infograph.png/revision/latest?cb=20161021184109')
                .setTimestamp()
                .setFooter('Stray Cat')
            message.channel.send(strayCat)
}

module.exports.config = {
    name: "strayCat",
    description: "gives stray cat haha plant turn into cat lol",
    usage: "s?strayCat",
    accessableby: "Members",
    aliases: ['thecatthatwasonceaplant', 'tama']
}