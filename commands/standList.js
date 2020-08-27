const Discord = require("discord.js")
const prefix = require("../botsettings.json");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
    const stands = new Discord.MessageEmbed()
        .setTitle(`Stand List`)
        .setColor(0x2f3136)
        .setDescription(`The current prefix for this server is ${prefix}`)
        .addFields({
            name: `Stardust Crusaders`,
            value: `\`${prefix}starPlatinum\` \n \`${prefix}starPlatinumTheWorld\` \n \`${prefix}hermitPurple\` \n \`${prefix}magiciansRed\` \n \`${prefix}hierophantGreen\` \n \`${prefix}silverChariot\` \n \`${prefix}chariotRequiem\` \n\`${prefix}theFool\` \n \`${prefix}theWorld\` \n \`${prefix}towerOfGray\` \n \`${prefix}darkBlueMoon\` \n \`${prefix}strength\` \n \`${prefix}ebonyDevil\` \n \`${prefix}yellowTemperance\` \n \`${prefix}hangedMan\` \n \`${prefix}emperor\` \n \`${prefix}empress\` \n \`${prefix}wheelOfFortune\` \n \`${prefix}justice\` \n \`${prefix}lovers\` \n \`${prefix}sun\` \n \`${prefix}deathThirteen\` \n \`${prefix}judgement\` \n \`${prefix}highPriestess\` \n \`${prefix}geb\` \n \`${prefix}khnum\` \n \`${prefix}tohth\` \n \`${prefix}anubis\` \n \`${prefix}bastet\` \n \`${prefix}sethan\` \n \`${prefix}osiris\` \n \`${prefix}horus\` \n \`${prefix}atum\` \n \`${prefix}tenoreSax\`  \n \`${prefix}cream\``,
            inline: true
        }, {
            name: `Diamond is Unbreakable`,
            value: `\`${prefix}crazyDiamond\` \n \`${prefix}theHand\` \n \`${prefix}echoesAct1\` \n \`${prefix}echoesAct2\` \n \`${prefix}echoesAct3\` \n \`${prefix}heavensDoor\` \n \`${prefix}killerQueen\` \n \`${prefix}sheerHeartAttack\` \n \`${prefix}bitestheDust\` \n \`${prefix}aquaNecklace\` \n \`${prefix}badCompany\` \n \`${prefix}redHotPhiliPepper\` \n \`${prefix}theLock\` \n \`${prefix}surface\` \n \`${prefix}loveDeluxe\` \n \`${prefix}pearlJam\` \n \`${prefix}achtungBaby\` \n \`${prefix}ratt\` \n \`${prefix}harvest\` \n \`${prefix}cinderella\` \n \`${prefix}atomheartFather\` \n \`${prefix}boy2man\` \n \`${prefix}earthWindAndFire\` \n \`${prefix}highwayStar\` \n \`${prefix}strayCat\` \n \`${prefix}superFly\` \n \`${prefix}enigma\` \n \`${prefix}cheapTrick\``,
            inline: true
        }, {
            name: `Vento Aureo`,
            value: `\`${prefix}goldExperience\` \n \`${prefix}goldExperienceRequiem\` \n \`${prefix}stickyFingers\` \n \`${prefix}aerosmith\` \n \`${prefix}purpleHaze\` \n \`${prefix}spiceGirl\` \n \`${prefix}sexPistols\` \n \`${prefix}moodyBlues\` \n \`${prefix}kingCrimson\` \n \`${prefix}chariotRequiem\` \n \`${prefix}blackSabbath\` \n \`${prefix}softMachine\` \n \`${prefix}kraftWork\` \n \`${prefix}littleFeet\` \n \`${prefix}manInTheMirror\` \n \`${prefix}mrPresident\` \n \`${prefix}beachBoy\` \n \`${prefix}theGratefulDead\` \n \`${prefix}babyFace\` \n \`${prefix}whiteAlbum\` \n \`${prefix}clash\` \n \`${prefix}talkingHead\` \n \`${prefix}notoriousBIG\` \n \`${prefix}metallica\` \n \`${prefix}greenDay\` \n \`${prefix}oasis\` \n \`${prefix}rollingStones\``,
            inline: true
        }, {
            name: `Stone Ocean`,
            value: ` \`${prefix}stoneFree\` \n \`${prefix}kiss\` \n \`${prefix}burningDownTheHouse\` \n \`${prefix}fooFighters\` \n \`${prefix}weatherReport\` \n \`${prefix}heavyWeather\` \n \`${prefix}diverDown\` \n \`${prefix}limpBizkit\` \n \`${prefix}survivor\` \n \`${prefix}planetWaves\` \n \`${prefix}yoyoMa\` \n \`${prefix}greenGreenGrassofHome\` \n \`${prefix}jailhouseLock\` \n \`${prefix}gooGooDolls\` \n \`${prefix}manhattanTransfer\` \n \`${prefix}bohemianRhapsody\` \n \`${prefix}skyHigh\` \n \`${prefix}underworld\` \n \`${prefix}highwayToHell\` \n \`${prefix}marilynManson\` \n \`${prefix}jumpinJackFlash\` \n \`${prefix}dragonsDream\` \n \`${prefix}whitesnake\` \n \`${prefix}cMoon\` \n \`${prefix}madeInHeaven\``,
            inline: true
        }, {
            name: `Steel Ball Run`,
            value: `\`${prefix}tuskAct1\` \n \`${prefix}tuskAct2\` \n \`${prefix}tuskAct3\` \n \`${prefix}tuskAct4\` \n \`${prefix}ballBreaker\` \n \`${prefix}oh!LonesomeMe\` \n \`${prefix}scaryMonsters\` \n \`${prefix}creamStarter\` \n \`${prefix}tombOfTheBoom\` \n \`${prefix}bokuNoRhythmWoKiitekure\` \n \`${prefix}mandom\` \n \`${prefix}catchtheRainbow\` \n \`${prefix}sugarMountain\` \n \`${prefix}wired\` \n \`${prefix}tatooYou!\` \n \`${prefix}tubularBells\` \n \`${prefix}20thCenturyBoy\` \n \`${prefix}civilWar\` \n \`${prefix}chocolateDisco\` \n \`${prefix}tickettoRide\` \n \`${prefix}dirtyDeedsDoneDirtCheap\` \n \`${prefix}loveTrain\` \n \`${prefix}inASilentWay\` \n \`${prefix}theWorldAU\` \n \`${prefix}heyYa\``,
            inline: true
        }, {
            name: `Jojolion`,
            value: `\`${prefix}softAndWet\` \n \`${prefix}paisleyPark\` \n \`${prefix}nutKingCall\` \n \`${prefix}paperMoonKing\` \n \`${prefix}kingNothing\` \n \`${prefix}speedKing\` \n \`${prefix}lesFeuilles\` \n \`${prefix}funFunFun\` \n \`${prefix}californiaKingBed\` \n \`${prefix}bornThisWay\` \n \`${prefix}iAmARock\` \n \`${prefix}doobieWah\` \n \`${prefix}loveLoveDeluxe\` \n \`${prefix}schottKey1\` \n \`${prefix}schottKey2\` \n \`${prefix}vitaminC\` \n \`${prefix}walkingHeart\`\n \`${prefix}milagroMan\` \n \`${prefix}blueHawaii\` \n \`${prefix}doggyStyle\` \n \`${prefix}brainStorm\` \n \`${prefix}awaking3Leaves\` \n \`${prefix}doctorWu\` \n \`${prefix}ozonBaby\``,
            inline: true
        })
        .setTimestamp()
        .setFooter(`Stand List`);
    message.channel.send(stands)
}
 
module.exports.config = {
    name: "standList",
    description: "gives standList",
    usage: "?standList",
    accessableby: "Members",
    aliases: [`standlist`, `stands`, `listofstands`, `list`]
}
