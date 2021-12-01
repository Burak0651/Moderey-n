const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
//lrowsxrd
exports.run = async (client ,message, args) => {
  //lrowsxrd
if(args[0] === 'aç') {
  //lrowsxrd
db.set(`${message.guild.id}.kufur`, true)
  //lrowsxrd
const kinda = new Discord.MessageEmbed()  
  //lrowsxrd
.setDescription(`Küfür Engel Başarılı Bir Şekilde Akif Edildi!`)
.setColor("GREEN")
//lrowsxrd
return message.channel.send(kinda)
}
  
if (args[0] === 'kapat') {
  //lrowsxrd
db.delete(`${message.guild.id}.kufur`)
  
const kinda = new Discord.MessageEmbed() 
  //lrowsxrd
.setDescription(`Küfür Engel Başarılı Bir Şekilde Deaktif Edildi!`)
.setColor("GREEN")
  
return message.channel.send(kinda)
}
{
  //lrowsxrd
const kinda = new Discord.MessageEmbed() 
  
.setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **${prefix}küfür-engel aç/kapat**')
.setColor("RED")
//lrowsxrd
return message.channel.send(kinda)
}
  //lrowsxrd
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel'], 
 permLevel: 0
};
//lrowsxrd
exports.help = {
 name: 'küfür-engel',
 description: 'lrows v12',
 usage: 'küfür-engel'
};