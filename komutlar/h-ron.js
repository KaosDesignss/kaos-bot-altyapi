const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/AUarrmo6rpyX6/giphy.gif",
                   "https://media.giphy.com/media/FCeqsn7FF2xIQ/giphy.gif",
                   "https://media.giphy.com/media/X7byz3vE1NRGU/giphy.gif",
                   "https://media.giphy.com/media/BNFJsNITqUj4Y/giphy.gif",
                   "https://media.giphy.com/media/8VjxKsr4HdZqU/giphy.gif",
                   "https://media.giphy.com/media/dYwzJnEeTXAOQMMh2P/giphy.gif",
                   "https://media.giphy.com/media/sOoX5jiJhVb0I/giphy.gif",
                   "https://media.giphy.com/media/3o751XCnKoIwchqtEs/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Ron Weasley Gifiniz:")
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
  name: 'h-ron',
  description: 'Rastgele betty gifi atar.',
  usage: 'h-ron'
};