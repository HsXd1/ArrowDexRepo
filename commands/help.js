const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
    let prefixofServer = db.get(`prefix_${message.guild.id}`)
    let randomColor = Math.floor(Math.random() * 16777214) + 1
    const help = new Discord.MessageEmbed()
        .setTitle("Help:")
        .setDescription(`This server's prefix is ${prefixofServer}`)
        .setColor(randomColor)
        .addFields({
            name: "One word Stand",
            value: "`s?<standname>` \n The stand name is always lowercase. \n (Example: `s?geb`, `s?kiss`)"
        }, {
            name: "2 word Stand:",
            value: "`s?<standName>` \n The words after the first word are always capitallized. \n (Example: `s?theWorld`, `s?jumpinJackFlash`, `s?greenGreenGrassOfHome`)"
        }, {
            name: "Fun Commands:",
            value: "`s?meme` | `s?speech`"
        }, {
            name: "List of Stands",
            value: "`s?standlist`"
        }, {
            name: "Vote:",
            value: "`s?vote`"
        })
        .addField('Invite:', '`s?invite`', true)
        .setFooter("DM hsxd#7339 for any questions or help.")
    message.channel.send(help)
    message.react('✅');
}

module.exports.config = {
    name: "help",
    description: "This command is used on help on how to use the bot.",
    usage: "s?help",
    accessableby: "Members",
    aliases: ['help', 'info', 'i']
}
