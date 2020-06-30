const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/l0IybZr4cRzwcxvTW/giphy.gif",
                   "https://media.giphy.com/media/xUOxfjd2RrLgvZ9dzG/giphy.gif",
                   "https://media.giphy.com/media/3ohs8242NtwhqH9UnC/giphy.gif",
                   "https://media.giphy.com/media/pzLcStSdQ1I94vbPPV/giphy.gif",
                   "https://media.giphy.com/media/l0IycFFWkpmmtWC4M/giphy.gif",
                   "https://media.giphy.com/media/3og0IRfjXGvvJ8hoFq/giphy.gif",
                   "https://media.giphy.com/media/l0Iy2ESZxkVI9kLiU/giphy.gif",
                   "https://media.giphy.com/media/e7OPEPMn0rxSAKQqaE/giphy.gif",
                   "https://media.giphy.com/media/xUA7b3jkrKsMEhwlLW/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Betty Cooper Gifiniz:")
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
  name: 'r-betty',
  description: 'Rastgele betty gifi atar.',
  usage: 'r-betty'
};