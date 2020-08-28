const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    let randomColor = Math.floor(Math.random() * 16777214) + 1
    const funhelp = new Discord.MessageEmbed()
        .setTitle("Fun Commands:")
        .setColor(randomColor)
        .addFields({
            name: "Fun Commands:",
            value: "`s?meme` \n `s?speech` \n `s?thisisrequiem`"
        })
        .setFooter("DM hsxd#7339 for any questions or help.")
    message.channel.send(funhelp)
    message.react('✅');
}

module.exports.config = {
    name: "funCMDS",
    description: "This command is used on help on how to use the bot.",
    usage: "s?funCMDS",
    accessableby: "Members",
    aliases: ['fun', 'funCommands']
}
