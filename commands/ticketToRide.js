const Discord = require("discord.js")
;

module.exports.run = async (bot, message, args) => {
    const ticket = new Discord.MessageEmbed()
                .setTitle('Ticket To Ride')
                .setURL('https://jojo.fandom.com/wiki/Ticket_to_Ride')
                .setColor(0xF76A00)
                .setDescription('User: Lucy Steel')
                .setThumbnail('https://vignette.wikia.nocookie.net/jjba/images/d/d5/Lucy_later_appearance.png/revision/latest/top-crop/width/360/height/450?cb=20150213070819')
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
                    value: 'Destructive Power: , Speed: , Range: , Durability: , Precision: , Development Potential: '
                }, {
                    name: '**Music Reference:**',
                    value: 'Ticket to Ride (Song)'
                }, {
                    name: '**Appearance:**',
                    value: 'Ticket to Ride is a stand fused within Lucy Steel. ',
                    inline: true
                }, {
                    name: '**Abilities:**',
                    value: 'Ticket To Ride protects Lucy Steel from all Damage.'
                }, )
                .setImage('https://vignette.wikia.nocookie.net/jjba/images/b/bc/TicketToRidecolor.png/revision/latest/top-crop/width/360/height/450?cb=20140813210411')
                .setTimestamp()
                .setFooter('Ticket To Ride')
            message.channel.send(ticket)
}

module.exports.config = {
    name: "ticketToRide",
    description: "",
    usage: "s?ticketToRide",
    accessableby: "Members",
    aliases: ['TicketToRide', 'lucysteel', 'lucy']
}
