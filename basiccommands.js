var pingCounter = 0;
var lastPingedUser = null;


//all the functions in the export brackets will be available to use in our main file
module.exports = {

    //the trigger phrases for the basic commands
    triggers: ['ping'],

    //On Trigger: pongs back the user.  if the same user pings over and over the bot will sass them and eventually shut up until a new user pings
    pingCommand: function(msg){
        //if this is the first ping then saves the user
        if(lastPingedUser === null){
            lastPingedUser = msg.author;
        }
        //if the user is the same as the last ping then adds a counter, otherside resets the counter and save new user
        else{
            if(lastPingedUser === msg.author){
                pingCounter += 1;
            }
            else{
                lastPingedUser = msg.author;
                pingCounter = 0;
            }
        }

        //the following ar the sass responses back to a ping message
        if (pingCounter < 1){
            msg.channel.send('pong');
        }
        else if (pingCounter == 1){
            msg.channel.send('please stop');
        }
        else if(pingCounter == 2){
            msg.channel.send("I'm begging you");
        }
        else if(pingCounter == 3){
            msg.channel.send("I'm dead inside");
        }
        else if(pingCounter == 4){
            msg.channel.send("Just know that you did this... *commits sudoku*");
        }
        else{
            //do nothing
        }

        console.log(pingCounter);
    }
    

}