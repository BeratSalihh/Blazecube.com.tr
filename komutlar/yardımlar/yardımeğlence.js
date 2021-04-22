const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

  
  
const yardım = new Discord.MessageEmbed()
.setColor("ORANGE")
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true})).setTitle(``)
.setTitle(`Blaze Cube Yardım Menüsü`)
.setDescription(`
**s!155** = 155'i Ararsınız.

**s!aduketçek** = Aduket Çekersiniz.

**s!bilmece** = Bot Size Bir Bilmece Sorar.

**s!csgokasa** = Csgoda Kasa Açarsınız

**s!kartopu** = Adınız Yazdığını Kişiye Kartopu Atarsınız.

**s!saat** = TRnin saatini Atar

**s!token** = Size Tokenimi Veririm

**s!wasted** = PPnize Wasted Efekti Verir

**s!yumruk-at** = Yumruk Atarsınız.

**s!şifre **= Yazdığınız Sayıla Şifre Atarım.

**s!çevir** = Yazdığınız Kelimeyi Çevirirsiniz.(en ve tr)

**s!zar** = Zar Atarsınız.

**s!zeki** = Zeki Unvanı Verirsini

`)
.setImage("")
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
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}