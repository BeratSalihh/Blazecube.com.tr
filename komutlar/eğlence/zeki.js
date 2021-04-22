const Discord = require('discord.js');
const ayarlar = require('../../ayarlar.json');
exports.run = (client, message, params) => {
let member = message.mentions.members.first()
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }

  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const zeki = new Discord.MessageEmbed()
    .setAuthor("Çok Zekisin!")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription(`${message.author} Tarafından ${member}'a Zeki Unvanı Verildi`)
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780017958658375700/ki.gif`)
    return message.channel.send(zeki);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zeki'],
  permLevel: 0
};

exports.help = {
  name: 'zeki',
  description: 'zeki gifi atar.',
  usage: 'zeki'
};

