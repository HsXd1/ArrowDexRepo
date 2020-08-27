const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    let randomcolor = Math.floor(Math.random() * 16777214) + 1
    const voteEmbed = new Discord.MessageEmbed()
    .setTitle('Vote for ArrowDex!')
    .setURL('https://top.gg/bot/713462801678598164/vote')
    .setColor(randomcolor)
    .addFields({
        name: '**Note:**', value: 'If you would like to vote for Arrow Dex, click the link on top!'
    })
    message.channel.send(voteEmbed)
    message.react('✅');
}


module.exports.config = {
    name: "vote",
    description: "vote command to vote for Arrow Dex",
    usage: "?vote",
    accessableby: "Members",
    aliases: ['vote', 'Vote']
}