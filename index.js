const Discord = require('discord.js');
const bot = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    ws: {
        intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS', 'GUILD_INTEGRATIONS', 'GUILD_WEBHOOKS']
    }
});
const botsettings = require("./botsettings.json")
const {loadCommands} = require('./util/loadCommands')
const mongoose = require('mongoose');
const prefix = botsettings.prefix

const DBL = require("dblapi.js")
const dbl = new DBL ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMzQ2MjgwMTY3ODU5ODE2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkyNTAxMDQ3fQ.6boC1m7UE0Pj0xP06tEghpSiCWPcisA4MotOr_Wg9Cw', bot)
const randomColor = Math.floor(Math.random() * 16777214) + 1

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.on('ready', () => {
    console.log(`${bot.user.username} is activated`)
    bot.user.setActivity(`${bot.guilds.cache.size} servers! | s?help`, {type: "WATCHING"});
    console.log(bot.guilds.cache.size)
    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);
})
bot.on("message", async message => {
    if (message.author.bot) return;


    const messageArray = message.content.split(' ');
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;
        const commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
        commandfile.run(bot, message, args);
    
    if (message.content === '<@!713462801678598164>') {
        return message.channel.send('The prefix for Arrow Dex in this server is `s?`. (Example: `s?help`)')
    }
    if (message.content.startsWith(prefix)) {
       const logchannel = bot.channels.cache.get('764172246004138017');
       const logChannelEmbed = new Discord.MessageEmbed()
       .setTitle('Command Used!')
       .setColor(randomColor)
       .addFields({
         name: 'User:', value: `\`${message.author.tag}\``
       }, {
         name: 'Command Used:', value: `\`${message.content}\``
       }, {
         name: 'Server:', value: `\`${message.guild.name}\``
       })
       .setTimestamp()
       logchannel.send(logChannelEmbed);
       console.log(`${message.author.username}\` used \`${message.content}\` in \`${message.guild.name}`);
    }
})

bot.login(process.env.token);
