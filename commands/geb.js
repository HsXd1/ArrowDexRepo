const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const geb = new Discord.MessageEmbed()
                .setTitle('Geb')
                .setURL('https://jojo.fandom.com/wiki/Geb')
                .setColor(0x00ACFF)
                .setDescription("User: N'Doul")
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e1/Ndoul_TvAnime.png/revision/latest?cb=20160405081212')
                .addFields({
                    name: '**Part(s):**',
                    value: '3',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Long-Distance; Bound',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: C, Speed: B, Range: A, Durability: B, Precision: D, Development Potential: D'
                }, {
                    name: '**Egyptian God:**',
                    value: 'Geb'
                }, {
                    name: '**Appearence:**',
                    value: "Geb is bound to a small, shapeless mass of water. It usually takes the form of a tentacle equipped with a clawed hand. Geb is controlled from a long range by N'Doul when he attacked the Crusaders.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Geb is strong enough to rip off a man's head, cut flesh, and cut through metal, whilist being able to shield against projectiles."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/a/af/Geb_Anime.png/revision/latest?cb=20150119114553')
                .setTimestamp()
                .setFooter('Geb')
            message.channel.send(geb)
}

module.exports.config = {
    name: "geb",
    description: "gives info on geb",
    usage: "s?geb",
    accessableby: "Members",
    aliases: ['Geb', 'N\'Doul']
}