const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const thePing = Date.now() - message.createdTimestamp;
    const embed = new Discord.MessageEmbed()
        .setTitle('Ping:')
        .setDescription(thePing + "ms")
        .setColor(0x2f3136)
    message.channel.send(embed)    
}
module.exports.config = {
    name: "ping",
    description: "Gives statistics and ping",
    usage: "s?ping",
    accessableby: "Members",
    aliases: ['p']
}