const Discord = require('discord.js');
exports.run = (client, message, args) => {
    return message.channel.send("``En Yakın Zamanda Yetkili Ekip Sizinle İlgilenecek``  <@&954293557873758229> ")
};
;
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['DESTEK'],
  permLevel: "0"
};

exports.help = {
  name: "destek",
  description: "destek",
  usage: "destek"
};