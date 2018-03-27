//documentation: https://discord.js.org/#/docs/main/stable/general/welcome

//the file that contains the bot's Discord token (this file is in gitignore)
var auth = require("./auth.json");

//necessary import needed for Discord
const Discord = require('discord.js');
//user client used to run commands
const client = new Discord.Client();
//import our other command files
const basicCommands = require('./basiccommands.js');
const starWarsCommands = require('./starwarscommands.js');
const wowCommands = require('./wowcommands.js');

//logs that the bot is logged in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


//what happens when a message is received
client.on('message', message => {
    //if the message is from this bot it skips
    if (message.author.username != "Community Guild Bot"){
        basicCommands.checkTriggers(message);
        ///checkTriggers(message);
        //console.log(basicCommands.triggers);
    }
});


//var checkTriggers = function(message){  
    

    /* 
    //converts the message content to lowercase and saves it in msg
    var msg = message.content.toLowerCase();
    //checks the triggers
    if (msg == 'ping') {
        basicCommands.pingCommand(message);
    }
    if (msg.includes("thunderfury")){
        wowCommands.thunderfury(message);
    }
    if(msg.includes("darth") || msg.includes("plagueis")){
        starWarsCommands.darthPlageuis(message);
    }
    if(msg.includes("prequel")){
        starWarsCommands.postPrequelMeme(message);
    }
    */
//}

//logs the client in
client.login(auth.token);
  