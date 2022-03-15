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

Client.on("messageCreate", message => {
    if (message.authorbot) return;

    //$help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
        .setTitle("Liste des commandes")
        .setDescription("- $ip : Voir l'ip du serveur\n - $vote : Avoir le lien vote du serveur !")
    

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
       Client.on("message", (message) => {
        if (message.content.startsWith("$ban")) {
        if (!message.member.roles.cache.has('831276105809395783')) return message.delete();
      
            var member = message.mentions.members.first();
            
            member.ban().then((member) => {
                const exampleEmbed = new MessageEmbed()
                .setDescription(`<:leave:925756645848543292> │ **`+ member.displayName + `** à été banni !`)
                .setColor('#ff931e')
                message.channel.send({embeds: [exampleEmbed]});
            }).catch(() => {
              
                message.channel.send("Access Denied");
            });
        }
      });
      
      Client.on("message", (message) => {
        if (message.content.startsWith("$kick")) {
        if (!message.member.roles.cache.has('831276105809395783')) return message.delete();
      
            var member = message.mentions.members.first();
            // ban
            member.kick().then((member) => {
                const exampleEmbed = new MessageEmbed()
                .setDescription(`<:leave:925756645848543292> │ **`+ member.displayName + `** à été kick !`)
                .setColor('#ff931e')
                message.channel.send({embeds: [exampleEmbed]});
            }).catch(() => {
                // Failmessage
                message.channel.send("Access Denied");
            });
        }
      });
      
      Client.on('messageCreate', message => {
          if (message.content.startsWith(prefix + 'say')) {
              if (message.author.bot) return;
    
      if (!message.member.roles.cache.has('831276105809395783')) return message.delete();
              const SayMessage = message.content.slice(4).trim();
      
              let embed = new Discord.MessageEmbed()
              .setDescription(SayMessage)
              .setColor('#ff931e')
      
              message.channel.send({ embeds: [embed] }) 
          }
      });
      
      Client.on('message', async (message) => {
          if (!message.content.startsWith(prefix) || message.author.bot) return;
        
          const args = message.content
            .toLowerCase()
            .slice(prefix.length)
            .trim()
            .split(/\s+/);
          const [command, input] = args;
      
          if (command === 'clear' || command === 'purge') {
          if (!message.member.roles.cache.has('831276105809395783')) return;
            if (isNaN(input)) {
              const sent = await message.channel
                    .send('Veuillez entrer le nombre de message que vous shouaitez supprimer ! :green_book:');
                setTimeout(() => {
                    sent.delete();
                }, 2500);
            }
        
            if (Number(input) < 0) {
              const sent_1 = await message.channel
                    .send('Veuillez entrer un nombre positif ! :no_entry_sign:');
                setTimeout(() => {
                    sent_1.delete();
                }, 2500);
            }
            const amount = Number(input) > 100
              ? 101
              : Number(input) + 1;
          }
            message.channel.bulkDelete(amount, true)
            .then((_message) => {
              message.channel
                .send(`Un total de \`${_message.size}\` messages ont été supprimé ! :broom:`)
                .then((sent) => {
                  setTimeout(() => {
                    sent.delete();
                  }, 2500); 
             },
            );
        });
      });
    }
  })

Client.login(process.env.BOT_TOKEN)
