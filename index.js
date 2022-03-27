var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "/";

Client.on("ready", () => {
  console.log("bot fonctionnel !")
  Client.user.setActivity("WATHCHING Chronalll");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING
  Client.user.setStatus('online'); //dnd, invisible, online, idle
});

Client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + 'say')) {
        if (message.author.bot) return;
  
  if (!message.member.roles.cache.has('957727507111641160')) return message.delete();
        const SayMessage = message.content.slice(4).trim();
  
        let embed = new Discord.MessageEmbed()
        .setDescription(SayMessage)
        .setColor('#671394')
  
        message.channel.send({ embeds: [embed] }) 
    }
  });


Client.login(process.env.BOT_TOKEN);
