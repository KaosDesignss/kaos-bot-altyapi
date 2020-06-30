const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('Rainbow')
    .setAuthor(`KaosBOT | Yardım Komutları`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
      .addField('**Genel**', '`ping`, `kick`, `oylama`, `reboot`, `ban`, `banlist`, `dmduyuru`, `mute` , `user-info`, `avatar`, `botkontrol`, `havadurumu`, `başvuru` ')
      .addField('**Gerekli Komutlar**', '`otorol`, `sayaç`, `rol-bilgi`, `rol-ver`, `emojiler` ')
      .addField('**Eğlence Komutları**', '`soygun`, `sor`, `sorucevap`, `gs`, `fb`, `bulanık`, `kaç-cm`, `malmıyım`')
      .addField('**Sunucu Komutları**', ' `küfür-engel`, `reklam-engelleme`, `yavaş-mod`, `sunucubilgi`, `sil` ')
      .addField('**Riverdale Komutları**', ' `r-betty`, `r-archie`, `r-jughead`, `r-veronica`')
      .addField('**Harry Potter Komutları**', ' `h-harry`, `h-hermione`, `h-ron`, `h-snape`, `h-voldemort`')

    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};  