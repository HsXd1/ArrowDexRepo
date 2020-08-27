const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
    let prefixofServer = db.get(`prefix_${message.guild.id}`)
    if (args[0] === 'default') {
        return message.channel.send(`The server's prefix is **${prefixofServer}**`)
    }

    if (!message.member.hasPermission("MANAGE_SERVER")) 
    return message.channel.send("You don't have `MANAGE SERVER` permission.");

    if (!args[0]) 
    return message.channel.send(`Provide a new prefix. (Current Prefix for this server is **${prefixofServer}**)`);

    if(args[1]) 
    return message.channel.send('The Prefix can\'t have spaces');

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(`Prefix has been set to **${args[0]}**`)

}

module.exports.config = {
    name: "prefix",
    description: "a",
    usage: "s?prefix",
    accessableby: "Members",
    aliases: ['prefix']
}

