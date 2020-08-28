const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    let randomcolor = Math.floor(Math.random() * 16777214) + 1
    const InviteEmbed = new Discord.MessageEmbed()
    .setTitle('Hey there here\'s the invite for ArrowDex:')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=713462801678598164&permissions=8&scope=bot')
    .setColor(randomcolor)
    .addFields({
        name: '**Note:**', value: 'ArrowDex is still under development, so some stands won\'t be avalible.' 
    }, {
        name: '**Support Server**', value: 'Here\'s the support server: https://discord.gg/QbcGs4w'
    })
    message.channel.send(InviteEmbed)
    message.react('✅');
}


module.exports.config = {
    name: "invite",
    description: "invite command",
    usage: "?invite",
    accessableby: "Members",
    aliases: ['inv', 'join', 'joinServer', 'botInvite']
}