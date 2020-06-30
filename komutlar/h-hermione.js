const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/iIqcyjsrIhxK0/giphy.gif",
                   "https://media.giphy.com/media/11vJvF868vno7S/giphy.gif",
                   "https://media.giphy.com/media/UeeJAeey9GJjO/giphy.gif",
                   "https://media.giphy.com/media/l01fjs9HRzU08/giphy.gif",
                   "https://media.giphy.com/media/vlYBYMFArzuOk/giphy.gif",
                   "https://media.giphy.com/media/Y8yQDhQ29MA4E/giphy.gif",
                   "https://media.giphy.com/media/2bEiyfR3OLaMM/giphy.gif",
                   "https://media.giphy.com/media/rTapV77tqAWZO/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Hermione Granger Gifiniz:")
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
  name: 'h-hermione',
  description: 'Rastgele betty gifi atar.',
  usage: 'h-hermione'
};