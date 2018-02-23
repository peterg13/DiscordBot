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

//what happens when a message is received
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.channel.send('pong');
    }
});



//logs the client in
client.login(auth.token);
  