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
  Client.user.setActivity("NotulaKitmap");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
  Client.user.setStatus('online'); //dnd, invisible, online, idle
});

Client.on("messageCreate", message => {
    if (message.authorbot) return;

    //$help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
        .setTitle("Liste des commandes")
        .setDescription("- $ip : Voir l'ip du serveur\n - $vote : Avoir le lien vote du serveur !\n - $say : Envoyez un message via au bot (command admin)")
    

        message.channel.send({ embeds: [embed] });
    }
    //$ip
    else if(message.content === prefix + "ip"){
        const embed = new Discord.MessageEmbed()
        .setTitle("- Ip:")
        .setDescription("- Soon...")

         message.channel.send({ embeds: [embed]});
    }
    //$vote
    else if(message.content === prefix + "vote"){
      const embed = new Discord.MessageEmbed()
      .setTitle("- Vote:")
      .setDescription("-  https://minecraftpocket-servers.com/server/115686/vote/")
      .setURL(" https://minecraftpocket-servers.com/server/115686/vote/")

       message.channel.send({ embeds: [embed]});
  
  }
});


Client.login(process.env.BOT_TOKEN)
