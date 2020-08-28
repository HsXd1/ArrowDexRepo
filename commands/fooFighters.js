const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const fighters = new Discord.MessageEmbed()
                .setTitle('Foo Fighters')
                .setURL('https://jojo.fandom.com/wiki/Foo_Fighters_(Stand)')
                .setColor(0x9B9D44)
                .setDescription('User: F.F')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f8/FF_so_v04_066.png/revision/latest?cb=20160327120951')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range; Colony',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: A, Range: C, Durability: A, Precision: C, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Foo Fighters (Band)'
                }, {
                    name: '**Appearance:**',
                    value: 'Foo Fighters appears as a dark robotic humanoid of masculine proportions. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Foo Fighters is a colony stand that is very intelligent. Foo Fighters can invade someone\'s body and take over their consciousness and have access to their memories. Foo Fighters needs water to survive, and can\'t live without it, and can also control water. It can shoot out Plankton and seal wounds with the Plankton.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/4d/FooP.png/revision/latest/top-crop/width/360/height/450?cb=20170109053755')
                .setTimestamp()
                .setFooter('Foo Fighters')
            message.channel.send(fighters)
}

module.exports.config = {
    name: "fooFighters",
    description: "",
    usage: "s?fooFighters",
    accessableby: "Members",
    aliases: ['F.F', 'FooFighters']
}
