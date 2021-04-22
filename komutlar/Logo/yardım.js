const Discord = require('discord.js');
const ayarlar = require("../../botlar.json")
exports.run = async (client, message, args) => { 
let botadi = ayarlar.botadi



let yardım = new Discord.MessageEmbed()  //V12 Koddur
.setAuthor(`${botadi}`)
.setColor('#2f3136')

.addField(`${botadi} Yardım Menüsü`,`
**:white_small_square: = \`s!logo\` : Genel Logoları Görüntülersiniz**
**:white_small_square: = \`s!efso-logo\` : Efsane Logoları Görüntülersiniz**
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`${botadi}`,`[Destek Sunucumuz](https://discord.gg/BemAP5T4yN)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};
exports.help = {
  name: 'logo-yardım'
}; 