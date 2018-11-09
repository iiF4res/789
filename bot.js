const Discord = require('discord.js');
const bot7 = new Discord.Client();


bot7.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot7.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot7.guilds.size} " ]`);
  console.log(`Users! [ " ${bot7.users.size} " ]`);
  console.log(`channels! [ " ${bot7.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot7.on('message', message => {
  
  if (message.content === 'f-d') {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});


 bot7.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});


bot7.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('7th Lover')
          .then(m => {
            count++;
          })

        }
      }
});


bot7.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs7 <words>`);
if (command == "fs7") {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
  }
});


bot7.on('message', message => {
    if(message.content.startsWith(`JoinVoice`)){
        const channel = message.guild.channels.find('name', "Quran");
        channel.join();
        message.channel.send(`DONE!`)
    }
});



bot7.login(process.env.FB7);



///////////////////////////////////////////////////////////////////////////////////




const bot8 = new Discord.Client();
 bot8.on('message', message => {
  
  if (message.content === `f-d`) {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});

 bot8.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});

bot8.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('8th Lover')
          .then(m => {
            count++;
          })

        }
      }
});



bot8.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs8 <words>`);
if (command == "fs8") {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
  }
});


bot8.on('message', message => {
    if(message.content.startsWith(`JoinVoice`)){
        const channel = message.guild.channels.find('name', "Quran");
        channel.join();
        message.channel.send(`DONE!`)
    }
});



bot8.login(process.env.FB8);

/////////////////////////////////////////////////////////////////////////////////////////


const bot9 = new Discord.Client();
 bot9.on('message', message => {
  
  if (message.content === 'f-d') {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#daily')
}
});

 bot9.on('message', message => {
  
  if (message.content === 'f-r') {
    if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);

message.channel.send('#rep <@505101712839671838>')
}
});

bot9.on('message', message => {
if (message.content === '!spam') {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('9th Lover')
          .then(m => {
            count++;
          })

        }
      }
});




bot9.on('message', message => {
  if (message.author.bot) return;
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`fs9 <words>`);
if (command == "fs9") {
  if(!message.author.id === "505101712839671838") return message.reply(`Just <@505101712839671838> Can use us xD!`);
message.channel.send(args.join("  "))
  }
});


bot9.on('message', message => {
    if(message.content.startsWith(`JoinVoice`)){
        const channel = message.guild.channels.find('name', "Quran");
        channel.join();
        message.channel.send(`DONE!`)
    }
});


bot9.login(process.env.FB9);
