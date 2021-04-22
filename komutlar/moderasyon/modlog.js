const Discord = require('discord.js')
const qqdb = require('quick.db')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
const db = require("quick.db");
  if(db.fetch(`bakim`)) {
    if(message.author.id !== "802928019957481542")
    if(message.author.id !== "754335687725154426") {return message.channel.send('<a:carp:795686494169727026> Şuanda Bakım Modu Açık. Komutlar Kısa Süreliğine Kapalıdır <a:yukleniyor:786602961044111380> https://discord.gg/ZrUT7GfUE4 > Destek Sunucumuza Gelerek herşeyden haberdar olabilir ve bottan daha iyi yararlanabilirsiniz <a:editpepe:795686508044222544>')}
}
  
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın.**`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` **Modlog Kanalı Zaten ayarlı değil.**`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`**ModLog Kanalı başarıyla sıfırlandı.**`);
    return
  }
  
if (!logk) return message.channel.send(`**Yanlış Kullanım! mod-log <#kanal>**`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`**Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.**`);
 message.react('607634966959882250')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log'],
    permLevel: 3,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};