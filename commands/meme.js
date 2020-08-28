const Discord = require("discord.js")
const got = require('got')
;


module.exports.run = async (bot, message, args) => {
    let randomColor = Math.floor(Math.random() * 16777214) + 1
    got('https://www.reddit.com/r/ShitPostCrusaders/random.json').then(response => {
        message.channel.send('WARNING! Spoilers for various parts can be shown in the meme below!')
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        const memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        const embed = new Discord.MessageEmbed()
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(`${memeImage}`)
        embed.setColor(randomColor)
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        message.channel.send(embed)
        message.channel.send("WARNING! Spoilers for various parts can be shown in the meme above!")
    })
}

module.exports.config = {
    name: "meme",
    description: "gives a meme command",
    usage: "s?meme",
    accessableby: "Members",
    aliases: ['reddit']
}