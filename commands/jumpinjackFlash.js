const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const jjf = new Discord.MessageEmbed()
                .setTitle('Jumpin\' Jack Flash')
                .setURL('https://jojo.fandom.com/wiki/Jumpin%27_Jack_Flash')
                .setColor()
                .setDescription('User: Lang Rangler')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/2/26/Lang_Rangler_so_v06_002.png/revision/latest/top-crop/width/360/height/450?cb=20140719150055')
                .addFields({
                    name: '**Part(s):**',
                    value: '6',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: C, Range: B, Durability: A, Precision: D, Development Potential: E'
                }, {
                    name: '**Music Reference:**',
                    value: 'Jumpin\' Jack Flash (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Jumpin\' Jack Flash appears as a humanoid stand with a build similar to Lang\'s. Its head is banded with a dark band, and has a cartoonish rocket ship on its chest.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Jumpin\' Jack Flash\'s main ability is to spit on people to remove their gravity. When the spit hits a person, the victim\'s gravity is gone, and them and anything they touch can become zero gravity. Jumpin\' Jack Flash is armed with centrifuges that can store objects that it uses to launch at enemies like bullets.' 
                }, )
                .setImage('https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/10/jumpin-jack-flash-jojo.jpg?q=50&fit=crop&w=740&h=370')
                .setTimestamp()
                .setFooter('Jumpin\' Jack Flash')
            message.channel.send(jjf)
}

module.exports.config = {
    name: "jumpinJackFlash",
    description: "",
    usage: "s?jumpinjackFlash",
    accessableby: "Members",
    aliases: ['jumpin\'jackFlash', 'Jumpin\'JackFlash', 'lang']
}
