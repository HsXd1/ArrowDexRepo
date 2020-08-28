const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('California King Bed')
                .setURL('https://jojo.fandom.com/wiki/California_King_Bed')
                .setColor(0x9129C2)
                .setDescription('User: Daiya Higashikata')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/55/Daiya_portrait_c9pg11.png/revision/latest/top-crop/width/360/height/450?cb=20160108103401')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: 'California King Bed, a Rihanna song.'
                }, {
                    name: '**Appearance:**',
                    value: 'California King bed appears as a purple toy-like head with a loosely connected torso and limbs. Its head is shaped like a travel cushion and the face looks like a daisy.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "California King Bed's ability is to steal certain memories from a person under certain conditions. With this, the user can easily brainwash people."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/d/d2/CFKB_Chess.png/revision/latest/scale-to-width-down/350?cb=20160803050202')
                .setTimestamp()
                .setFooter('California King Bed')
            message.channel.send(stand)
}

module.exports.config = {
    name: "californiaKingBed",
    description: "",
    usage: "s?californiaKingBed",
    accessableby: "Members",
    aliases: ['daiya']
}