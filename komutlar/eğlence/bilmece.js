const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var saane = [
"İki yuvarlak biri büyük biri küçük onlar olmasa bize dünya kapkara. ||Göz ve Göz bebeği||",
"En çok kardeşi olan meyve hangi meyvedir? ||Üzüm||",
"Yer altında sakallı kök ||Pırasa||",
"Kuyruğu var, at değil. Kanadı var, kuş değil. ||Balık||",
"Dışı var, içi yok; Tekme yer, suçu yok. ||Top||",
"Akşam baktım çok idi, Sabah baktım yok idi. ||Yıldız||",
"Bir sapı var, yüz topu var. ||Üzüm||",
"Bilgi verir herkese, En güzel dosttur bize. ||Kitap||",    
"Benim bir hayvanım var kuyruğundan uzun burnu var. ||Fil||",    
"Gökte durur paslanmaz, suya düşer ıslanmaz. ||Güneş||",    
"Bir küçük fıçıcık, içi dolu turşucuk. ||Limon||",    
"Gökte gördüm köprü, rengi yedi türlü. ||Gökkuşağı||",    
"Yarım kaşık duvara yapışık. ||Kulak||",    
"Ne kanı var ne canı, beş tanedir parmağı.||Eldiven|| ",    
"Dereler tepeler, şık şık küpeler.||Kiraz||",   
"Çocukların yuvası, bilgi doludur orası. ||Okul||",
"Sarı mendil mavi denize düşerse ne olur? ||Islanır||",        
  ];
  var beraty = saane[Math.floor(Math.random() * saane.length)];
  message.channel.send(`${beraty}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bilmece"
};
