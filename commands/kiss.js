const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const kiss = new Discord.MessageEmbed()
                .setTitle('Kiss')
                .setURL('https://jojo.fandom.com/wiki/Kiss')
                .setColor(0xE1F106)
                .setDescription('User: Ermes Costello')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f7/Ermes_full_color.png/revision/latest/top-crop/width/360/height/450?cb=20150813043610')
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
                    value: 'Destructive Power: A, Speed: A, Range: A, Durability: A, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Kiss (Rock Band; Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Smack (ASB English Localization)'
                }, {
                    name: '**Appearance:**',
                    value: 'Kiss has the appearence of a yellow humanoid figure with the same athletic build to Ermes. It is covered in stickers with lips on it, and wears a pink jumpsuit.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Kiss is a very powerful close-range Stand, in which Ermes utilizes it cleverly to make it more powerful. Kiss is able to create lip-designed stickers on objects, making it the object the sticker is on become duplicated. If the sticker is removed the two objects spring together and damages it.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/0f/KissP.png/revision/latest/top-crop/width/360/height/450?cb=20170109190909')
                .setTimestamp()
                .setFooter('Kiss')
            message.channel.send(kiss)
}

module.exports.config = {
    name: "kiss",
    description: "",
    usage: "s?kiss",
    accessableby: "Members",
    aliases: ['kiss', 'ermes', 'smack', 'smooch']
}
