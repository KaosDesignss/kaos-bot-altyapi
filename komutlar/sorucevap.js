const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Emin Değilim",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setAuthor('Hata').setDescription('Soru Giriniz'))
    else return message.channel.sendEmbed(new Discord.RichEmbed().setColor('RANDOM').setDescription(cevap).setAuthor('Cevap:'))

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sorucevap', 
  description: 'Sorduğunuz Soruya Rastgele Cevap Verir.',
  usage: 'sorucevap [soru]'
};