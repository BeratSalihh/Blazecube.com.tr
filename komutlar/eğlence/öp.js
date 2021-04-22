const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Üzgün birisini etiketlemelisin')

    
  if ( message.react('😭')) {
      var gif = [
      'https://cdn.discordapp.com/attachments/830869810480021528/830873520518463488/tenor_1.gif','https://cdn.discordapp.com/attachments/830869810480021528/830874595728818196/tenor_2.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('😭 ')) {
    const op = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> Üzgün`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sad',
  description: 'öp',
  usage: 'öp'
};