const Discord = require("discord.js");
const ayarlar = require("../../botlar.json")
exports.run = (client, message, args) => {
  const botlar = ayarlar.botadi

let logoaltyap = args.slice(0).join("+");
if (!logoaltyap) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/242dd112-5485-4f91-8868-c67ada9a4a65/logo?v=4&text=" + logoaltyap;

const logobotaltyapi = new Discord.MessageEmbed()
.setTitle(`${botlar} Gamer Logosu`)
.setImage(link)
.setFooter(`${botlar} Botundan Logo İstiyen = ${message.author.username}`)
return message.channel.send(logobotaltyapi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "gamer"
};
