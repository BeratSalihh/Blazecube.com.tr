const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

  
  
const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Blaze Cube Yardım Menüsü`)
.setDescription(`
> **s!corona** = Corona Bilgilireni Gösterir.

> **s!avatar** = Avatarını Atar.

> **s!istatistik** = İstatikleri Görürsünüz.

> **s!kullanıcı-bilgi** = Kullanıcı Bilgilerini Görürsünüz

> **s!rol-bilgi** = Rol Hakkında Bilgi Alırsınız.

> **s!rozet-bilgi** = Kişdie Olan Rozetleri  Atar.
 
> **s!sunucu-bilgi** = Sunucu Hakkıdna Bilgi Atar.


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
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}