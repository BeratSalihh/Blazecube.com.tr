const qdb = require('quick.db');
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
   if(args[0] !== "ayarla"){
    var text = args.slice(0).join(' ')
    if(!text) return message.reply("Bir  değer belirt")
       qdb.set(`dmhgbb_${message.guild.id}`, text)
      return message.reply("**DM-HG-BB ayarlandı!**")
 }

    if(args[0] === "sıfırla"){
      qdb.delete(`dmhgbb_${message.guild.id}`)
      return message.reply("sıfırladm")
    }
}
module.exports.conf = {
  aliases: [], 
  permLevel: 3
}
module.exports.help = {
  name: "dm-hgbb"
}