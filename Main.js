//documentation: https://discord.js.org/#/docs/main/stable/general/welcome

//the file that contains the bot's Discord token (this file is in gitignore)
var auth = require("./auth.json")

//necessary import needed for Discord
const Discord = require('discord.js');
//user client used to run commands
const client = new Discord.Client();

//logs that the bot is logged in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//the countr for messages to delete
var msgsToDelete = 0;

//what happens when a message is received
client.on('message', msg => {
    //if the message is from this bot it skips unless there are messages to delete
    if (msg.author.username != "Community Guild Bot"){
        //if some says ping bot responds with pong
        if (msg.content == 'ping') {
            msg.channel.send('pong');
        }
        if (msg.content.includes("thunderfury") || msg.content.includes("Thunderfury")){
            thunderfuryCommand(msg);
            msg.delete(7000);
        }
    }
    else{
        if (msgsToDelete > 0){
            msg.delete(7000);
            msgsToDelete -= 1;
        }
    }
});

var thunderfuryCommand = function(msg){
    msg.channel.send('Did sombody say...');
    msg.channel.send("https://imgur.com/fkgAyXv.jpg");
    msg.channel.send("http://media-azeroth.cursecdn.com/attachments/22/258/634950700589428230.jpg");
    msg.channel.send("https://static.fjcdn.com/pictures/Blessed+blade+of+the+windseeker+did+someone+say+orangethunderfury+blessed_a679c6_5315363.png");
    msg.channel.send("https://blizzardwatch.com/wp-content/uploads/2016/03/tf-murloc.jpg");

    msgsToDelete = 5;

    setTimeout(function(){
        msg.channel.send('I guess I was just hearing things.');
    }, 8000);
};

//logs the client in
client.login(auth.token);
  