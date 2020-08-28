const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const stand = new Discord.MessageEmbed()
                .setTitle('Doobie Wah!')
                .setURL('https://jojo.fandom.com/wiki/Doobie_Wah!')
                .setColor(0x63CCE8)
                .setDescription('User: Aisho Dainenjiyama')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/e/e8/Aishou.png/revision/latest/top-crop/width/360/height/450?cb=20180404221632')
                .addFields({
                    name: '**Part(s):**',
                    value: '8',
                    inline: true
                }, {
                    name: '**Stand Type:**',
                    value: 'Automatic',
                    inline: true
                }, {
                    name: '**Music Reference:**',
                    value: "Somethin's Happening, a Peter Frampton song."
                }, {
                    name: '**Appearance:**',
                    value: 'Doobie Wah! appears as a blue spinning small tornado that kind of looks like a humanoid genie. It has bladed index fingers, two drooping horns, and a somewhat crown on its head.',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: "Doobie Wah!'s ability is to relentlessly pursue a target wherever they are. It is usually paired with the owner to make it more efficient."
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/e/ea/Doobie_Wah%21_Coloured.png/revision/latest/scale-to-width-down/350?cb=20171127175045')
                .setTimestamp()
                .setFooter('Doobie Wah!')
            message.channel.send(stand)
}

module.exports.config = {
    name: "doobieWah",
    description: "",
    usage: "s?doobieWah",
    accessableby: "Members",
    aliases: ['aisho']
}