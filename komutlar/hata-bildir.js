const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('Doğru Kullanım : ${prefix}hata-bildir <bulduğunuz hata>')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()
//lrowsxrd
.setColor('GREEN')
.setDescription('Botta Bulduğunuz Hata Başarıyla Bildirildi.\nEn Yakın Zamanda <@&kanal id> Kanalından Cevap Vereceğiz!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Botta Bulduğu Hata ;**`)

.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen Hata/Bug Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('kanal id').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["hata-bildir","hatabildir"],
    permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'Botta bulduğunuz hatayı belirtilen kanala bildirir.',
    usage: 'hata'
}