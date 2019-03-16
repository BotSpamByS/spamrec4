const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("555983666699042841")
setInterval(function() {
channel.send(`Spam Hmddddddd !!!`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
