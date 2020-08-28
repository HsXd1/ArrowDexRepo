const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const theWorldAU = new Discord.MessageEmbed()
                .setTitle('THE WORLD')
                .setURL('https://jojo.fandom.com/wiki/The_World_(Steel_Ball_Run)')
                .setColor(0xCAD823)
                .setDescription('User: Diego Brando from Alternate Universe')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f0/Diego%27s-World.png/revision/latest/scale-to-width-down/350?cb=20170302064222')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: B, Development Potential: B (Assumed the same as the original The World)'
                }, {
                    name: '**Namesake:**',
                    value: 'The World'
                }, {
                    name: '**Appearence:**',
                    value: "THE WORLD is humanoid with a similar build to Diego and has a similar design to its counterpart. THE WORLD is portrayed as pure yellow.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "THE WORLD has the ability to stop time for a maximum of 5 seconds, in which Diego uses this time to set up traps."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/0/0f/THE_WORLD.PNG/revision/latest?cb=20160414121752')
                .setTimestamp()
                .setFooter('The WORLD Alternate Universe')
            message.channel.send(theWorldAU)
}

module.exports.config = {
    name: "theWorldAU",
    description: "gives info on theWorldAU",
    usage: "s?theWorldAU",
    accessableby: "Members",
    aliases: ['theWorldAU', 'diegobrandofromanotherworld']
}