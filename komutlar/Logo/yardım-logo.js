
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
.addField(`${botadi} Logo Menüsü`,`
**:art: = \`s!efsane\` : Efsane Logo Üretir**
**:art: = \`s!ejderha\` : Ejderha Logo Üretir**
**:art: = \`s!flash\` : Flash Logo Üretir**
**:art: = \`s!gamer\` : Gamer Logo Üretir**
**:art: = \`s!graffiti\` : Graffiti Logo Üretir**
**:art: = \`s!köpek\` : Köpek Logo Üretir**
**:art: = \`s!orumcek\` : Orumcek Logo Üretir**
**:art: = \`s!roket\` : Roket Logo Üretir**
**:art: = \`s!yeşil\` : Yeşil Logo Üretir**
**:art: = \`s!whatsapp\` : Whatsapp Logo Üretir**
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
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:''
}