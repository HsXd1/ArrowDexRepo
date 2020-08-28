const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const highwaytohell = new Discord.MessageEmbed()
                .setTitle('Highway to Hell')
                .setURL('https://jojo.fandom.com/wiki/Highway_to_Hell')
                .setColor(0x581845)
                .setDescription('User: Thunder McQueen')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/1/1a/Mcqueen.png/revision/latest/scale-to-width-down/350?cb=20181021202652')
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
                    value: 'Destructive Power: C, Speed: C, Range: A, Durability: C, Precision: C, Development Potential: C'
                }, {
                    name: '**Music Reference:**',
                    value: 'Highway to Hell (Song/Album)'
                }, {
                    name: '**Localized name:**',
                    value: 'Highway to Death (ASB English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Highway to Hell is 4 purple propellers that appear where its user attempts to have an injury.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Highway to Hell\'s main ability is to share damage on to its victim. Whenever McQueen attempts to kill or injure himself, Highway to Hell is activated on the person McQueen chooses it to be active on.'
                }, )
                .setImage('https://static.jojowiki.com/images/thumb/5/52/latest/20200417120138/Highway_to_Hell_powa.png/250px-Highway_to_Hell_powa.png')
                .setTimestamp()
                .setFooter('Highway to Hell')
            message.channel.send(highwaytohell)
}

module.exports.config = {
    name: "highwaytoHell",
    description: "",
    usage: "s?highwaytoHell",
    accessableby: "Members",
    aliases: ['HighwayToHell', 'highwayToHell', 'thunderMcQueen', 'thunder', 'McQueen']
}
