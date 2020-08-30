const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
        .setAuthor('Stand User', 'Image of Stand User', 'Link to Stand User Wiki Page')
        .setTitle('Stand Name')
        .setURL('Link To Stand Wiki Page')
        .setColor('Stand Color Here. (Remove this and replace it with 0x____)')
        .setThumbnail('Stand User Image Here')
        .addFields({
            name: 'Synopsis:',
            value: "**Stand  Name** is the Stand of **User Name** featured in *Part 4: Diamond is Unbreakable*. Crazy Diamond is humanoid with a pink muscular body and silver armor."
        }, {
            name: "\u200B",
            value: "\u200B"
        }, {
            name: 'Namesake:',
            value: '*Shine On You Crazy Diamond (Pink Floyd Song)*  \n ** ** \n **Localized Name**: \n Shining Diamond',
            inline: true
        }, {
            name: 'Stats:',
            value: '*Destructive Power:* **A** \n *Speed:* **A**  \n *Range:* **D** \n *Durability:* **B** \n *Precision:* **B** \n *Development Potential:* **C**',
            inline: true
        }, {
            name: 'Abilities:',
            value: "● Close-Range \n ● Super strength, Super speed, Very Precise \n ● Restoration - Can restore objects and organisms through touch, but cannot heal Josuke himself or bring dead people back to life."
        })
        .setImage('https://media1.tenor.com/images/59317b031ff48e182c3e54a93b982886/tenor.gif?itemid=6230457')
        .setTimestamp()
        .setFooter('Crazy Diamond')
    message.channel.send(stand)
}

module.exports.config = {
    name: "crazyDiamond",
    description: "Gives info on Crazy Diamond",
    usage: "s?crazyDiamond",
    accessableby: "Members",
    aliases: ['crazyDiamond', 'josuke', 'cd']
}
