const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
        .setAuthor('Josuke Higashikata', 'https://vignette.wikia.nocookie.net/jjba/images/2/24/JosukeAnime.PNG/revision/latest?cb=20171212081940', 'https://jojo.fandom.com/wiki/Josuke_Higashikata')
        .setTitle('Crazy Diamond')
        .setURL('https://jojo.fandom.com/wiki/Crazy_Diamond')
        .setColor(0xFF007A)
        .setDescription("** **")
        .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/2/24/JosukeAnime.PNG/revision/latest?cb=20171212081940')
        .addFields({
            name: 'Synopsis:',
            value: "**Crazy Diamond** is the Stand of **Josuke Higashikata** featured in *Part 4: Diamond is Unbreakable*. Crazy Diamond is humanoid with a pink muscular body and silver armor."
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
    aliases: ['crazyDiamond', 'josuke']
}