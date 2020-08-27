const Discord = require('discord.js');
const prefix = require('./botsettings.json');
const bot = new Discord.Client({
    disableEveryone: true
});
const DBL = require("dblapi.js")
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMzQ2MjgwMTY3ODU5ODE2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkyNTAxMDQ3fQ.6boC1m7UE0Pj0xP06tEghpSiCWPcisA4MotOr_Wg9Cw', bot)
const db = require('quick.db')

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on('ready', () => {
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);
})
bot.on("message", async message => {
    if (message.content === '<@!713462801678598164>') {
        return message.channel.send('The prefix for Arrow Dex in this server is `s?`. (Example: `s?help`)')
    }
    if (message.content === 's?') {
        return message.channel.send('The prefix for Arrow Dex in this server is `s?`. (Example: `s?help`)')
    }

    if (message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if (commandfile) commandfile.run(bot, message, args)
    console.log(`${message.author.username} used ${cmd} in ${message.guild.name}`)
})
bot.login(process.env.token);
// 