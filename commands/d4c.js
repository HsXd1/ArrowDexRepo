const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const d4c = new Discord.MessageEmbed()
                .setTitle('Dirty Deeds Done Dirt Cheap (D4C)')
                .setURL('https://jojo.fandom.com/wiki/Dirty_Deeds_Done_Dirt_Cheap')
                .setColor(0x00F5FF)
                .setDescription('User: Funny Valentine')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/f/f0/Valentine_Normal.png/revision/latest/top-crop/width/720/height/900?cb=20181122133540')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: A, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Dirty Deeds Done Dirt Cheap by AD/DC'
                }, {
                    name: '**Localized name:**',
                    value: 'Filthy Acts At A Reasonable Price'
                }, {
                    name: '**Description:**',
                    value: 'D4C has a humanoid form with large, upright horns that somewhat resemble the ears of a leporid; a masked mandible, and a light body lined by an almost unbroken seam or trim.  ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "D4C is able to travel across different dimensions and interact with them. Valentine travels from dimensions by being between 2 objects, and is able to pull people from dimension to dimension. "
                }, )
                .setImage('https://qph.fs.quoracdn.net/main-qimg-312db8c8136bdf8c44a18f426507d33e')
                .setTimestamp()
                .setFooter('Dirty Deeds Done Dirt Cheap')
            message.channel.send(d4c)
}

module.exports.config = {
    name: "dirtydeedsdonedirtCheap",
    description: "gives info on d4c",
    usage: "s?dirtydeedsdonedirtCheap",
    accessableby: "Members",
    aliases: ['d4c', 'D4C', 'DirtyDeedsDoneDirtCheap', 'dirtydeedsdonedirtCheap', 'funnyValentine', 'FunnyValentine']
}
