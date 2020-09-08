const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
const bot = new Discord.Client({
    disableEveryone: true
});
const DBL = require("dblapi.js")
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMzQ2MjgwMTY3ODU5ODE2NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkyNTAxMDQ3fQ.6boC1m7UE0Pj0xP06tEghpSiCWPcisA4MotOr_Wg9Cw', bot)
const randomColor = Math.floor(Math.random() * 16777214) + 1

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

    if(message.author.bot || message.channel.type === "dm") return;
     if (message.content === '<@!713462801678598164>') {
         return message.channel.send('The prefix for Arrow Dex in this server is `s?`. (Example: `s?help`)')
     }
     if (message.content === 's?') {
         return message.channel.send('The prefix for Arrow Dex in this server is `s?`. (Example: `s?help`)')
     }
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);



    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

    if (message.content.startsWith(prefix)) {
        const logchannel = bot.channels.cache.get('751690728156954654');
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
