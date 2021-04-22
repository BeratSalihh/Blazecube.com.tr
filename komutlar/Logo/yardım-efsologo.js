
const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../../botlar.json')

exports.run = async (client, message, args) => {
let botadi = ayarlar.botadi
  
  
const yardım = new Discord.MessageEmbed()
.setColor("#2f3136")
.setAuthor(``)
.setTitle(``)
.setDescription("")
.setThumbnail()
.setImage("")
.addField(`${botadi} Efsane Logo Menüsü`,`
**:art: = \`s!yıldız\` : Yıldız Logosu Üretir**
**:art: = \`s!yükseliş\` : Yükseliş Logosu Üretir**
**:art: = \`s!tarim\` : Tarım Logosu Üretir**
**:art: = \`s!hemşire\` : Hemşire Logosu Üretir**
**:art: = \`s!çatal-bardak\` : çatal Bardak Logosu Üretir**
**:art: = \`s!kartal\` : Kartal Logosu Üretir**
**:art: = \`s!ates\` : Ateş Logosu Üretir**
**:art: = \`s!instagram2\` : İnstagram Logosu Üretir**
**:art: = \`s!prizma\` : Prizma Logosu Üretir**
`)


message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["yardım"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'efso-logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}
