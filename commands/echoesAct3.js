const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const echoesAct3 = new Discord.MessageEmbed()
                .setTitle('Echoes Act 3')
                .setURL('https://jojo.fandom.com/wiki/Echoes')
                .setColor(0xAAD8A2)
                .setDescription('User: Koichi Hirose')
                .setThumbnail('https://i.kym-cdn.com/entries/icons/facebook/000/020/274/tumblr_o5bwsfIVeZ1qzzsolo1_400.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4, 5'
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-Ranged; evolved'
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: B, Range: C, Durability: B, Precision: C, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Echoes by Pink Floyd'
                }, {
                    name: '**Localized name:**',
                    value: 'Reverb Act 3'
                }, {
                    name: '**Appearence:**',
                    value: 'ACT3 is a completely humanoid Stand. ACT3 takes the appearance of a robot with the same metallic striped eyes but now human lips. Its body is covered in multiple striped protrusions mimicking human muscles and several of them form a crest at the top of the head.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Echoes ACT3 is able to put weight on one's body part using an ability call 3 Freeze."
                }, )
                .setImage('https://media1.tenor.com/images/cc4d8eeb52afb969545971416533b89c/tenor.gif?itemid=16057969')
                .setTimestamp()
                .setFooter('Echoes Act 3')
            message.channel.send(echoesAct3)
}

module.exports.config = {
    name: "echoesAct3",
    description: "gives info on echoesAct3",
    usage: "s?echoesAct3",
    accessableby: "Members",
    aliases: ['EchoesAct3', 'killdahoe']
}