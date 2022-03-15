var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "$";

Client.on("ready", () => {
  console.log("bot fonctionnel !")
  Client.user.setActivity("NotulaKitmap Bestkitmap");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
  Client.user.setStatus('online'); //dnd, invisible, online, idle
});

})

Client.login(process.env.BOT_TOKEN)
