const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const grass = new Discord.MessageEmbed()
                .setTitle('Green Green Grass of Home')
                .setURL('https://jojo.fandom.com/wiki/Green,_Green_Grass_of_Home')
                .setColor(0x7E80E4)
                .setDescription('User: The Green Baby')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/5/5f/The_green_baby.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/396/window-height/396?cb=20150113173150')
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
                    value: 'Destructive Power: ?, Speed: ?, Range: ?, Durability: ?, Precision: ?, Development Potential: ?'
                }, {
                    name: '**Music Reference:**',
                    value: 'Green, Green Grass of Home (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Green Green Grass of Home appears as a humanoid stand, with a mask with 4 eyes and a tribal bodysuit.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Green Green Grass of Home is an automatic stand, meaning it protects the user without the user knowing. The stand causes everyting around the Green Baby to shrink the closer they are to it.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/1/17/Green_stand.png/revision/latest/smart/width/400/height/225?cb=20150607131637')
                .setTimestamp()
                .setFooter('Green Green Grass of Home')
            message.channel.send(grass)
}

module.exports.config = {
    name: "greengreengrassofHome",
    description: "",
    usage: "s?greengreengrassofHome",
    accessableby: "Members",
    aliases: ['greenGreenGrassOfHome', 'theGreenBaby']
}
