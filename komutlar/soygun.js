const Discord = require('discord.js');

const prosoyguncu = [
  
  "85 Gems Soydun",
  "10 Gems Soydun",
  "Ahhaa Moderatorlere Yakalandın.",
  "1 Gems Soydun",
  "120 Gems  Soydun",
  "250 Gems  Soydun",
  "800 Gems  Soydun!",
  "950 Gems  Soydun",
  "1.000 Gems  Soydun",
  "2.500 Gems  Soydun",
  "7.850 Gems  Soydun",
  "24.657 Gems  Soydun",
  "89.652 Gems  Soydun",
  "278.545 Gems  Soydun",
  "578.546 Gems  Soydun",
  "875.135 Gems  Soydun",
  "205.598 Gems  Soydun",
  "975.124 Gems Soydun",
  "356.451 Gems Soydun",
  "VURGUN!1.000.0000 Gems Soydun!",
];

exports.run = function(client, message) {
//Komutun Kodları
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(
  
  "**Soyguna hazırlanılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Growtopia Merkez Bankasını Soydun!**')
    .setDescription('---------')
      .addField('**Soyulan Para: **',soyguncu)
    .setColor('GREEN')
    
    //Efe Tarafından Kodlanmıştır Lütfen Çalmayınız.
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['soygun'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'soygunyap',//Komutun adı (Komutu girerken lazım olucak)

  description: 'Soygun Yaparsınız',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'soygunyap' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}