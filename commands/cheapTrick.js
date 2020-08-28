const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const cheapTrick = new Discord.MessageEmbed()
                .setTitle('Cheap Trick')
                .setURL('https://jojo.fandom.com/wiki/Cheap_Trick')
                .setColor(0xDF9E2D)
                .setDescription('User: Masazo Kinoto (original); Rohan Kishibe (temporarily)')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/5b/Masazo_AV.png/revision/latest/scale-to-width-down/350?cb=20161104183710')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: E, Speed: E, Range: E, Durability: A, Precision: E, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Cheap Trick (Rock Band)'
                }, {
                    name: '**Localized name:**',
                    value: 'Cheap Trap'
                }, {
                    name: '**Appearance:**',
                    value: "Cheap Trap appears as a mechanical humanoid frog with suction cup fingers that allow it to stick to someone's back. It is portrayed as blue in the manga and brown in the Anime.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Cheap Trick sticks to someone's back, and kills the user of Cheap Trick when attached to someone's back. Cheap Trick can universally speak any language and is mainly used to annoy Kishibe Rohan."
                }, )
                .setImage('https://i.ytimg.com/vi/B6O6vW8pUvQ/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Cheap Trick')
            message.channel.send(cheapTrick)
}

module.exports.config = {
    name: "cheapTrick",
    description: "gives info on cheapTrick",
    usage: "?cheapTrick",
    accessableby: "Members",
    aliases: ['CheapTrick', 'masazo']
}