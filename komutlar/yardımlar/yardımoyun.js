const Discord = require("discord.js");
const db = require("quick.db");
const prefix = "s!"

exports.run = async (client, message, args) => {

  
  
const yardım = new Discord.MessageEmbed()
.setColor("#2f3136")
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setTitle(`Blaze Cube Yardım Menüsü`)
.setDescription(`
**> \`s!adamasmaca\` Adam Asmaca Oynayabilirsin **

**> \`s!düello\` Biri İle Savaş Yaparsın.**

**> \`s!efkar-ölçer\` Efkarınısz Ölçer.**

**> \`s!yazan\` Klavyeyi Kırmaya Hazır Ol..**

**> \`s!8ball\` Büyük Soruları Cevaplar.**

**> \`s!kuş-dili-çevici\` Kuş Dili Öğrenemye Hazır Ol**
`)
.addField(
      "» Linkler",
      `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=830738942772248606&scope=bot&permissions=8)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/rneDSnKnCM)`,
      false
    )
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
  name: 'oyun-yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}