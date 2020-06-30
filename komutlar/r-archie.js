const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/64YObP3sXx5PG/giphy.gif",
                   "https://media.giphy.com/media/ABRMcg63mcWcg/giphy.gif",
                   "https://media.giphy.com/media/3o7btZFc5BYTInjCX6/giphy.gif",
                   "https://media.giphy.com/media/xlzMTPMj4NI8qFzi8t/giphy.gif",
                   "https://media.giphy.com/media/xUA7b3FgaociCj5Dzy/giphy.gif",
                   "https://media.giphy.com/media/93cpecx9hMOfjDzwup/giphy.gif",
                   "https://media.giphy.com/media/20Prq0aCpAwHWDswfm/giphy.gif",
                   "https://media.giphy.com/media/xUA7b6FhrLYKETkMsE/giphy.gif",
                   "https://media.giphy.com/media/kg1UrPqDdL8mKSDRFY/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Archie Andrews Gifiniz:")
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
  name: 'r-archie',
  description: 'Rastgele betty gifi atar.',
  usage: 'r-archie'
};