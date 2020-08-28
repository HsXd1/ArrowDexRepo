const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const stands = new Discord.MessageEmbed()
        .setTitle(`Stand List`)
        .setColor(0x2f3136)
        .addFields({
            name: `Stardust Crusaders`,
            value: `\`s?starPlatinum\` \n \`s?starPlatinumTheWorld\` \n \`s?hermitPurple\` \n \`s?magiciansRed\` \n \`s?hierophantGreen\` \n \`s?silverChariot\` \n \`s?chariotRequiem\` \n\`s?theFool\` \n \`s?theWorld\` \n \`s?towerOfGray\` \n \`s?darkBlueMoon\` \n \`s?strength\` \n \`s?ebonyDevil\` \n \`s?yellowTemperance\` \n \`s?hangedMan\` \n \`s?emperor\` \n \`s?empress\` \n \`s?wheelOfFortune\` \n \`s?justice\` \n \`s?lovers\` \n \`s?sun\` \n \`s?deathThirteen\` \n \`s?judgement\` \n \`s?highPriestess\` \n \`s?geb\` \n \`s?khnum\` \n \`s?tohth\` \n \`s?anubis\` \n \`s?bastet\` \n \`s?sethan\` \n \`s?osiris\` \n \`s?horus\` \n \`s?atum\` \n \`s?tenoreSax\`  \n \`s?cream\``,
            inline: true
        }, {
            name: `Diamond is Unbreakable`,
            value: `\`s?crazyDiamond\` \n \`s?theHand\` \n \`s?echoesAct1\` \n \`s?echoesAct2\` \n \`s?echoesAct3\` \n \`s?heavensDoor\` \n \`s?killerQueen\` \n \`s?sheerHeartAttack\` \n \`s?bitestheDust\` \n \`s?aquaNecklace\` \n \`s?badCompany\` \n \`s?redHotPhiliPepper\` \n \`s?theLock\` \n \`s?surface\` \n \`s?loveDeluxe\` \n \`s?pearlJam\` \n \`s?achtungBaby\` \n \`s?ratt\` \n \`s?harvest\` \n \`s?cinderella\` \n \`s?atomheartFather\` \n \`s?boy2man\` \n \`s?earthWindAndFire\` \n \`s?highwayStar\` \n \`s?strayCat\` \n \`s?superFly\` \n \`s?enigma\` \n \`s?cheapTrick\``,
            inline: true
        }, {
            name: `Vento Aureo`,
            value: `\`s?goldExperience\` \n \`s?goldExperienceRequiem\` \n \`s?stickyFingers\` \n \`s?aerosmith\` \n \`s?purpleHaze\` \n \`s?spiceGirl\` \n \`s?sexPistols\` \n \`s?moodyBlues\` \n \`s?kingCrimson\` \n \`s?chariotRequiem\` \n \`s?blackSabbath\` \n \`s?softMachine\` \n \`s?kraftWork\` \n \`s?littleFeet\` \n \`s?manInTheMirror\` \n \`s?mrPresident\` \n \`s?beachBoy\` \n \`s?theGratefulDead\` \n \`s?babyFace\` \n \`s?whiteAlbum\` \n \`s?clash\` \n \`s?talkingHead\` \n \`s?notoriousBIG\` \n \`s?metallica\` \n \`s?greenDay\` \n \`s?oasis\` \n \`s?rollingStones\``,
            inline: true
        }, {
            name: `Stone Ocean`,
            value: ` \`s?stoneFree\` \n \`s?kiss\` \n \`s?burningDownTheHouse\` \n \`s?fooFighters\` \n \`s?weatherReport\` \n \`s?heavyWeather\` \n \`s?diverDown\` \n \`s?limpBizkit\` \n \`s?survivor\` \n \`s?planetWaves\` \n \`s?yoyoMa\` \n \`s?greenGreenGrassofHome\` \n \`s?jailhouseLock\` \n \`s?gooGooDolls\` \n \`s?manhattanTransfer\` \n \`s?bohemianRhapsody\` \n \`s?skyHigh\` \n \`s?underworld\` \n \`s?highwayToHell\` \n \`s?marilynManson\` \n \`s?jumpinJackFlash\` \n \`s?dragonsDream\` \n \`s?whitesnake\` \n \`s?cMoon\` \n \`s?madeInHeaven\``,
            inline: true
        }, {
            name: `Steel Ball Run`,
            value: `\`s?tuskAct1\` \n \`s?tuskAct2\` \n \`s?tuskAct3\` \n \`s?tuskAct4\` \n \`s?ballBreaker\` \n \`s?oh!LonesomeMe\` \n \`s?scaryMonsters\` \n \`s?creamStarter\` \n \`s?tombOfTheBoom\` \n \`s?bokuNoRhythmWoKiitekure\` \n \`s?mandom\` \n \`s?catchtheRainbow\` \n \`s?sugarMountain\` \n \`s?wired\` \n \`s?tatooYou!\` \n \`s?tubularBells\` \n \`s?20thCenturyBoy\` \n \`s?civilWar\` \n \`s?chocolateDisco\` \n \`s?tickettoRide\` \n \`s?dirtyDeedsDoneDirtCheap\` \n \`s?loveTrain\` \n \`s?inASilentWay\` \n \`s?theWorldAU\` \n \`s?heyYa\``,
            inline: true
        }, {
            name: `Jojolion`,
            value: `\`s?softAndWet\` \n \`s?paisleyPark\` \n \`s?nutKingCall\` \n \`s?paperMoonKing\` \n \`s?kingNothing\` \n \`s?speedKing\` \n \`s?lesFeuilles\` \n \`s?funFunFun\` \n \`s?californiaKingBed\` \n \`s?bornThisWay\` \n \`s?iAmARock\` \n \`s?doobieWah\` \n \`s?loveLoveDeluxe\` \n \`s?schottKey1\` \n \`s?schottKey2\` \n \`s?vitaminC\` \n \`s?walkingHeart\`\n \`s?milagroMan\` \n \`s?blueHawaii\` \n \`s?doggyStyle\` \n \`s?brainStorm\` \n \`s?awaking3Leaves\` \n \`s?doctorWu\` \n \`s?ozonBaby\``,
            inline: true
        })
        .setTimestamp()
        .setFooter(`Stand List`);
    message.channel.send(stands)
}
 
module.exports.config = {
    name: "standList",
    description: "gives standList",
    usage: "s?standList",
    accessableby: "Members",
    aliases: [`standlist`, `stands`, `listofstands`, `list`]
}
