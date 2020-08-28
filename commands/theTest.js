const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    return message.channel.send("This is a test command!")
}

module.exports.config = {
    name: "test",
    description: "",
    usage: "-test",
    accessableby: "Members",
    aliases: ['tT']
}