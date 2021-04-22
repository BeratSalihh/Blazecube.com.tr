const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: Bu Komutu Kullanmak İçin "Mesajları Yönet" Yetkisine Sahip Olman Gerekiyor.');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send('<a:no1:729686591169363994> Lütfen Bir Kanal Etiketle!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send('<a:no1:729686591169363994> Geçerli bir süre belirtmeniz gerekiyor!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send('<a:no1:729686591169363994> Geçerli bir kazanan sayısı belirtmeniz gerekiyor!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send('<a:no1:729686591169363994> Geçerli bir ödül belirtmelisiniz!').then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: giveawayNumberWinners,
        hostedBy: client.ayarlar.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.ayarlar.everyoneMention ? "@everyone\n\n" : "")+"<a:EKL:831085041156227082> **ÇEKİLİŞ** <a:EKL:831085041156227082>",
            giveawayEnded: (client.ayarlar.everyoneMention ? "@everyone\n\n" : "")+"<a:EKL:831085041156227082> **ÇEKİLİŞ SONA ERDİ** <a:EKL:831085041156227082>",
            timeRemaining: "<a:alarm1:729686604846989392> **Kalan süre: {duration}**!",
            inviteToParticipate: "**Katılmak için <a:EKL:831085041156227082> tepkisine tıklayın!**",
            winMessage: "<a:alarm1:729686604846989392> **Tebrikler, {winners}! \n <a:Nick:778672533850685463> {prize} Ödülünü Kazandın!**",
            embedFooter: "**Çekiliş**",
            noWinner: "Giveaway iptal edildi, geçerli katılım yok.",
            hostedBy: "<a:Onay1:827821773252067400> **Çekilişi Yapan: {user}**",
            winners: "Kazanan",
            endedAt: "Sona Erdi",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false
            }
        }
    });

    message.channel.send(`Çekiliş ${giveawayChannel} Kanalında Başlatıldı!`).then(m => m.delete({timeout: 5000, reason:"It had to be done"}));
                message.delete({timeout: 6000, reason:"It had to be done"});

};

exports.conf = {
  aliases: ['start'],
  permLevel: 0,
};
exports.help = {
  name: 'başlat',
   description: 'Çekilişi Başlatır.',
  usage: 'başlat #kanal <Süre> <Kazanacak Kişi Sayısı> <Ödül Adı>'
};