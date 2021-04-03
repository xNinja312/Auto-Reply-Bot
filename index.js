const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.token);

client.on("message", m =>{
  if(m.author.bot) return
  let args = m.content.split(" ");
let lineee = "رابط الخط"
  if(args[0] == "رابط الخط") {
    m.delete({timeout:100})
    m.channel.send({files: [lineee]})
  }
  if(m.channel.id == m.guild.channels.cache.find(c => c.id == "ID الروم الي هيبعت فيها الخط")){
m.channel.send({files: [lineee]})  } 
});
