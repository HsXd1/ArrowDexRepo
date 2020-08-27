const Discord = require("discord.js")
const bot = new Discord.Client({
    disableEveryone: true
});
module.exports = bot => { 
    console.log(`${bot.user.username} is activated`)
    bot.user.setActivity(`${bot.guilds.cache.size} servers! | s?help`, {type: "WATCHING"});
    console.log(bot.guilds.cache.size)
}