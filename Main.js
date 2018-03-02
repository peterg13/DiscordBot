//documentation: https://discord.js.org/#/docs/main/stable/general/welcome

//the file that contains the bot's Discord token (this file is in gitignore)
var auth = require("./auth.json");

//necessary import needed for Discord
const Discord = require('discord.js');
//user client used to run commands
const client = new Discord.Client();
//import of cheerio and request
const cheerio = require('cheerio');
const request = require('request');

//logs that the bot is logged in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//the counter for messages to delete
var msgsToDelete = 0;
//limit to how many pings can be sent
var pingCounter = 0;

//what happens when a message is received
client.on('message', message => {
    //if the message is from this bot it skips unless there are messages to delete
    if (message.author.username != "Community Guild Bot"){
        //converts the message content to lowercase and saves it in msg
        var msg = message.content.toLowerCase();
        //if some says ping bot responds with pong
        if (msg == 'ping') {
            if (pingCounter < 1){
                message.channel.send('pong');
                pingCounter += 1;
            }
            else if (pingCounter == 2){
                message.channel.send('please stop');
                pingCounter += 1;
            }
            else if(pingCounter == 3){
                message.channel.send("I'm begging you");
                pingCounter += 1;
            }
            else if(pingCounter == 4){
                message.channel.send("I'm dead inside");
                pingCounter += 1;
            }
            else if(pingCounter == 5){
                message.channel.send("Just know that you did this... *commits sudoku*");
                pingCounter += 1;
            }
            else{
                //do nothing
            }
        }
        else{
            pingCounter = 0;
        }
        if (msg.includes("thunderfury")){
            thunderfuryCommand(message);
            message.delete(7000);
        }
        if(msg.includes("darth") || msg.includes("plagueis")){
            darthPlageuis(message);
        }
        if(msg.includes("prequel")){
            prequelMemes(message);
        }
    }
    else{
        if (msgsToDelete > 0){
            message.delete(7000);
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

    msgsToDelete += 5;

    setTimeout(function(){
        msg.channel.send('I guess I was just hearing things.');
    }, 8000);
};

var darthPlageuis = function(msg){
    msg.channel.send("Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.");
}

var prequelMemes = function(msg){
    var url = 'https://www.reddit.com/r/PrequelMemes/top/';
    request(url, function(error, response, html){
        const $ = cheerio.load(html);
        var links = []
        links = $('.thing');
        var rand = Math.floor(Math.random() * 25);
        console.log($(links[rand]).attr('data-url'));
        msg.channel.send($(links[rand]).attr('data-url'));
    })
}

//logs the client in
client.login(auth.token);
  