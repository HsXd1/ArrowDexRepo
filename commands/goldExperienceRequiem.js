const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const goldExperienceRequiem = new Discord.MessageEmbed()
                .setTitle('Gold Experience Requiem')
                .setURL('https://jojo.fandom.com/wiki/Gold_Experience_Requiem')
                .setColor(0xFFA600)
                .setDescription('User: Giorno Giovanna')
                .setThumbnail('https://images-na.ssl-images-amazon.com/images/I/51xRbyVaKzL._AC_.jpg')
                .addFields({
                    name: '**Part(s):**',
                    value: '5',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Requiem; Close-Range; Range Irrelevant',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: ∅, Speed: ∅, Range: ∅, Durability: ∅, Precision: ∅, Development Potential: ∅'
                }, {
                    name: '**Music Reference:**',
                    value: 'The Gold Experience (Prince album); Requiem (Mozart Composition) '
                }, {
                    name: '**Localized name:**',
                    value: 'Golden Wind Requiem)'
                }, {
                    name: '**Appearence:**',
                    value: "Gold Experience Requiem is a humanoid Stand of a height and build similar to Giorno's. Many of its features resemble the original Gold Experience, including the ladybugs on its hands and the oblong grooves across its body. ",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Golden Experience Requiem is able to nullify actions and prevent them from becoming real. The Requiem arrow boosted Golden Experience's original life giving ability, making it more powerful. "
                }, )
                .setImage('https://media1.tenor.com/images/3ef9dfb49cb1ac857cff7f660ad0e8cf/tenor.gif?itemid=14661810')
                .setTimestamp()
                .setFooter('Gold Experience Requiem')
            message.channel.send(goldExperienceRequiem)
}

module.exports.config = {
    name: "goldExperienceRequiem",
    description: "gives info on goldExperienceRequiem",
    usage: "s?goldExperienceRequiem",
    accessableby: "Members",
    aliases: ['GoldExperienceRequiem', 'GoldenWindRequiem']
}