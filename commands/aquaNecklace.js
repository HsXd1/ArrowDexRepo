const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const aquaNecklace = new Discord.MessageEmbed()
                .setTitle('Aqua Necklace')
                .setURL('https://jojo.fandom.com/wiki/Aqua_Necklace')
                .setColor(0x267AC5)
                .setDescription('User: Anjuro "Angelo" Katagiri')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/8/85/Angelo_AV.png/revision/latest/scale-to-width-down/350?cb=20160408200803')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Bound; Long-Distance',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: C, Range: A, Durability: A, Precision: C, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Aqua (Asia Album)'
                }, {
                    name: '**Appearence:**',
                    value: "Aqua Necklace manifests itself as a short humanoid with eyes drawn through its body. Its design references the Dogū figurines of the late Jōmon period. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Aqua Necklace is very evasive to do it liquid's state. It is able to possess people from the inside by forcing itself in to the victim, and disguise itself as amy kind of liquid."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/4f/Aqua_Necklace_AV.png/revision/latest?cb=20160414095501')
                .setTimestamp()
                .setFooter('Aqua Necklace')
            message.channel.send(aquaNecklace)
}

module.exports.config = {
    name: "aquaNecklace",
    description: "gives info on aquaNecklace",
    usage: "s?aquaNecklace",
    accessableby: "Members",
    aliases: ['AquaNecklace', 'angelo', 'AnjuroKatagiri']
}