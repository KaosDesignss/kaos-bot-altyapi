const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/d6Ni9aqSatPfq/giphy.gif",
                   "https://media.giphy.com/media/Llzk5TKYvgM1i/giphy.gif",
                   "https://media.giphy.com/media/26BRzozg4TCBXv6QU/giphy.gif",
                   "https://media.giphy.com/media/OPBZnaTaC92yA/giphy.gif",
                   "https://media.giphy.com/media/Tl2AK8HOHj7SU/giphy.gif",
                   "https://media.giphy.com/media/l0HU1VArLYvTqxfdC/giphy.gif",
                   "https://media.giphy.com/media/QX0rXtXaDkdJm/giphy.gif",
                   "https://media.giphy.com/media/10eegPlrYjUVAQ/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Harry Potter Gifiniz:")
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
  name: 'h-harry',
  description: 'Rastgele betty gifi atar.',
  usage: 'h-harry'
};