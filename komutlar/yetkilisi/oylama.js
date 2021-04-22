const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .addField(`:x: **Yazı Yazman Gerek** :x:`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("RED")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('Oylama Sistemi', client.user.avatarURL())

       .addField(`**Yeni Bir Oylama**`, `**${question}**`)).then(function(message) {

         message.react('<a:Onay1:827821773252067400>');

         message.react('<a:Onay2:832710157653639258>');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
