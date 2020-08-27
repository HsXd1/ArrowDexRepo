const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const underWorld = new Discord.MessageEmbed()
                .setTitle('Under World')
                .setURL('https://jojo.fandom.com/wiki/Under_World')
                .setColor(0x0CF1E6)
                .setDescription('User: Donatello Versus')
                .setThumbnail('https://qph.fs.quoracdn.net/main-qimg-753635c67a383c9863cf23108f83712b')
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
                    value: 'Destructive Power: Null, Speed: C, Range: A, Durability: C, Precision: Null, Development Potential: Null'
                }, {
                    name: '**Music Reference:**',
                    value: 'Underworld (Band)'
                }, {
                    name: '**Appearance:**',
                    value: 'Under World is a humanoid stand with headphone shaped appendeges on its head instead of eyes. It has multiple symbols on its body representing multiple things.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Under World is able to pull memories from the ground out of the earth. The memories it pulls out can be of any event, such as plane crashes and NFL football games. If the victim gets caught up during the event, they will experience what happens in the memory.'
                }, )
                .setImage('https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Underworld-jojo.jpg?q=50&fit=crop&w=740&h=370')
                .setTimestamp()
                .setFooter('Under World')
            message.channel.send(underWorld)
}

module.exports.config = {
    name: "underWorld",
    description: "",
    usage: "s?underWorld",
    accessableby: "Members",
    aliases: ['donatello', 'UnderWorld']
}
