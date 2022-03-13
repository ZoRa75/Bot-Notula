const Discord = require("discord.js");
const { Permissions } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Client = new Discord.Client({ 
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        
    ]
});

const prefix = "$";

Client.on("ready", () => {
    console.log("Notula - On");
});

Client.on("ready", () => {
  console.log("Lancé avec succès !");
  Client.user.setActivity("inspecter Notula !");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
  Client.user.setStatus('online'); //dnd, invisible, online, idle
});


Client.on("messageCreate", message => {
    if (message.author.bot) return;
//Help Commande
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ff931e")
            .setAuthor("Commandes du bot TrixaMC", "https://media.discordapp.net/attachments/867390142314446899/886594953902428170/pack_icon.png?width=293&height=293",)
            .addField('**__JOUEUR__**', '> .ip', true)
        message.channel.send({ embeds: [embed]});
    }

//ip Commande !
else if(message.content === "!ip"){
    const embed = new Discord.MessageEmbed()
        .setColor("#ff931e")
        .setAuthor("Se connceter au serveur !",)
        .addField('**__IP / PORT__**', '> soon...', true)
    message.channel.send({ embeds: [embed]});
    }

//Ip
    else if(message.content === prefix + "ip"){
    const embed = new Discord.MessageEmbed()
        .setColor("#ff931e")
        .setAuthor("Se connceter au serveur !",)
        .addField('**__IP / PORT__**', '> soon...', true)
    message.channel.send({ embeds: [embed]});
    }
});

Client.on("messageCreate", message => {
  if (message.author.bot) return;
  else if(message.content.includes('discord.gg/') || message.content.includes ('discordapp.com/invite/')){
    if (!message.member.roles.cache.has('945743758719328316')) return message.delete();
  }
});

Client.on('guildMemberAdd', member => {
    let welcomeChannel = Client.channels.cache.get("904731250374365204");
    const exampleEmbed = new MessageEmbed()
    .setColor('#00ff22')
    .setDescription(`<:join:925756655537365043> │ **${member.user.username}**`)
    welcomeChannel.send({embeds: [exampleEmbed]});
});

Client.on('guildMemberRemove', member => {
    let welcomeChannel = Client.channels.cache.get("904731372101468160");
    const exampleEmbed = new MessageEmbed()
    .setColor('#ff0000')
    .setDescription(`<:leave:925756645848543292> │ **${member.user.username}**`)
    welcomeChannel.send({embeds: [exampleEmbed]});
});

Client.on("message", (message) => {
  if (message.content.startsWith("$ban")) {
  if (!message.member.roles.cache.has('831275242605117441')) return message.delete();

      var member = message.mentions.members.first();
      // ban
      member.ban().then((member) => {
          const exampleEmbed = new MessageEmbed()
          .setDescription(`<:leave:925756645848543292> │ **`+ member.displayName + `** à été banni !`)
          .setColor('#ff931e')
          message.channel.send({embeds: [exampleEmbed]});
      }).catch(() => {
          // Failmessage
          message.channel.send("Access Denied");
      });
  }
});

Client.on("message", (message) => {
  if (message.content.startsWith("$kick")) {
  if (!message.member.roles.cache.has('831275242605117441')) return message.delete();

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
// Add User Permissions
if (!message.member.roles.cache.has('831275242605117441')) return message.delete();
        const SayMessage = message.content.slice(4).trim();

        let embed = new Discord.MessageEmbed()
        .setDescription(SayMessage)
        .setColor('#ff931e')

        message.channel.send({ embeds: [embed] }) 
    }
});

Client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content
      .toLowerCase()
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
    const [command, input] = args;
  
    if (command === 'clear' || command === 'purge') {
    if (!message.member.roles.cache.has('831275242605117441')) return;
      if (isNaN(input)) {
        return message.channel
          .send('Veuillez entrer le nombre de message que vous shouaitez supprimer ! :green_book:')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
  
      if (Number(input) < 0) {
        return message.channel
          .send('Veuillez entrer un nombre positif ! :no_entry_sign:')
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      }
      const amount = Number(input) > 100
        ? 101
        : Number(input) + 1;
  
      message.channel.bulkDelete(amount, true)
      .then((_message) => {
        message.channel
          .send(`Un total de \`${_message.size}\` messages ont été supprimé ! :broom:`)
          .then((sent) => {
            setTimeout(() => {
              sent.delete();
            }, 2500);
          });
      });
    }
});


Client.login(process.env.BOT_TOKEN)
