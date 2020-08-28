const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const killerQueen = new Discord.MessageEmbed()
                .setTitle('Killer Queen')
                .setURL('https://jojo.fandom.com/wiki/Killer_Queen')
                .setColor(0xFF00FF)
                .setDescription('User: Yoshikage Kira')
                .setThumbnail('https://i.kym-cdn.com/entries/icons/facebook/000/029/929/Kira_decides_to_tail_Shigechi.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: A, Speed: B, Range: D, Durability: B, Precision: B, Development Potential: A'
                }, {
                    name: '**Music Reference:**',
                    value: 'Killer Queen (Queen Song)'
                }, {
                    name: '**Localized name:**',
                    value: 'Deadly Queen'
                }, {
                    name: '**Appearence:**',
                    value: "Killer Queen appears as a muscular pink cat.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Killer Queen is able to turn anything it touches into a bomb, being able to detonate it by making its right thumb press its right phalynx; the explosion vaporizes everything around the victim, including their clothes and belongings. Killer Queen can use Stray cat to make invisible bombs, using the air bubble to conceal the bomb. Killer Queen also has 2 more bombs: Sheer Heart Attack, and Bites the Dust"
                }, )
                .setImage('https://media1.tenor.com/images/6aa66351fe57cad709f5b6432e1fc0b3/tenor.gif?itemid=14114551')
                .setTimestamp()
                .setFooter('Killer Queen')
            message.channel.send(killerQueen)
}

module.exports.config = {
    name: "killerQueen",
    description: "gives info on the killerQueen stand",
    usage: "-killerQueen",
    accessableby: "Members",
    aliases: ['killerQueen', 'kiraYoshikage']
}
