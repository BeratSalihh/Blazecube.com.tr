const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://images-ext-1.discordapp.net/external/PuwTSVuQ_p-dYCI_XAfYgzxvOaNiGsOq3cdYxORu4J4/http/exorcist-soft.ucoz.ru/images/BAN.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send('🚫 Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Yumruk Attı!`)
        .setColor("#FF69B4")
        .setFooter(`İyi Yumruktu`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yumruk"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'yumruk-at',
    description: 'Etiketlediniz Kisiye Yumruk Atar.',
    usage: 'yumruk-at'
   }
