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
  Client.user.setActivity(".Soso");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
  Client.user.setStatus('online'); //dnd, invisible, online, idle
});

Client.on('message', message => {
if (message.content.toLowerCase().startsWith("say")) 
 {
  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
  if (!Query) message.reply("Please specify something for me to say!")
  else
  {
    message.channel.send(QueryD + " -" + message.author.tag)
}
}


Client.login(process.env.BOT_TOKEN);
});
