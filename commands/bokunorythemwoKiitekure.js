const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const boku = new Discord.MessageEmbed()
                .setTitle('Boku no Rhythm Wo Kiitekure')
                .setURL('https://jojo.fandom.com/wiki/Boku_no_Rhythm_wo_Kiitekure#:~:text=Boku%20no%20Rhythm%20wo%20Kiitekure%20(%E3%83%9C%E3%82%AF%E3%81%AE%E3%83%AA%E3%82%BA%E3%83%A0%E3%82%92%E8%81%B4%E3%81%84,featured%20in%20Steel%20Ball%20Run.')
                .setColor(0x9012E4)
                .setDescription('User: Oyecomova')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/6/65/Oyecomova.png/revision/latest?cb=20181022185645')
                .addFields({
                    name: '**Part(s):**',
                    value: '7',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Close-Range',
                    inline: true
                }, {
                    name: '**Stats:**',
                    value: 'Destructive Power: B, Speed: C, Range: C, Durability: B, Precision: E, Development Potential: C'
                }, {
                    name: '**Appearance:**',
                    value: 'Boku no Rhythm Wo Kiitekure appears as a shobill with a large coat and discs on the sides of its head.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Boku no Rhythm Wo Kiitekure is able to insert small bombs into anything its user touches. The bombs are set off when they spring on the air and release significant damage. '
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/9/9f/OyecomovaStand.png/revision/latest?cb=20140727003159')
                .setTimestamp()
                .setFooter('Boku no Rhythm Wo Kiitekure')
            message.channel.send(boku)
}

module.exports.config = {
    name: "bokuNoRhythmWoKiiteKure",
    description: "",
    usage: "s?bokunorhythmwoKiitekure",
    accessableby: "Members",
    aliases: ['listentomyRhythm', 'BokuNoRhythmWoKiitekure', 'Oyecomova', 'oyecomova']
}
