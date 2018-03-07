var pingCounter = 0;
var lastPingedUser = null;

//all the fucnctions in the export brackets will be available to use in our main file
module.exports = {

    pingCommand: function(msg){

        if(lastPingedUser === null){
            lastPingedUser = msg.author;
        }
        else{
            if(lastPingedUser === msg.author){
                pingCounter += 1;
            }
            else{
                lastPingedUser = msg.author;
                pingCounter = 0;
            }
        }

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