const Discord = require('discord.js')
const db = require('quick.db')
//lrowsxrd
exports.run = async(client, message, args) => {
  //lrowsxrd
if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`);
//lrowsxrd
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  //lrowsxrd
if (args[0] === "sıfırla" || args[0] === "kapat") {
  //lrowsxrd
if(!logkanal) return message.channel.sendEmbed(new Discord.MessageEmbed()
    //lrowsxrd                                           
.setDescription(`Mod-Log kanalı zaten ayarlı değil!`)
.setColor("RED"));
   //lrowsxrd 
db.delete(`codeminglog_${message.guild.id}`)
  //lrowsxrd
message.channel.sendEmbed(new Discord.MessageEmbed()
   //lrowsxrd                       
.setDescription(`Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));
//lrowsxrd
return
}
  //lrowsxrd
if (!logk) return message.channel.sendEmbed(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı belirt!`)
.setColor("RED"));
 //lrowsxrd
//lrowsxrd
db.set(`codeminglog_${message.guild.id}`, logk.id)
//lrowsxrd
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};
//lrowsxrd
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0 
};
//lrowsxrd
exports.help = {
    name: 'modlog',
    description: 'lrowsv12',
    usage: 'modlog'
};