const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const scaryMonsters = new Discord.MessageEmbed()
                .setTitle('Scary Monsters')
                .setURL('https://jojo.fandom.com/wiki/Scary_Monsters')
                .setColor(0x3FDDC3)
                .setDescription('User: Dr. Ferdinand (Original); Diego Brando')
                .setThumbnail('')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Integrated; Shared',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: D, Durability: A, Precision: C, Development Potential: B'
                }, {
                    name: '**Music Reference:**',
                    value: 'Scary Monsters (Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Frightening Monsters (Eyes of Heaven)'
                }, {
                    name: '**Appearance:**',
                    value: 'Scary Monsters appears as a dinosuar with the word "DIO" written all over its stripes. It has Diego\'s shirt style all over its neck, and is bound to Diego. Diego can partially transform while retaining some of the Dinosaur\'s features.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Scary Monsters\'s main ability is to infect living organisms with a virus that transforms them in to controllable dinosaurs with a touch of the victim. Scary Monsters can also transform Diego\'s entire body in to a dinosaur, and also has the ability to alter organisms into a fossilized state.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/4/40/ScaryMonstercolor.png/revision/latest?cb=20151127131451')
                .setTimestamp()
                .setFooter('Scary Monsters')
            message.channel.send(scaryMonsters)
}

module.exports.config = {
    name: "scaryMonsters",
    description: "",
    usage: "s?scaryMonsters",
    accessableby: "Members",
    aliases: ['ScaryMonsters', 'diegoBrando', 'diego']
}
