//documentation: https://discord.js.org/#/docs/main/stable/general/welcome

//the file that contains the bot's Discord token (this file is in gitignore)
var auth = require("./auth.json");

//necessary import needed for Discord
const Discord = require('discord.js');
//user client used to run commands
const client = new Discord.Client();
//the command class
const Command = require('./Command.js');
//import our other command files
const basicCommands = require('./basiccommands.js');
const starWarsCommands = require('./starwarscommands.js');
const wowCommands = require('./wowcommands.js');

//array off commands that will be initialized by the "initCommands()" function
var commands = [];

//logs that the bot is logged in and initializes the commands
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  initCommands();
});


//what happens when a message is received
client.on('message', message => {
    //if the message is from this bot it skips
    if (message.author.username != "Community Guild Bot"){
        for(i = 0; i < commands.length; i++){
            if(commands[i].checkTriggers(message) == true){
                break;
            }
        }
        
    }
});

//logs the client in
client.login(auth.token);

//innitializes all of the commands and pushes them to the "commands" array
var initCommands = function(){
    var ping = new Command(basicCommands.ping.triggers, basicCommands.ping.command);
    commands.push(ping);
    var thunderfury = new Command(wowCommands.thunderfury.triggers, wowCommands.thunderfury.command);
    commands.push(thunderfury);
    var prequelMeme = new Command(starWarsCommands.prequelMeme.triggers, starWarsCommands.prequelMeme.command);
    commands.push(prequelMeme);
    var dartPlageuis = new Command(starWarsCommands.darthPlageuis.triggers, starWarsCommands.darthPlageuis.command);
    commands.push(dartPlageuis);
};
  