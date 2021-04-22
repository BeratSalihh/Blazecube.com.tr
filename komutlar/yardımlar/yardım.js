const Discord = require("discord.js");
const db = require("quick.db");
const prefix = "s!"

exports.run = async (client, message, args) => {

  
  
const yardım = new Discord.MessageEmbed()
.setColor("#2f3136")
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Blaze Cube Yardım Menüsü`)
.setDescription(`
** <a:pin:729686607778676836>\`s!logo-yardım\` \n Logo Komutlarını Görüntülersiniz,Kendi Adınıza Özel Resimler Yapabilirsiniz.**
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
${prefix}
`)
.setThumbnail()
.setImage("")



message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yardım"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}