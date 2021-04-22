const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {

  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© 2021 BlazeCube Bot", client.user.avatarURL())
    .addField("<a:RenkliBakm:732246535877689418> **Botun Sahibi**", "<@728621805979303938>")
    .addField("<a:Sag_Ok:728128526196146280> **Gecikme süreleri**","<a:Sag_Ok:728128526196146280> Mesaj Gecikmesi: {ping1} ms \n<a:Sag_Ok:728128526196146280> Bot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:emoji_63:830077427493503008> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:tik3:728748604864331836> **Çalışma süresi**", seksizaman, true)
    .addField("<a:tik1:729686587415330847> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:pin:729686607778676836> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:Sag_Ok:728128526196146280> **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<a:Sag_Ok:728128526196146280> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<a:Sag_Ok:728128526196146280> **Node.JS sürüm**", `${process.version}`, true)
    .addField("<a:Ayarlar:730727861119614976> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:Sag_Ok:728128526196146280> **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:pin:729686607778676836> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("**<a:alarm1:729686604846989392> Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["is","İs"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
