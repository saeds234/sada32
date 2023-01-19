const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimkayıtlog.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Kayıt log zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('RED')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimkayıtlog.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`İsim kayıt log kanalı başarıyla verilerden silindi!`)
    .setTimestamp()
    .setColor("GREEN")
    
     return message.channel.send(embed)
    
};

exports.conf = {
  kategori: 'ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'isim-kayıt-log-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};