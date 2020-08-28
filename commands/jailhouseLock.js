const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const jailhouseLock = new Discord.MessageEmbed()
                .setTitle('Jail House Lock')
                .setURL('https://jojo.fandom.com/wiki/Jail_House_Lock')
                .setColor(0xDF9E11)
                .setDescription('User: Miuccia Miuller')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/b/b1/MiucciaMiuller.png/revision/latest/top-crop/width/360/height/450?cb=20170101021427')
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
                    value: 'Destructive Power: Null, Speed: C, Range: B, Durability: A, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Jailhouse Rock (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Jail House Lock appears as a humanoid stand with a head that\'s showing its brain. It appears light brown in the manga.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Jail House Lock\'s primary abillity is to cause its victim to only to remember 3 pieces of information. The stand is triggered when someone touches the walls of Green Dolphin Street Prison. The victim still retains their previous memories, but are now only able to process and remember 3 new memories. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/7/7c/JailHouseRock_fullbody.png/revision/latest/top-crop/width/360/height/450?cb=20160320072730')
                .setTimestamp()
                .setFooter('Jail House Lock')
            message.channel.send(jailhouseLock)
}

module.exports.config = {
    name: "jailhouseLock",
    description: "",
    usage: "s?jailhouseLock",
    accessableby: "Members",
    aliases: ['JailHouseLock', 'Miuccia']
}
