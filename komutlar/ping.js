const Discord = require('discord.js');
const db = require('quick.db');
//lrowsxrd
exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  //lrowsxrd
  .setColor("RED")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    //lrowsxrd
    setInterval(() => {
     //lrowsxrd   
   const only = new Discord.MessageEmbed()
   //lrowsxrd
   .setDescription(`\nMesaj Gecikme Süresi ; **${diff}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor('GREEN')
   //lrowsxrd
    mesaj.edit(only);
   //lrowsxrd   
    }, 5000)
  //lrowsxrd
  //lrowsxrd
  //lrowsxrd
  //lrowsxrd
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'lrows v12',
  usage: 'ping'
};