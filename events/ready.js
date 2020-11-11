const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("js?help || Jsuther-Apps/JusBot-Music", {type: "WATCHING"});
}