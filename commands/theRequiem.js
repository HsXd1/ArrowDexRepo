module.exports.run = async (bot, message, args) => {
    let theRequiem = args.slice(0).join(" ")
    let amountOfMessage = args.slice(1)
    var requiemMessage;
    for (requiemMessage = 0; requiemMessage < amountOfMessage; requiemMessage++) {
        message.channel.send(theRequiem)
        .catch(err => message.reply(`Error:  ${err}`));
}
}
module.exports.config = {
    name: "thisisrequiem",
    description: "delete messages command",
    usage: "?theisrequiem",
    accessableby: "Members",
    aliases: ['requiem', 'therequiem']
}
