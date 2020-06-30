const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/peEpC1QRMqCuk/giphy.gif",
                   "https://media.giphy.com/media/VNmyD6qefK1bi/giphy.gif",
                   "https://media.giphy.com/media/3og0IPKBtyl0MlK4HC/giphy.gif",
                   "https://media.giphy.com/media/3ohs7VYaIp0twhQx3i/giphy.gif",
                   "https://media.giphy.com/media/l4FGJp72jQw4e5r9K/giphy.gif",
                   "https://media.giphy.com/media/g0Bm4I6zwAwHePuWsV/giphy.gif",
                   "https://media.giphy.com/media/l4FGs0m8xvABhylQQ/giphy.gif",
                   "https://media.giphy.com/media/xUA7bd9XM2aG3TosnK/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Jughead Jones Gifiniz:")
        .setColor("#FF69B4")
        .setFooter(`İsteyen Kişi ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'r-jughead',
  description: 'Rastgele betty gifi atar.',
  usage: 'r-jughead'
};