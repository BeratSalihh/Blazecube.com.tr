const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Blaze Cube Yardım Menüsü')
    .addField('s!ban', 'Belirlenen Kişiye Ban Atarsınız', true)
    .addField('s!caps-engel', 'Caps Engel Açarsınız.', true)
    .addField('s!dm-hg', 'Dm-Hg Ayarlarsınız', true)
    .addField('s!dm-bb', 'DM-bb Ayarlarsınız', true)
    .addField('s!küfür-engel', 'Küfür Engel Kurarsınız.', true)
    .addField('s!mod-log', 'Mod Log Kurarsınız.', true)
    .addField('s!mute-kurulum', 'Mute Kurulumunu Öğrenirsiniz.', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "moderasyon"
}