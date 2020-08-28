const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const loveTrain = new Discord.MessageEmbed()
                .setTitle('D4C -Love Train-')
                .setURL('https://jojo.fandom.com/wiki/Dirty_Deeds_Done_Dirt_Cheap')
                .setColor(0x00F5FF)
                .setDescription('User: Funny Valentine; Lucy Steel')
                .setThumbnail('https://vignette.wikia.nocookie.net/ninjajojos-bizarre-adventure/images/0/08/FunnyValentine.png/revision/latest?cb=20190815151600')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Irrelevent',
                    inline: true
                }, 
                {
                   name: '**Stats:**',
                   value: 'Destructive Power: A, Speed: A, Range: C, Durability: A, Precision: A, Development Potential: C' 
                },{
                    name: '**Music Reference:**',
                    value: "Love Train (The O'Jays Song)"
                }, {
                    name: '**Abilities:**',
                    value: 'Love Train is the evolved form of D4C, as a blessing from the corpse. Love Train redirects all misfortune someplace else on Earth to another Individual and make Valentine invincible. Valentine hides in a pocket dimension when Love Train is active. Love Train can only be used from a certain distance.',
                    inline: true
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/3/3f/ValentineUnhorsesJohnny.png/revision/latest?cb=20180526044944')
                .setTimestamp()
                .setFooter('D4C -Love Train-')
            message.channel.send(loveTrain)
}

module.exports.config = {
    name: "d4cloveTrain",
    description: "gives info on d4cloveTrain",
    usage: "s?d4cloveTrain",
    accessableby: "Members",
    aliases: ['loveTrain', 'dirtydeedsdonedirtCheaploveTrain', 'LoveTrain']
}