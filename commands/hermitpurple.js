const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const hermitPurple = new Discord.MessageEmbed()
                .setTitle('Hermit Purple')
                .setURL('https://jojo.fandom.com/wiki/Hermit_Purple')
                .setColor(0x52089A)
                .setDescription('User: Joseph Joestar')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e4/OldJosephAnime.png/revision/latest/scale-to-width-down/340?cb=20170316071836')
                .addFields({
                    name: '**Part(s):**',
                    value: '3, 4',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Short-ranged',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: D, Speed: C, Range: D, Durability: A, Precision: D, Development Potential: E'
                }, {
                    name: '**Tarot Card**',
                    value: 'The Hermit'
                }, {
                    name: '**Appearence:**',
                    value: "Hermit Purple manifests itself as multiple, purple, thorn-covered vines that spawn from Josephs hands. Hermit Purple's vines can be used in battle but remain relatively weak.",
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Joseph mainly uses Hermit Purple to produce psychic photographs and produce psychic videos on a television. He can also transmit Hamon through the vines, wrap people, and he even made a map out of dust on a road against the battle with Empress."
                }, )
                .setImage('https://i.ytimg.com/vi/i4vv3aR73z0/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('Hermit Purple')
            message.channel.send(hermitPurple)
}

module.exports.config = {
    name: "hermitPurple",
    description: "gives info on hermitPurple",
    usage: "s?hermitPurple",
    accessableby: "Members",
    aliases: ['hermitPurple', 'josephJoestar', 'joseph']
}