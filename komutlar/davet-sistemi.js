const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("lrowsxrd v12 bot davet")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=731157771956781157&scope=bot&permissions=8)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/kgAWUG6)")
.setColor("GREEN")
//lrowsxrd
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};